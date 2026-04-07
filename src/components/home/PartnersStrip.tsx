"use client";

import { useI18n } from "@/i18n/I18nProvider";

/** Partner line reuses existing site tagline chunks — no new factual claims. */
export function PartnersStrip() {
  const { t } = useI18n();
  const chips = t.footer.tagline.split("·").map((s) => s.trim());

  return (
    <section
      className="bg-world-dots-white py-14 sm:py-16"
      aria-labelledby="partners-heading"
    >
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="partners-heading"
          className="font-heading inline-block border-b-4 border-[var(--tef-navy)] pb-2 text-xl font-bold uppercase tracking-wide text-[var(--tef-navy)] sm:text-2xl"
        >
          {t.home.partnersTitle}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm text-slate-600 sm:text-base">{t.home.testimonialsSubtitle}</p>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {chips.map((label) => (
            <li
              key={label}
              className="rounded-full border border-slate-200/80 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500 shadow-sm sm:text-sm"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
