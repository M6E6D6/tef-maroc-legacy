import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Hero } from "@/components/home/Hero";
import { Testimonials } from "@/components/home/Testimonials";
import { TrainingCategories } from "@/components/home/TrainingCategories";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HomeFaqJsonLd } from "@/components/seo/HomeFaqJsonLd";
import { siteConfig } from "@/data/site";
import { absoluteUrl, localeAlternates, ogLocaleFor } from "@/i18n/metadata";
import { homeSeo } from "@/i18n/seo-copy";
import { locales, type Locale } from "@/i18n/translations";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: l } = await params;
  if (!locales.includes(l as Locale)) {
    notFound();
  }
  const locale = l as Locale;
  const seo = homeSeo[locale];
  return {
    title: seo.title,
    description: seo.description,
    alternates: localeAlternates(locale, "/"),
    openGraph: {
      title: `${siteConfig.name} | ${seo.title}`,
      description: seo.description,
      url: absoluteUrl(`/${locale}`),
      locale: ogLocaleFor(locale),
    },
    twitter: {
      title: `${siteConfig.name} | ${seo.title}`,
      description: seo.description,
    },
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
      <AboutPreview />
      <TrainingCategories />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
