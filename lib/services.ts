import "server-only";

import fs from "node:fs";
import path from "node:path";

import type { Service, ServiceCategory } from "@/lib/service-types";

const HOMEPAGE_ORDER = [
  "general-checkup",
  "teeth-cleaning",
  "root-canal",
  "dental-implants",
  "teeth-whitening",
  "emergency-dental",
] as const;

const SERVICE_IMAGE_MAP: Record<string, string> = {
  "general-checkup": "tooth cheking iamge.png",
  "teeth-cleaning": "Teeth Cleaning & Scaling.png.jpg",
  "tooth-extraction": "tooth-extraction.png",
  "tooth-filling": "Tooth Filling.png",
  "root-canal": "root canal treatement.png",
  "dental-implants": "dental implants.png",
  "teeth-whitening": "Teeth Whitening & Bleaching.png",
  veneers: "Porcelain Veneers.png.jpg",
  "crowns-bridges": "Dental Crowns & Bridges.png",
  orthodontics: "services images.png",
  dentures: "Dentures — Full & Partial.png",
  "gum-treatment": "Gum Disease Treatment.png",
  "paediatric-dentistry": "dental sealants.png",
  "smile-makeover": "dental chair image.png",
  "sensitivity-treatment": "Teeth Sensitivity Treatment.png",
  "dental-xrays": "Dental X-rays & Digital Diagnostics.png",
  "tmj-treatment": "Jaw Pain & TMJ Treatment.png",
  "emergency-dental": "toothe surgery.png",
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

function resolveMappedServiceImage(slug: string) {
  const filename = SERVICE_IMAGE_MAP[slug];
  if (!filename) {
    return "/services/services images.png";
  }

  const absolutePath = path.join(process.cwd(), "public", "services", filename);
  if (fs.existsSync(absolutePath)) {
    return `/services/${filename}`;
  }

  return "/services/services images.png";
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
  const title = String(data.title);
  const showHomepageRaw = String(data.show_homepage ?? "NO");

  return {
    slug,
    category: String(data.category) as ServiceCategory,
    imageSrc: resolveMappedServiceImage(slug),
    imageAlt: `${title} at Dr. Yasmin Dental Clinic`,
    badgeColor: (data.badge_color as string | undefined) ?? "bg-blue-100 text-blue-700",
    title,
    shortDesc: String(data.short_desc ?? ""),
    duration: String(data.duration ?? ""),
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
