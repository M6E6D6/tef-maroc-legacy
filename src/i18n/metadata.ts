import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { defaultLocale, locales, type Locale } from "@/i18n/translations";

/**
 * Optional verification tokens (set in hosting env). Google: Search Console → Ownership → HTML tag.
 * - NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
 * - NEXT_PUBLIC_BING_SITE_VERIFICATION (Bing Webmaster)
 * - NEXT_PUBLIC_YANDEX_SITE_VERIFICATION
 */
export function searchEngineVerification(): Metadata["verification"] | undefined {
  const google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
  const yandex = process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION?.trim();
  const bing = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION?.trim();

  const other: Record<string, string> = {};
  if (bing) other["msvalidate.01"] = bing;

  if (!google && !yandex && Object.keys(other).length === 0) return undefined;

  return {
    ...(google ? { google } : {}),
    ...(yandex ? { yandex } : {}),
    ...(Object.keys(other).length ? { other } : {}),
  };
}

/** `path` is without locale: `/`, `/about`, `/contact`, … */
export function localeAlternates(locale: Locale, path: string): NonNullable<Metadata["alternates"]> {
  const normalized = path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;
  const suffix = normalized === "/" ? "" : normalized;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `/${l}${suffix}`;
  }
  languages["x-default"] = `/${defaultLocale}${suffix}`;

  return {
    canonical: `/${locale}${suffix}`,
    languages,
  };
}

export function ogLocaleFor(locale: Locale): string {
  if (locale === "fr") return "fr_MA";
  if (locale === "ar") return "ar_MA";
  return "en_US";
}

export function ogAlternateLocales(locale: Locale): string[] {
  return locales.filter((l) => l !== locale).map(ogLocaleFor);
}

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${p}`;
}

type PageSeo = { title: string; description: string };

/**
 * Métadonnées complètes par page localisée (canonical, hreflang, Open Graph, Twitter).
 */
export function buildLocalePageMetadata(
  locale: Locale,
  pathSegment: "" | "/about" | "/trainings" | "/services" | "/contact",
  seo: PageSeo,
  keywords?: string[],
): Metadata {
  const pathForAlternates = pathSegment === "" ? "/" : pathSegment;
  const urlPath = pathSegment === "" ? `/${locale}` : `/${locale}${pathSegment}`;

  const base: Metadata = {
    title: seo.title,
    description: seo.description,
    alternates: localeAlternates(locale, pathForAlternates),
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: `${seo.title} | ${siteConfig.name}`,
      description: seo.description,
      url: absoluteUrl(urlPath),
      locale: ogLocaleFor(locale),
      alternateLocale: ogAlternateLocales(locale),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${seo.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${seo.title} | ${siteConfig.name}`,
      description: seo.description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };

  if (keywords?.length) {
    return { ...base, keywords };
  }
  return base;
}
