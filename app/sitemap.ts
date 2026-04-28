import type { MetadataRoute } from "next";

import { clinicInfo, sitePages } from "@/lib/clinic";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return sitePages.map((page) => ({
    url: `${clinicInfo.website}${page === "/" ? "" : page}`,
    lastModified: now,
    changeFrequency: page === "/" ? "weekly" : "monthly",
    priority: page === "/" ? 1 : 0.8,
  }));
}
