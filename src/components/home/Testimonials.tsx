"use client";

import { Quote } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useI18n } from "@/i18n/I18nProvider";

export function Testimonials() {
  const { locale, t } = useI18n();
  const quotes =
    locale === "fr"
      ? [
          {
            id: "1",
            text: "Nos équipes ont amélioré les scores de service en quelques semaines.",
            author: "Directeur des opérations",
            org: "Groupe hôtelier de Casablanca",
          },
          {
            id: "2",
            text: "Méthodologie claire et exercices pratiques que nous utilisons toujours.",
            author: "Responsable RH",
            org: "Chaîne de restauration",
          },
          {
            id: "3",
            text: "Les modules flexibles nous ont permis de former sans arrêter l'activité.",
            author: "Responsable formation",
            org: "Complexe hôtelier",
          },
        ]
      : locale === "ar"
        ? [
            {
              id: "1",
              text: "تحسنت مؤشرات الخدمة لدى فرقنا خلال أسابيع قليلة.",
              author: "مدير العمليات",
              org: "مجموعة فنادق بالدار البيضاء",
            },
            {
              id: "2",
              text: "منهجية واضحة وتمارين عملية ما زلنا نعتمدها حتى الآن.",
              author: "مدير الموارد البشرية",
              org: "سلسلة مطاعم",
            },
            {
              id: "3",
              text: "الوحدات المرنة ساعدتنا على تطوير الكفاءات دون توقيف التشغيل.",
              author: "مسؤول التكوين",
              org: "منتجع سياحي",
            },
          ]
        : [
            {
              id: "1",
              text: "Our teams improved service scores within weeks.",
              author: "Operations Director",
              org: "Casablanca hotel group",
            },
            {
              id: "2",
              text: "Clear methodology and practical exercises we still use.",
              author: "HR Manager",
              org: "Restaurant chain",
            },
            {
              id: "3",
              text: "Flexible modules helped us upskill without stopping operations.",
              author: "Training Lead",
              org: "Resort property",
            },
          ];

  return (
    <section
      className="bg-[var(--color-navy)] py-16 text-white sm:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="testimonials-heading"
          variant="inverse"
          eyebrow={t.home.testimonialsEyebrow}
          title={t.home.testimonialsTitle}
          subtitle={t.home.testimonialsSubtitle}
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <li key={q.id}>
              <FadeIn delay={i * 0.08}>
                <figure className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <Quote className="h-8 w-8 text-[var(--color-gold)]" aria-hidden />
                  <blockquote className="mt-4 text-sm leading-relaxed text-slate-200">
                    <p>&ldquo;{q.text}&rdquo;</p>
                  </blockquote>
                  <figcaption className="mt-6 text-sm">
                    <span className="font-semibold text-white">{q.author}</span>
                    <span className="mt-1 block text-slate-400">{q.org}</span>
                  </figcaption>
                </figure>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
