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
    alternateName: ["Tamuda", "Tamuda Academy"],
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
      addressRegion: "Tanger-Tetouan-Al Hoceima",
      postalCode: siteConfig.contact.postalCode,
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.685,
      longitude: -5.3247,
    },
    ...(cleanSameAs.length ? { sameAs: cleanSameAs } : {}),
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
    inLanguage: siteConfig.locales,
    knowsAbout: [
      "Formation hôtellerie Maroc",
      "École restauration Maroc",
      "Premium hospitality academy",
      "Luxury hotel and restaurant service",
      "Hospitality training Morocco",
      "Restaurant school Morocco",
      "Hotel management",
      "Fine dining service",
      "Culinary arts",
      "Food safety HACCP",
      "Professional coaching Morocco",
      "تكوين فندقة المغرب",
      "مدرسة مطاعم المغرب",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
