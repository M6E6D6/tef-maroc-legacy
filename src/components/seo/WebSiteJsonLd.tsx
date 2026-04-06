import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/i18n/metadata";

export function WebSiteJsonLd() {
  const websiteId = `${siteConfig.url}/#website`;
  const orgId = `${siteConfig.url}/#organization`;
  const contactUrl = absoluteUrl(`/${siteConfig.defaultLocale}/contact`);

  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.name,
    alternateName: ["TEF Maroc"],
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: siteConfig.locales,
    publisher: {
      "@id": orgId,
    },
    potentialAction: {
      "@type": "ContactAction",
      name: "Contact",
      target: contactUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
