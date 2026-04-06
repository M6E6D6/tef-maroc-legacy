import { buildSitemapXml } from "@/data/sitemap-utils";

export const dynamic = "force-static";

/**
 * Sitemap at `/sitemap.xml` via `src/app/sitemap.xml/route.ts`.
 * Do not add `public/sitemap.xml` (it would override this route).
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
