import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/i18n/metadata";
import type { Locale } from "@/i18n/translations";

type Props = {
  locale: Locale;
  slug: string;
  name: string;
  description: string;
  timeRequired: string;
};

export function TrainingCourseDetailJsonLd({
  locale,
  slug,
  name,
  description,
  timeRequired,
}: Props) {
  const orgId = `${siteConfig.url}/#organization`;
  const pageUrl = absoluteUrl(`/${locale}/trainings/${slug}`);
  const contactUrl = absoluteUrl(`/${locale}/contact`);

  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url: pageUrl,
    educationalLevel: "Professional",
    timeRequired,
    inLanguage: locale,
    provider: {
      "@type": "EducationalOrganization",
      "@id": orgId,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: contactUrl,
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
