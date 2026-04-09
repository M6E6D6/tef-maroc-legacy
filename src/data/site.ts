import type { Locale } from "@/i18n/translations";

/** Canonical site URL (sitemap, JSON-LD, robots). Prefer `NEXT_PUBLIC_SITE_URL`. */

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;

  // Vercel production: stable project hostname so `/sitemap.xml` is not full of one-off deploy URLs
  if (
    process.env.VERCEL_ENV === "production" &&
    process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "https://tef-maroc-legacy.vercel.app";
}

const productionUrl = resolveSiteUrl();

/** Brand mark: `public/images/tamuda-hospitality-academy-logo.png` (navbar, JSON-LD) */
const tamudaHospitalityAcademyLogo = "/images/tamuda-hospitality-academy-logo.png";

/** Même fichier que le logo principal (footer exigeait autrefois un asset séparé). */
const tamudaFooterLogo = tamudaHospitalityAcademyLogo;

export const siteConfig = {
  /** Public site / legal brand name */
  name: "Tamuda Hospitality Academy",
  /** Short line for PWA / social fallbacks */
  tagline: "Académie premium — hôtellerie, restauration et service de luxe",
  /** Default meta & JSON-LD (FR-first; align with positioning) */
  description:
    "Tamuda Hospitality Academy — formation hôtellerie Maroc, école restauration et service de luxe. Académie premium à Tamuda Bay (M'diq), près de Tanger : parcours professionnels pour entreprises et équipes.",
  /** Full `<title>` for the localized home page */
  documentTitle: {
    fr: "Tamuda Hospitality Academy | Formations en Hôtellerie et Restauration au Maroc",
    en: "Tamuda Hospitality Academy | Hospitality & Restaurant Training in Morocco",
    ar: "أكاديمية تامودا للضيافة | تكوين الفندقة والمطاعم في المغرب",
  } satisfies Record<Locale, string>,
  url: productionUrl,
  defaultLocale: "fr",
  locales: ["fr", "en", "ar"] as const satisfies readonly Locale[],
  ogImage: "/opengraph-image",
  /** Logo (PNG with transparency) — navbar, JSON-LD, schema.org */
  logoPath: tamudaHospitalityAcademyLogo,
  /** `/images/tamuda-hospitality-academy-logo.png` — identique à `logoPath` */
  footerLogoPath: tamudaFooterLogo,
  /** Intrinsic size for logoPath / footerLogoPath (portrait PNG) */
  logoWidth: 466,
  logoHeight: 672,
  contact: {
    email: "contact@tef-maroc-legacy.ma",
    phone: "+212770064271",
    addressLine1: "Tamuda Bay",
    city: "M'diq",
    country: "Morocco",
    postalCode: "93200",
  },
  social: {
    linkedin: "https://www.linkedin.com",
  },
  /** Google Search Console — HTML tag method; override with `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` if needed */
  googleSiteVerification: "vyv24x7skFEJ6M5aRkivpepkuKByFxUnR8_VuftbOYE",
};
