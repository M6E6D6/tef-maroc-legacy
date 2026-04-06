import { homeFaqLd } from "@/i18n/seo-copy";
import type { Locale } from "@/i18n/translations";

export function HomeFaqJsonLd({ locale }: { locale: Locale }) {
  const faqs = homeFaqLd[locale];
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
