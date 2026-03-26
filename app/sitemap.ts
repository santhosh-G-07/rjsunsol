import type { MetadataRoute } from "next";
import { BLOGS_DATA, SERVICES_DATA } from "@/lib/constants";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...SERVICES_DATA.map((service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/blogs`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    ...BLOGS_DATA.map((post) => ({
      url: `${SITE_URL}/blogs/${post.slug}`,
      lastModified: new Date(post.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${SITE_URL}/projects`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/cookies`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
