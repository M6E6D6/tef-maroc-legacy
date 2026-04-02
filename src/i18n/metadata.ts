import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { defaultLocale, locales, type Locale } from "@/i18n/translations";

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

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${p}`;
}
