import type { MetadataRoute } from "next";

import { articlePages, SITE_LAST_UPDATED, SITE_URL } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseEntries: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "daily",
      priority: 1,
      images: [absoluteUrl("/opengraph-image")],
    },
  ];

  const articleEntries = articlePages.map((page) => ({
    url: `${SITE_URL}${page.href}`,
    lastModified: page.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.8,
    images: [absoluteUrl("/opengraph-image")],
  }));

  return [...baseEntries, ...articleEntries];
}
