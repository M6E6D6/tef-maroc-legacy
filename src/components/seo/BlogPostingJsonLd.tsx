import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/i18n/metadata";
import type { Locale } from "@/i18n/translations";

type Props = {
  locale: Locale;
  slug: string;
  headline: string;
  description: string;
  datePublished: string;
  imageUrl: string;
};

export function BlogPostingJsonLd({ locale, slug, headline, description, datePublished, imageUrl }: Props) {
  const orgId = `${siteConfig.url}/#organization`;
  const pageUrl = absoluteUrl(`/${locale}/blog/${slug}`);

  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    datePublished,
    inLanguage: locale,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    image: imageUrl,
    author: {
      "@type": "Organization",
      "@id": orgId,
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      "@id": orgId,
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logoPath),
      },
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
