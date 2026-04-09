import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrainingsCatalogJsonLd } from "@/components/seo/TrainingsCatalogJsonLd";
import { siteConfig } from "@/data/site";
import { localeAlternates, localePageSocial } from "@/i18n/metadata";
import { trainingsKeywords, trainingsSeo } from "@/i18n/seo-copy";
import { locales, type Locale } from "@/i18n/translations";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: l } = await params;
  if (!locales.includes(l as Locale)) {
    notFound();
  }
  const locale = l as Locale;
  const seo = trainingsSeo[locale];
  const ogTitle = `${seo.title} | ${siteConfig.name}`;
  return {
    title: seo.title,
    description: seo.description,
    keywords: trainingsKeywords[locale],
    alternates: localeAlternates(locale, "/trainings"),
    ...localePageSocial(locale, "/trainings", ogTitle, seo.description),
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
