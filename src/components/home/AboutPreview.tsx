"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";
import { withLocale } from "@/i18n/routing";

/** Fichier statique exact dans `public/` — pas d’optimisation Next (`/_next/image`) pour garder le PNG tel quel. */
const ABOUT_LOGO_SRC = "/images/tamuda-hospitality-academy-logo.png" as const;

export function AboutPreview() {
  const { locale, t } = useI18n();

  return (
    <section className="bg-white py-16 sm:py-24" aria-labelledby="about-preview-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="border-l-4 border-[var(--tef-navy)] pl-6 sm:pl-8">
            <p className="text-sm font-medium uppercase tracking-widest text-slate-500">{t.home.aboutEyebrow}</p>
            <h2
              id="about-preview-heading"
              className="font-heading mt-3 text-2xl font-bold uppercase leading-tight tracking-tight text-[var(--tef-navy)] sm:text-3xl lg:text-[2rem]"
            >
              {t.home.aboutTitle}
            </h2>
            <p className="mt-5 text-slate-600">{t.home.aboutSubtitle}</p>
            <p className="mt-4 text-slate-600">{t.home.aboutText}</p>
            <ul className="mt-6 list-inside list-disc space-y-2 text-slate-600 marker:text-slate-400">
              <li>{t.aboutPage.missionText}</li>
              <li>{t.aboutPage.visionText}</li>
            </ul>
            <Link
              href={withLocale(locale, "/about")}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--tef-navy)] transition hover:text-[var(--color-gold)]"
            >
              {t.home.aboutLink}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <FadeIn className="block min-w-0 w-full">
            <div className="flex min-h-[280px] items-center justify-center rounded-2xl border border-slate-200/80 bg-gradient-to-b from-slate-50 to-white p-8 shadow-md sm:min-h-[340px] lg:min-h-[380px]">
              <img
                src={ABOUT_LOGO_SRC}
                alt={siteConfig.name}
                width={siteConfig.logoWidth}
                height={siteConfig.logoHeight}
                decoding="async"
                className="h-auto w-full max-w-[240px] object-contain sm:max-w-[280px] lg:max-w-[300px]"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
