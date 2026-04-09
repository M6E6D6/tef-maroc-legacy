import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/data/site";
import { localeAlternates, localePageSocial } from "@/i18n/metadata";
import { contactKeywords, contactSeo } from "@/i18n/seo-copy";
import { locales, type Locale } from "@/i18n/translations";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: l } = await params;
  if (!locales.includes(l as Locale)) {
    notFound();
  }
  const locale = l as Locale;
  const seo = contactSeo[locale];
  const ogTitle = `${seo.title} | ${siteConfig.name}`;
  return {
    title: seo.title,
    description: seo.description,
    keywords: contactKeywords[locale],
    alternates: localeAlternates(locale, "/contact"),
    ...localePageSocial(locale, "/contact", ogTitle, seo.description),
  };
}

export default function ContactSegmentLayout({ children }: Props) {
  return children;
}
