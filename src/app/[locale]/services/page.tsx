"use client";

import { BookMarked, ChevronRight, MessageCircle, Presentation, Route } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionImage } from "@/components/ui/SectionImage";
import { marketingImages } from "@/data/marketing-images";
import { SERVICE_SLUGS } from "@/data/services-detail";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useI18n } from "@/i18n/I18nProvider";
import { withLocale } from "@/i18n/routing";

const defaultServices = [
  {
    title: "Professional training programs",
    text: "Modular and diploma-style paths for teams and individuals—aligned to your SOPs and brand standards.",
    icon: BookMarked,
  },
  {
    title: "Coaching",
    text: "One-to-one or small-group coaching for managers and high-potentials—goals, accountability, and feedback loops.",
    icon: MessageCircle,
  },
  {
    title: "Workshops & seminars",
    text: "Focused sessions on soft skills, service recovery, leadership habits, and operational excellence.",
    icon: Presentation,
  },
  {
    title: "Skill development plans",
    text: "Competency frameworks, learning roadmaps, and KPIs co-designed with HR and operations.",
    icon: Route,
  },
];

export default function ServicesPage() {
  const { locale, t } = useI18n();
  const servicePhotoAlts = [
    t.mediaAlt.serviceTraining,
    t.mediaAlt.serviceCoaching,
    t.mediaAlt.serviceWorkshop,
    t.mediaAlt.servicePlanning,
  ] as const;
  const services =
    locale === "fr"
      ? [
          { title: "Programmes de formation", text: "Parcours modulaires pour équipes et individus.", icon: BookMarked },
          { title: "Coaching", text: "Coaching individuel ou en petit groupe pour managers.", icon: MessageCircle },
          { title: "Ateliers & séminaires", text: "Sessions ciblées sur soft skills et excellence opérationnelle.", icon: Presentation },
          { title: "Plans de développement", text: "Feuilles de route compétences et KPI co-construits.", icon: Route },
        ]
      : locale === "ar"
        ? [
            { title: "برامج التكوين المهني", text: "مسارات تكوينية مرنة للأفراد والفرق.", icon: BookMarked },
            { title: "التوجيه", text: "توجيه فردي أو جماعي للمديرين.", icon: MessageCircle },
            { title: "ورشات وندوات", text: "جلسات مركزة على المهارات والتميز التشغيلي.", icon: Presentation },
            { title: "خطط تطوير المهارات", text: "خرائط كفاءات ومؤشرات أداء مع الموارد البشرية.", icon: Route },
          ]
        : defaultServices;

  return (
    <div className="bg-white">
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-[var(--color-navy)] sm:text-5xl">
            {t.servicesPage.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">{t.servicesPage.intro}</p>
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="services-list-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="services-list-heading"
            eyebrow={t.servicesPage.eyebrow}
            title={t.servicesPage.howHelp}
            subtitle={t.servicesPage.subtitle}
          />
          <ul className="mt-12 grid gap-8 lg:grid-cols-2">
            {services.map((s, i) => {
              const slug = SERVICE_SLUGS[i]!;
              const href = withLocale(locale, `/services/${slug}`);
              return (
                <li key={s.title}>
                  <FadeIn delay={i * 0.05}>
                    <Link
                      href={href}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm outline-none ring-offset-2 transition hover:shadow-md focus-visible:ring-2 focus-visible:ring-[var(--color-navy)]"
                    >
                      <SectionImage
                        src={marketingImages.services[i]!}
                        alt={servicePhotoAlts[i]!}
                        aspect="wide"
                        className="rounded-none border-0 shadow-none"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="flex flex-1 flex-col p-6 sm:p-8">
                        <div className="flex items-center gap-3">
                          <span className="rounded-lg bg-[var(--color-navy)]/10 p-2 text-[var(--color-navy)]">
                            <s.icon className="h-6 w-6" aria-hidden />
                          </span>
                          <h2 className="font-heading text-xl font-semibold text-[var(--color-navy)] group-hover:underline">
                            {s.title}
                          </h2>
                        </div>
                        <p className="mt-4 flex-1 text-slate-600">{s.text}</p>
                        <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-navy)]">
                          {t.common.viewDetails}
                          <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                        </span>
                      </div>
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
