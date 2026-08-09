import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL.toString(),
      changeFrequency: "monthly",
      priority: 1,
      // lastModified is deliberately omitted: it would change on every deploy
      // and signal an edit that never happened.
    },
  ];
}
