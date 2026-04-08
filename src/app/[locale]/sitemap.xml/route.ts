import { buildSitemapXml } from "@/data/sitemap-utils";

export const dynamic = "force-static";

/**
 * Locale-friendly sitemap endpoint (e.g. `/fr/sitemap.xml`).
 * Returns the same XML as root `/sitemap.xml`.
 */
export function GET(): Response {
  const xml = buildSitemapXml();
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
