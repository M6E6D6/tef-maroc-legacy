"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getTrainingCategories } from "@/data/trainings";
import { useI18n } from "@/i18n/I18nProvider";
import { withLocale } from "@/i18n/routing";

export default function TrainingsPage() {
  const { locale, t } = useI18n();
  const trainingCategories = getTrainingCategories(locale);

  return (
    <div className="bg-white">
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-[var(--color-navy)] sm:text-5xl">
            {t.trainingsPage.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">{t.trainingsPage.intro}</p>
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="catalogue-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="catalogue-heading"
            align="left"
            eyebrow={t.trainingsPage.eyebrow}
            title={t.trainingsPage.categoriesObjectives}
            subtitle={t.trainingsPage.subtitle}
          />
          <ul className="mt-12 flex flex-col gap-10">
            {trainingCategories.map((cat, i) => {
              const href = withLocale(locale, `/trainings/${cat.id}`);
              return (
                <li key={cat.id}>
                  <FadeIn delay={i * 0.04}>
                    <Link
                      href={href}
                      className="group block rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm outline-none ring-offset-2 transition hover:border-[var(--color-gold)]/35 hover:shadow-md focus-visible:ring-2 focus-visible:ring-[var(--color-navy)] sm:p-8"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <h2 className="font-heading text-xl font-semibold text-[var(--color-navy)] group-hover:underline sm:text-2xl">
                          {cat.title}
                        </h2>
                        <p className="shrink-0 text-sm font-medium text-[var(--color-gold)]">{cat.duration}</p>
                      </div>
                      <p className="mt-4 text-slate-600">{cat.description}</p>
                      <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-[var(--color-navy)]">
                        {t.common.objectives}
                      </h3>
                      <ul className="mt-3 list-inside list-disc space-y-2 text-slate-600">
                        {cat.objectives.map((obj) => (
                          <li key={obj}>{obj}</li>
                        ))}
                      </ul>
                      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-navy)]">
                        {t.common.viewDetails}
                        <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                      </span>
                    </Link>
                  </FadeIn>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
