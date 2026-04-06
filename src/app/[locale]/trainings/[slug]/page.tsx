import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marketingImages } from "@/data/marketing-images";
import { getTrainingCategories, getAllTrainingCategorySlugs, isTrainingCategorySlug } from "@/data/trainings";
import { getTrainingArticle, trainingImageIndex } from "@/data/trainings-detail";
import { siteConfig } from "@/data/site";
import { absoluteUrl, localeAlternates, ogAlternateLocales, ogLocaleFor } from "@/i18n/metadata";
import { withLocale } from "@/i18n/routing";
import { locales, translations, type Locale } from "@/i18n/translations";

export function generateStaticParams() {
  return getAllTrainingCategorySlugs().map((slug) => ({ slug }));
}

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: l, slug } = await params;
  if (!locales.includes(l as Locale) || !isTrainingCategorySlug(slug)) {
    return {};
  }
  const locale = l as Locale;
  const article = getTrainingArticle(slug);
  if (!article) return {};

  const path = `/trainings/${slug}`;
  const title = article.meta.title[locale];
  const description = article.meta.description[locale];

  return {
    title,
    description,
    alternates: localeAlternates(locale, path),
    openGraph: {
      type: "article",
      title: `${title} | ${siteConfig.name}`,
      description,
      url: absoluteUrl(`/${locale}${path}`),
      locale: ogLocaleFor(locale),
      alternateLocale: ogAlternateLocales(locale),
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: `${siteConfig.name} — ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [siteConfig.ogImage],
    },
    robots: { index: true, follow: true },
  };
}

export default async function TrainingDetailPage({ params }: Props) {
  const { locale: l, slug } = await params;
  if (!locales.includes(l as Locale)) notFound();
  const locale = l as Locale;
  if (!isTrainingCategorySlug(slug)) notFound();
  const article = getTrainingArticle(slug);
  if (!article) notFound();

  const categories = getTrainingCategories(locale);
  const summary = categories.find((c) => c.id === slug);
  if (!summary) notFound();

  const dict = translations[locale];
  const t = dict.trainingsDetailPage;
  const heroSrc = marketingImages.trainings[trainingImageIndex[slug]]!;
  const heroAlt = `${summary.title} — ${dict.trainingsPage.title}`;

  return (
    <div className="bg-white">
      <div className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <Link
            href={withLocale(locale, "/trainings")}
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-navy)] hover:underline"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
            {t.backToTrainings}
          </Link>
          <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-[var(--color-navy)] sm:text-5xl">
            {article.meta.title[locale]}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">{article.lead[locale]}</p>
          <p className="mt-4 text-sm font-medium text-[var(--color-gold)]">{summary.duration}</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <figure className="relative -mt-4 aspect-[21/9] overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm sm:-mt-6">
          <Image
            src={heroSrc}
            alt={heroAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1152px) 100vw, 1152px"
          />
        </figure>
      </div>

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-none">
          {article.blocks.map((block, i) =>
            block.type === "h2" ? (
              <h2
                key={i}
                className="font-heading mt-10 text-2xl font-semibold tracking-tight text-[var(--color-navy)] first:mt-0"
              >
                {block.text[locale]}
              </h2>
            ) : (
              <p key={i} className="mt-4 text-base leading-relaxed text-slate-600">
                {block.text[locale]}
              </p>
            ),
          )}
        </div>

        <section className="mt-14 rounded-2xl border border-slate-200 bg-slate-50/80 p-8 sm:p-10" aria-labelledby="obj-heading">
          <h2 id="obj-heading" className="font-heading text-lg font-semibold text-[var(--color-navy)]">
            {dict.common.objectives}
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-slate-600">
            {summary.objectives.map((obj) => (
              <li key={obj}>{obj}</li>
            ))}
          </ul>
        </section>

        <aside className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
          <p className="text-slate-700">{t.ctaIntro}</p>
          <Link
            href={withLocale(locale, "/contact")}
            className="mt-5 inline-flex rounded-lg bg-[var(--color-navy)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            {t.ctaContact}
          </Link>
        </aside>
      </article>
    </div>
  );
}
