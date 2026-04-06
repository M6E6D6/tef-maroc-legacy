import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/i18n/metadata";
import type { Locale } from "@/i18n/translations";

type Props = {
  locale: Locale;
  slug: string;
  name: string;
  description: string;
};

export function ServiceDetailJsonLd({ locale, slug, name, description }: Props) {
  const orgId = `${siteConfig.url}/#organization`;
  const pageUrl = absoluteUrl(`/${locale}/services/${slug}`);

  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: pageUrl,
    provider: { "@id": orgId },
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
    availableLanguage: ["fr", "ar", "en"],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
