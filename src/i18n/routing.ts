import { defaultLocale, locales, type Locale } from "@/i18n/translations";

const localeSet = new Set<string>(locales);

/** Path without locale prefix, e.g. `/fr/about` → `/about`, `/fr` → `/` */
export function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length >= 1 && localeSet.has(segments[0])) {
    const rest = segments.slice(1);
    return rest.length ? `/${rest.join("/")}` : "/";
  }
  return pathname.startsWith("/") ? pathname || "/" : `/${pathname}`;
}

/** Build localized path: `withLocale("fr", "/about")` → `/fr/about` */
export function withLocale(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (clean === "/") {
    return `/${locale}`;
  }
  return `/${locale}${clean}`;
}

export function isValidLocale(segment: string | undefined): segment is Locale {
  return segment !== undefined && localeSet.has(segment);
}

export { defaultLocale, locales };
