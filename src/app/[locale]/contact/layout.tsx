import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/data/site";
import { absoluteUrl, localeAlternates, ogLocaleFor } from "@/i18n/metadata";
import { contactSeo } from "@/i18n/seo-copy";
import { locales, type Locale } from "@/i18n/translations";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: l } = await params;
  if (!locales.includes(l as Locale)) {
    notFound();
  }
  const locale = l as Locale;
  const seo = contactSeo[locale];
  return {
    title: seo.title,
    description: seo.description,
    alternates: localeAlternates(locale, "/contact"),
    openGraph: {
      title: `${seo.title} | ${siteConfig.name}`,
      description: seo.description,
      url: absoluteUrl(`/${locale}/contact`),
      locale: ogLocaleFor(locale),
    },
    twitter: {
      title: `${seo.title} | ${siteConfig.name}`,
      description: seo.description,
    },
  };
}

export default function ContactSegmentLayout({ children }: Props) {
  return children;
}
