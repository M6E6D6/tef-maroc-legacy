import type { MetadataRoute } from "next";
import { SERVICE_SLUGS } from "@/data/services-detail";
import { TRAINING_CATEGORY_SLUGS } from "@/data/trainings";
import { siteConfig } from "@/data/site";
import { defaultLocale, locales } from "@/i18n/translations";

const paths = [
  "",
  "/about",
  "/trainings",
  ...TRAINING_CATEGORY_SLUGS.map((slug) => `/trainings/${slug}`),
  "/services",
  ...SERVICE_SLUGS.map((slug) => `/services/${slug}`),
  "/contact",
];

function sitemapPriority(path: string): number {
  if (path === "") return 1;
  if (path === "/about" || path === "/trainings" || path === "/services") return 0.95;
  if (path === "/contact") return 0.9;
  if (path.startsWith("/trainings/") || path.startsWith("/services/")) return 0.72;
  return 0.85;
}

function sitemapChangeFrequency(path: string): MetadataRoute.Sitemap[0]["changeFrequency"] {
  if (path === "") return "weekly";
  if (
    path.startsWith("/trainings/") ||
    path.startsWith("/services/") ||
    path === "/about" ||
    path === "/trainings" ||
    path === "/services"
  ) {
    return "monthly";
  }
  return "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.url.replace(/\/$/, "");
  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    const suffix = path === "" ? "" : path;
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[locale] = `${base}/${locale}${suffix}`;
    }
    languages["x-default"] = `${base}/${defaultLocale}${suffix}`;

    for (const locale of locales) {
      entries.push({
        url: `${base}/${locale}${suffix}`,
        lastModified: now,
        changeFrequency: sitemapChangeFrequency(path),
        priority: sitemapPriority(path),
        alternates: {
          languages,
        },
      });
    }
  }

  return entries;
}
