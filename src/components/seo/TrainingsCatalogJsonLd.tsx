import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/i18n/metadata";
import { getTrainingCategories } from "@/data/trainings";
import type { Locale } from "@/i18n/translations";

export function TrainingsCatalogJsonLd({ locale }: { locale: Locale }) {
  const categories = getTrainingCategories(locale);
  const orgId = `${siteConfig.url}/#organization`;

  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name:
      locale === "fr"
        ? "Catalogue des formations"
        : locale === "ar"
          ? "كتالوج التكوينات"
          : "Training catalog",
    numberOfItems: categories.length,
    itemListElement: categories.map((cat, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: cat.title,
        description: cat.description,
        educationalLevel: "Professional",
        timeRequired: cat.duration,
        provider: {
          "@type": "EducationalOrganization",
          "@id": orgId,
          name: siteConfig.name,
          url: siteConfig.url,
        },
        url: absoluteUrl(`/${locale}/trainings`),
      },
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
