import "server-only";

import fs from "node:fs";
import path from "node:path";
import type { Service, ServiceCategory, ServiceDisplayType } from "@/lib/service-types";

const HOMEPAGE_ORDER = [
  "general-checkup",
  "teeth-cleaning",
  "root-canal",
  "dental-implants",
  "teeth-whitening",
  "emergency-dental",
] as const;

const IMAGE_ICON_FALLBACK: Record<
  string,
  { iconName: string; iconColor: string; iconBg: string }
> = {
  "general-checkup": {
    iconName: "Stethoscope",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  "teeth-cleaning": {
    iconName: "Brush",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-100",
  },
  "root-canal": { iconName: "Zap", iconColor: "text-red-500", iconBg: "bg-red-100" },
  "dental-implants": {
    iconName: "Anchor",
    iconColor: "text-gray-600",
    iconBg: "bg-gray-100",
  },
  "teeth-whitening": {
    iconName: "Sun",
    iconColor: "text-yellow-500",
    iconBg: "bg-yellow-100",
  },
  orthodontics: {
    iconName: "GitBranch",
    iconColor: "text-purple-500",
    iconBg: "bg-purple-100",
  },
  "emergency-dental": {
    iconName: "AlertCircle",
    iconColor: "text-red-600",
    iconBg: "bg-red-100",
  },
};

function cleanText(value: string) {
  return value
    .replace(/\s+/g, " ")
    .replace(/\s*\[[^\]]+\]\s*/g, " ")
    .replace(/^"+|"+$/g, "")
    .trim();
}

function parseHomepagePosition(raw: string) {
  const posMatch = raw.match(/position\s*(\d+)/i);
  return posMatch ? Number(posMatch[1]) : undefined;
}

function localFileExists(relativePublicPath: string) {
  const absolute = path.join(process.cwd(), "public", relativePublicPath);
  return fs.existsSync(absolute);
}

function resolveImageSrc(slug: string, localImageRaw?: string, remoteImageRaw?: string) {
  const checkedCandidates = new Set<string>();

  if (localImageRaw) {
    const normalized = localImageRaw
      .replace(/^\/?public\//, "")
      .replace(/^\/+/, "")
      .trim();
    if (normalized) {
      checkedCandidates.add(normalized);
    }
  }

  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    checkedCandidates.add(`services/${slug}.${ext}`);
  }

  for (const candidate of checkedCandidates) {
    if (localFileExists(candidate)) {
      return `/${candidate.replace(/\\/g, "/")}`;
    }
  }

  return remoteImageRaw;
}

function parseServiceBlock(block: string): Service | null {
  const data: Record<string, string | string[] | null> = {};
  let currentKey: string | null = null;

  for (const rawLine of block.split(/\r?\n/)) {
    const line = rawLine.trimEnd();
    const kvMatch = line.trim().match(/^([a-z_]+)\s*:\s*(.*)$/);
    if (kvMatch) {
      const key = kvMatch[1];
      const rawValue = kvMatch[2].trim();
      currentKey = key;

      if (key === "expect") {
        data[key] = [];
      } else if (rawValue === "null") {
        data[key] = null;
      } else {
        data[key] = cleanText(rawValue);
      }
      continue;
    }

    const trimmed = line.trim();
    if (!trimmed || trimmed === "EXPAND DETAIL:") {
      continue;
    }

    if (currentKey === "expect" && trimmed.startsWith("- ")) {
      const points = (data.expect ?? []) as string[];
      points.push(cleanText(trimmed.slice(2)));
      data.expect = points;
      continue;
    }

    if (currentKey && typeof data[currentKey] === "string") {
      data[currentKey] = cleanText(`${data[currentKey]} ${trimmed}`);
    }
  }

  if (!data.slug || !data.title || !data.category) {
    return null;
  }

  const slug = String(data.slug);
  const imageSrc = resolveImageSrc(
    slug,
    (data.local_image as string | undefined) ?? undefined,
    (data.image_url as string | undefined) ?? undefined,
  );

  let displayType = (data.display_type as ServiceDisplayType | undefined) ?? "ICON";
  let iconName = (data.icon_name as string | undefined) ?? undefined;
  let iconColor = (data.icon_color as string | undefined) ?? undefined;
  let iconBg = (data.icon_bg as string | undefined) ?? undefined;

  if (displayType === "IMAGE" && !imageSrc) {
    const fallback = IMAGE_ICON_FALLBACK[slug];
    if (fallback) {
      displayType = "ICON";
      iconName = fallback.iconName;
      iconColor = fallback.iconColor;
      iconBg = fallback.iconBg;
    }
  }

  const showHomepageRaw = String(data.show_homepage ?? "NO");
  return {
    slug,
    category: String(data.category) as ServiceCategory,
    displayType,
    imageSrc: imageSrc ? cleanText(imageSrc) : undefined,
    imageAlt: (data.image_alt as string | undefined) ?? `${data.title} service image`,
    iconName,
    iconColor,
    iconBg,
    badgeColor: (data.badge_color as string | undefined) ?? "bg-blue-100 text-blue-700",
    title: String(data.title),
    shortDesc: String(data.short_desc ?? ""),
    duration: String(data.duration ?? ""),
    price: String(data.price ?? ""),
    badgeExtra: (data.badge_extra as string | null | undefined) ?? undefined,
    fullDesc: String(data.full_desc ?? ""),
    expect: ((data.expect as string[] | undefined) ?? []).map(cleanText),
    whoNeeds: String(data.who_needs ?? ""),
    note: String(data.note ?? ""),
    showHomepage: /yes/i.test(showHomepageRaw),
    homepagePosition: parseHomepagePosition(showHomepageRaw),
  };
}

let cachedServices: Service[] | null = null;

export function getAllServices() {
  if (cachedServices) {
    return cachedServices;
  }

  const filePath = path.join(process.cwd(), "services.md");
  const source = fs.readFileSync(filePath, "utf8");
  const sections = source.split("### SERVICE ").slice(1);

  const parsed = sections
    .map((section) => {
      const blockMatch = section.match(/```\r?\n([\s\S]*?)\r?\n```/);
      return blockMatch ? parseServiceBlock(blockMatch[1]) : null;
    })
    .filter((service): service is Service => Boolean(service));

  cachedServices = parsed;
  return parsed;
}

export function getHomepageServices() {
  const all = getAllServices();
  const map = new Map(all.map((service) => [service.slug, service]));
  return HOMEPAGE_ORDER.map((slug) => map.get(slug)).filter(
    (service): service is Service => Boolean(service),
  );
}
