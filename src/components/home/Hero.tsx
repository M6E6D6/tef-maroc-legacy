"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { useI18n } from "@/i18n/I18nProvider";
import { withLocale } from "@/i18n/routing";

export function Hero() {
  const { locale, t } = useI18n();

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,162,39,0.15),transparent)]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <div>
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]"
          >
            {t.home.heroEyebrow}
          </motion.p>
          <motion.h1
            id="hero-heading"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-heading mt-4 text-4xl font-bold tracking-tight text-[var(--color-navy)] sm:text-5xl lg:text-[3.25rem] lg:leading-tight"
          >
            {t.home.heroTitle}
          </motion.h1>
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 max-w-xl text-lg text-slate-600"
          >
            {t.home.heroText}
          </motion.p>
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href={withLocale(locale, "/trainings")}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-navy)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--color-navy)]/20 transition hover:bg-[var(--color-navy-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]"
              aria-label="Explore trainings — open catalogue"
            >
              {t.home.heroPrimaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href={withLocale(locale, "/contact")}
              className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-navy)] transition hover:border-[var(--color-gold)]/50 hover:bg-slate-50"
            >
              {t.home.heroSecondaryCta}
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          <PlaceholderImage label="Training center — professional learning environment" />
        </motion.div>
      </div>
    </section>
  );
}
