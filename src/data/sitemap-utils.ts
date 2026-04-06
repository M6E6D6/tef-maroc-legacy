import { SITEMAP_PATH_SUFFIXES } from "@/data/sitemap-paths";
import { siteConfig } from "@/data/site";
import { defaultLocale, locales } from "@/i18n/translations";

export function sitemapPriority(path: string): number {
  if (path === "") return 1;
  if (path === "/about" || path === "/trainings" || path === "/services") return 0.95;
  if (path === "/contact") return 0.9;
  if (path.startsWith("/trainings/") || path.startsWith("/services/")) return 0.72;
  return 0.85;
}

export function sitemapChangeFrequency(path: string): "weekly" | "monthly" {
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

function escapeXmlAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Sitemap 0.9 + hreflang alternate links */
export function buildSitemapXml(): string {
  const now = new Date().toISOString();
  const base = siteConfig.url.replace(/\/$/, "");

  const lines: string[] = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
  ];

  for (const path of SITEMAP_PATH_SUFFIXES) {
    const suffix = path === "" ? "" : path;
    for (const locale of locales) {
      const loc = `${base}/${locale}${suffix}`;
      lines.push(`<url>`);
      lines.push(`<loc>${escapeXmlAttr(loc)}</loc>`);
      for (const l of locales) {
        const href = `${base}/${l}${suffix}`;
        lines.push(
          `<xhtml:link rel="alternate" hreflang="${l}" href="${escapeXmlAttr(href)}" />`,
        );
      }
      const xDefault = `${base}/${defaultLocale}${suffix}`;
      lines.push(
        `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXmlAttr(xDefault)}" />`,
      );
      lines.push(`<lastmod>${now}</lastmod>`);
      lines.push(`<changefreq>${sitemapChangeFrequency(path)}</changefreq>`);
      lines.push(`<priority>${sitemapPriority(path)}</priority>`);
      lines.push(`</url>`);
    }
  }

  lines.push(`</urlset>`);
  return lines.join("\n");
}
