"use client";

import Link from "next/link";
import { marketingImages } from "@/data/marketing-images";
import { getTrainingCategories, type TrainingCategorySlug } from "@/data/trainings";
import { trainingImageIndex } from "@/data/trainings-detail";
import { useI18n } from "@/i18n/I18nProvider";
import { withLocale } from "@/i18n/routing";

/** Ratio 3:4 — padding % = (h/w)×100 = 4/3×100 */
const ASPECT_PADDING_TOP = "133.3333%";

export function TrainingCategories() {
  const { locale, t } = useI18n();
  const trainingCategories = getTrainingCategories(locale);

  return (
    <section className="bg-world-dots py-16 sm:py-24" aria-labelledby="categories-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--tef-navy)]/80">
            {t.home.categoriesEyebrow}
          </p>
          <h2
            id="categories-heading"
            className="font-heading mt-3 text-3xl font-bold uppercase tracking-tight text-[var(--tef-navy)] sm:text-4xl"
          >
            {t.home.categoriesTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">{t.home.categoriesSubtitle}</p>
        </div>
        <ul className="mt-12 grid list-none grid-cols-2 gap-4 p-0 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {trainingCategories.map((cat) => {
            const imgIdx = trainingImageIndex[cat.id as TrainingCategorySlug];
            const src = marketingImages.trainings[imgIdx]!;
            const href = withLocale(locale, `/trainings/${cat.id}`);
            return (
              <li key={cat.id} className="min-w-0">
                <Link href={href} className="group block w-full no-underline">
                  <figure className="relative w-full overflow-hidden rounded-2xl bg-slate-200 shadow-md ring-1 ring-slate-300/80 transition hover:ring-[var(--color-gold)]/60">
                    {/* Bloc in-flow : sans ça, un parent avec seulement des enfants `absolute` peut avoir hauteur ~0 */}
                    <div className="w-full" style={{ paddingTop: ASPECT_PADDING_TOP }} aria-hidden />
                    <img
                      src={src}
                      alt=""
                      width={600}
                      height={800}
                      loading="eager"
                      decoding="async"
                      className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/85 via-black/25 to-transparent"
                      aria-hidden
                    />
                    <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] p-3 text-center font-heading text-[0.65rem] font-bold uppercase leading-snug text-white sm:p-4 sm:text-xs md:text-sm">
                      {cat.title}
                    </figcaption>
                  </figure>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
