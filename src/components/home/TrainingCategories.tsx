"use client";

import Link from "next/link";
import {
  ChefHat,
  ClipboardList,
  ConciergeBell,
  Hammer,
  Handshake,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import { getTrainingCategories } from "@/data/trainings";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useI18n } from "@/i18n/I18nProvider";
import { withLocale } from "@/i18n/routing";

const iconMap: Record<string, typeof ConciergeBell> = {
  "reception-hospitality": ConciergeBell,
  "kitchen-culinary": ChefHat,
  pastry: Sparkles,
  "restaurant-service": UtensilsCrossed,
  maintenance: Hammer,
  hygiene: ClipboardList,
  management: Handshake,
};

export function TrainingCategories() {
  const { locale, t } = useI18n();
  const trainingCategories = getTrainingCategories(locale);

  return (
    <section
      className="border-y border-slate-100 bg-slate-50/80 py-16 sm:py-24"
      aria-labelledby="categories-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="categories-heading"
          eyebrow={t.home.categoriesEyebrow}
          title={t.home.categoriesTitle}
          subtitle={t.home.categoriesSubtitle}
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainingCategories.map((cat, i) => {
            const Icon = iconMap[cat.id] ?? ConciergeBell;
            return (
              <li key={cat.id}>
                <FadeIn delay={i * 0.05}>
                  <article className="group h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-[var(--color-gold)]/40 hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-navy)]/10 text-[var(--color-navy)] transition group-hover:bg-[var(--color-gold)]/15 group-hover:text-[var(--color-navy)]">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="font-heading mt-4 text-lg font-semibold text-[var(--color-navy)]">
                      {cat.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm text-slate-600">{cat.description}</p>
                    <p className="mt-3 text-xs font-medium text-slate-500">{cat.duration}</p>
                    <Link
                      href={withLocale(locale, "/trainings")}
                      className="mt-4 inline-block text-sm font-semibold text-[var(--color-gold)] transition hover:text-[var(--color-navy)]"
                      aria-label={`View full details for ${cat.title}`}
                    >
                      {t.common.viewDetails} →
                    </Link>
                  </article>
                </FadeIn>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
