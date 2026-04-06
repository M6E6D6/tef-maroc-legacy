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

  return "https://tef-maroc-legacy-f7t8.vercel.app";
}

const productionUrl = resolveSiteUrl();

export const siteConfig = {
  name: "TEF Maroc Legacy",
  tagline: "Training, coaching & professional development",
  description:
    "TEF Maroc Legacy empowers hospitality and management professionals through accredited training, coaching, and tailored skill development across Morocco.",
  url: productionUrl,
  defaultLocale: "fr",
  locales: ["fr", "en", "ar"],
  ogImage: "/opengraph-image",
  /** Logo (PNG with transparency) — also used in JSON-LD */
  logoPath: "/images/tef-maroc-logo.png",
  contact: {
    email: "contact@tef-maroc-legacy.ma",
    phone: "+212 5XX-XXXXXX",
    addressLine1: "Avenue Mohammed V, Quartier Centre",
    city: "Casablanca",
    country: "Morocco",
    postalCode: "20000",
  },
  social: {
    linkedin: "https://www.linkedin.com",
  },
  /** Google Search Console — HTML tag method; override with `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` if needed */
  googleSiteVerification: "vyv24x7skFEJ6M5aRkivpepkuKByFxUnR8_VuftbOYE",
};
