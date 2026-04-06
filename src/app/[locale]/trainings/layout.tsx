import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrainingsCatalogJsonLd } from "@/components/seo/TrainingsCatalogJsonLd";
import { siteConfig } from "@/data/site";
import { absoluteUrl, localeAlternates, ogLocaleFor } from "@/i18n/metadata";
import { trainingsSeo } from "@/i18n/seo-copy";
import { locales, type Locale } from "@/i18n/translations";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: l } = await params;
  if (!locales.includes(l as Locale)) {
    notFound();
  }
  const locale = l as Locale;
  const seo = trainingsSeo[locale];
  return {
    title: seo.title,
    description: seo.description,
    alternates: localeAlternates(locale, "/trainings"),
    openGraph: {
      title: `${seo.title} | ${siteConfig.name}`,
      description: seo.description,
      url: absoluteUrl(`/${locale}/trainings`),
      locale: ogLocaleFor(locale),
    },
    twitter: {
      title: `${seo.title} | ${siteConfig.name}`,
      description: seo.description,
    },
  };
}

export default async function TrainingsSegmentLayout({ children, params }: Props) {
  const { locale: l } = await params;
  if (!locales.includes(l as Locale)) {
    notFound();
  }
  const locale = l as Locale;

  return (
    <>
      <TrainingsCatalogJsonLd locale={locale} />
      {children}
    </>
  );
}
