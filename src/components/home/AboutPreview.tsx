"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionImage } from "@/components/ui/SectionImage";
import { marketingImages } from "@/data/marketing-images";
import { useI18n } from "@/i18n/I18nProvider";
import { withLocale } from "@/i18n/routing";

export function AboutPreview() {
  const { locale, t } = useI18n();

  return (
    <section className="py-16 sm:py-24" aria-labelledby="about-preview-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <SectionImage
              src={marketingImages.aboutPreview}
              alt={t.mediaAlt.aboutPreview}
              className="lg:order-1"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>
          <div className="lg:order-2">
            <SectionHeading
              id="about-preview-heading"
              align="left"
              eyebrow={t.home.aboutEyebrow}
              title={t.home.aboutTitle}
              subtitle={t.home.aboutSubtitle}
            />
            <FadeIn delay={0.1}>
              <p className="mt-6 text-slate-600">{t.home.aboutText}</p>
              <Link
                href={withLocale(locale, "/about")}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] transition hover:text-[var(--color-gold)]"
              >
                {t.home.aboutLink}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
