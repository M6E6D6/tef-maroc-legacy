import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/i18n/metadata";

export function OrganizationJsonLd() {
  const orgId = `${siteConfig.url}/#organization`;
  const logoUrl = absoluteUrl(siteConfig.logoPath);
  const linkedin = siteConfig.social.linkedin?.replace(/\/$/, "");
  const cleanSameAs =
    linkedin && linkedin !== "https://www.linkedin.com" ? [linkedin] : [];

  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": orgId,
    name: siteConfig.name,
    alternateName: "TEF Maroc",
    description: siteConfig.description,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
    image: logoUrl,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.addressLine1,
      addressLocality: siteConfig.contact.city,
      addressRegion: "Casablanca-Settat",
      postalCode: siteConfig.contact.postalCode,
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.5731,
      longitude: -7.5898,
    },
    ...(cleanSameAs.length ? { sameAs: cleanSameAs } : {}),
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
    inLanguage: siteConfig.locales,
    knowsAbout: [
      "Hospitality training",
      "Hotel management",
      "Restaurant service",
      "Culinary arts",
      "Food safety HACCP",
      "Professional coaching Morocco",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
