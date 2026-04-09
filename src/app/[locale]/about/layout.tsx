import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/data/site";
import { localeAlternates, localePageSocial } from "@/i18n/metadata";
import { aboutKeywords, aboutSeo } from "@/i18n/seo-copy";
import { locales, type Locale } from "@/i18n/translations";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: l } = await params;
  if (!locales.includes(l as Locale)) {
    notFound();
  }
  const locale = l as Locale;
  const seo = aboutSeo[locale];
  const ogTitle = `${seo.title} | ${siteConfig.name}`;
  return {
    title: seo.title,
    description: seo.description,
    keywords: aboutKeywords[locale],
    alternates: localeAlternates(locale, "/about"),
    ...localePageSocial(locale, "/about", ogTitle, seo.description),
  };
}

export default function AboutSegmentLayout({ children }: Props) {
  return children;
}
