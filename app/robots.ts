import type { MetadataRoute } from "next";

import { clinicInfo } from "@/lib/clinic";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${clinicInfo.website}/sitemap.xml`,
    host: clinicInfo.website,
  };
}
