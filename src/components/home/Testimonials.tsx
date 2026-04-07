"use client";

import { useState } from "react";
import { Quote } from "lucide-react";
import { marketingImages, publicImage } from "@/data/marketing-images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useI18n } from "@/i18n/I18nProvider";

/** Fichiers dans `public/images/` — si absents (404), `TestimonialAvatar` bascule sur `fallbackById`. */
const testimonialPhotoById: Record<string, string> = {
  "1": publicImage("Mohamed Chaoui Directeur des opérations.jpeg"),
  "2": publicImage("Anass El Bahi - Responsable RH.jpeg"),
  "3": publicImage("Mohamed El Ouafi Responsable formation.jpeg"),
};

const testimonialPhotoFallbackById: Record<string, string> = {
  "1": marketingImages.team[0]!,
  "2": marketingImages.team[1]!,
  "3": marketingImages.team[2]!,
};

/** Taille d’affichage identique pour les 3 avatars (px). */
const TESTIMONIAL_AVATAR_PX = 100;

function TestimonialAvatar({
  quoteId,
  primarySrc,
  alt,
  objectPosition,
}: {
  quoteId: string;
  primarySrc: string;
  alt: string;
  objectPosition: string;
}) {
  const [src, setSrc] = useState(primarySrc);
  const fallback = testimonialPhotoFallbackById[quoteId];

  return (
    <div
      className="relative mx-auto shrink-0 overflow-hidden rounded-full bg-white/10 ring-2 ring-inset ring-[var(--color-gold)]/45 sm:mx-0"
      style={{
        width: TESTIMONIAL_AVATAR_PX,
        height: TESTIMONIAL_AVATAR_PX,
        minWidth: TESTIMONIAL_AVATAR_PX,
        minHeight: TESTIMONIAL_AVATAR_PX,
        maxWidth: TESTIMONIAL_AVATAR_PX,
        maxHeight: TESTIMONIAL_AVATAR_PX,
      }}
    >
      <img
        src={src}
        alt={alt}
        width={TESTIMONIAL_AVATAR_PX}
        height={TESTIMONIAL_AVATAR_PX}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full max-h-none max-w-none object-cover"
        style={{ objectPosition }}
        onError={() => {
          if (fallback && src !== fallback) setSrc(fallback);
        }}
      />
    </div>
  );
}

/** Noms affichés (identiques sur les trois langues, les photos correspondent à ces personnes) */
const testimonialNameById: Record<string, string> = {
  "1": "Mohamed Chaoui",
  "2": "Anass El Bahi",
  "3": "Mohamed El Ouafi",
};

/** Recadrage vertical pour `object-cover` (visage selon chaque cliché) */
const testimonialObjectPosition: Record<string, string> = {
  "1": "50% 12%",
  "2": "50% 28%",
  "3": "50% 22%",
};

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
        <ul className="mt-12 grid list-none gap-6 p-0 md:grid-cols-3">
          {quotes.map((q) => {
            const photoSrc = testimonialPhotoById[q.id]!;
            const personName = testimonialNameById[q.id]!;
            return (
              <li key={q.id} className="min-h-0">
                <figure className="flex h-full min-h-0 flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <TestimonialAvatar
                    quoteId={q.id}
                    primarySrc={photoSrc}
                    alt={`${personName} — ${q.author}`}
                    objectPosition={testimonialObjectPosition[q.id] ?? "50% 25%"}
                  />
                  <Quote className="mx-auto mt-4 h-8 w-8 text-[var(--color-gold)] sm:mx-0" aria-hidden />
                  <blockquote className="mt-4 text-sm leading-relaxed text-slate-200">
                    <p>&ldquo;{q.text}&rdquo;</p>
                  </blockquote>
                  <figcaption className="mt-6 space-y-1 text-sm">
                    <span className="block font-heading text-base font-bold text-white">{personName}</span>
                    <span className="block font-semibold text-slate-200">{q.author}</span>
                    <span className="block text-slate-400">{q.org}</span>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
