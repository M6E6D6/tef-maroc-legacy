"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, ChevronLeft, ChevronRight, MessageCircle, Users } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { marketingImages } from "@/data/marketing-images";
import { useI18n } from "@/i18n/I18nProvider";
import { withLocale } from "@/i18n/routing";

const AUTOPLAY_MS = 7000;

export function Hero() {
  const { locale, t } = useI18n();
  const slides = marketingImages.heroGallery;
  const [index, setIndex] = useState(0);
  const len = slides.length;

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + len) % len);
    },
    [len],
  );

  useEffect(() => {
    const id = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [go]);

  return (
    <section className="relative isolate -mt-[var(--app-header-pad)] min-h-[min(88svh,56rem)] overflow-hidden pt-[var(--app-header-pad)]">
      <div className="absolute inset-0" aria-hidden>
        {/* One slide mounted at a time (no exit overlap) so LCP + `fill` height stay predictable */}
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={slides[index]!}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "low"}
            quality={85}
          />
        </motion.div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25"
          aria-hidden
        />
      </div>

      <button
        type="button"
        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-[2px] transition hover:bg-black/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:left-6"
        onClick={() => go(-1)}
        aria-label={t.home.heroGalleryPrevAria}
      >
        <ChevronLeft className="h-6 w-6" aria-hidden />
      </button>
      <button
        type="button"
        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-[2px] transition hover:bg-black/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:right-6"
        onClick={() => go(1)}
        aria-label={t.home.heroGalleryNextAria}
      >
        <ChevronRight className="h-6 w-6" aria-hidden />
      </button>

      <div className="relative z-10 mx-auto flex min-h-[min(72svh,48rem)] max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 flex-col justify-center py-10 sm:py-14">
          <h1
            id="hero-heading"
            className="font-heading max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3rem] lg:leading-tight"
          >
            {t.home.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/90">{t.home.heroText}</p>
          <div className="mt-8">
            <Link
              href={withLocale(locale, "/trainings")}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0f3566] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/25 transition hover:bg-[#1e4a8a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]"
            >
              {t.home.heroPrimaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="relative z-20 -mb-12 pb-6 sm:-mb-16 sm:pb-8">
          <ul className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 shadow-xl shadow-black/20 sm:grid-cols-3">
            <li className="flex gap-4 bg-[#002b5b] p-6 text-white">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sky-400/25 text-sky-200">
                <MessageCircle className="h-7 w-7" aria-hidden />
              </span>
              <p className="self-center font-heading text-lg font-bold leading-snug">{t.home.featureSolidTitle}</p>
            </li>
            <li className="flex gap-4 bg-[#e5e7eb] p-6 text-[#002b5b]">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-violet-700">
                <Users className="h-7 w-7" aria-hidden />
              </span>
              <p className="self-center font-heading text-lg font-bold leading-snug">{t.home.featureRelationsTitle}</p>
            </li>
            <li className="flex gap-4 bg-[#002b5b] p-6 text-white">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-amber-100">
                <BarChart3 className="h-7 w-7" aria-hidden />
              </span>
              <p className="self-center font-heading text-lg font-bold leading-snug">{t.home.featureInnovationTitle}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
