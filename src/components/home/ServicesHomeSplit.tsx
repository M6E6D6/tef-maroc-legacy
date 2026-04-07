"use client";

import Image from "next/image";
import Link from "next/link";
import { BookMarked, MessageCircle, Presentation } from "lucide-react";
import { marketingImages } from "@/data/marketing-images";
import {
  getServiceArticle,
  serviceImageIndex,
  type ServiceSlug,
} from "@/data/services-detail";
import { useI18n } from "@/i18n/I18nProvider";
import { withLocale } from "@/i18n/routing";

const SLUGS: ServiceSlug[] = ["training-programs", "coaching", "workshops"];
const icons = [BookMarked, MessageCircle, Presentation] as const;

function clip(s: string, n: number) {
  if (s.length <= n) return s;
  return `${s.slice(0, n - 1).trimEnd()}…`;
}

export function ServicesHomeSplit() {
  const { locale, t } = useI18n();
  const sideImage = marketingImages.services[serviceImageIndex["training-programs"]]!;

  return (
    <section className="bg-white" aria-labelledby="home-services-heading">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[28rem]">
          <Image
            src={sideImage}
            alt={t.mediaAlt.serviceTraining}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center bg-[var(--tef-navy)] px-6 py-14 sm:px-10 sm:py-20 lg:px-14">
          <h2
            id="home-services-heading"
            className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {t.servicesPage.title}
          </h2>
          <ul className="mt-10 flex flex-col gap-10">
            {SLUGS.map((slug, i) => {
              const article = getServiceArticle(slug);
              if (!article) return null;
              const Icon = icons[i]!;
              return (
                <li key={slug} className="flex gap-5">
                  <Icon className="h-10 w-10 shrink-0 text-[var(--color-gold)]" aria-hidden />
                  <div className="min-w-0">
                    <h3 className="font-heading text-lg font-bold text-white">
                      {article.meta.title[locale]}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/85">
                      {clip(article.lead[locale], 220)}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          <Link
            href={withLocale(locale, "/services")}
            className="mt-12 inline-flex text-sm font-semibold uppercase tracking-wide text-[var(--color-gold)] transition hover:text-white"
          >
            {t.home.servicesSplitCta} →
          </Link>
        </div>
      </div>
    </section>
  );
}
