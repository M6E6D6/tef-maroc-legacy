import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ContactInfoBar } from "@/components/home/ContactInfoBar";
import { Hero } from "@/components/home/Hero";
import { PartnersStrip } from "@/components/home/PartnersStrip";
import { ServicesHomeSplit } from "@/components/home/ServicesHomeSplit";
import { Testimonials } from "@/components/home/Testimonials";
import { TrainingCategories } from "@/components/home/TrainingCategories";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HomeFaqJsonLd } from "@/components/seo/HomeFaqJsonLd";
import { siteConfig } from "@/data/site";
import { localeAlternates, localePageSocial } from "@/i18n/metadata";
import { homeKeywords, homeSeo } from "@/i18n/seo-copy";
import { locales, type Locale } from "@/i18n/translations";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: l } = await params;
  if (!locales.includes(l as Locale)) {
    notFound();
  }
  const locale = l as Locale;
  const seo = homeSeo[locale];
  const documentTitle = siteConfig.documentTitle[locale];
  return {
    title: documentTitle,
    description: seo.description,
    keywords: homeKeywords[locale],
    alternates: localeAlternates(locale, "/"),
    ...localePageSocial(locale, "", documentTitle, seo.description),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale: l } = await params;
  if (!locales.includes(l as Locale)) {
    notFound();
  }
  const locale = l as Locale;

  return (
    <>
      <HomeFaqJsonLd locale={locale} />
      <Hero />
      <ContactInfoBar />
      <AboutPreview />
      <ServicesHomeSplit />
      <TrainingCategories />
      <WhyChooseUs />
      <PartnersStrip />
      <Testimonials />
    </>
  );
}
