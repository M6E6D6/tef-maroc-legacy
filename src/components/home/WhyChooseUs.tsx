"use client";

import { Award, BookOpen, Headphones, Users } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useI18n } from "@/i18n/I18nProvider";

export function WhyChooseUs() {
  const { locale, t } = useI18n();
  const items =
    locale === "fr"
      ? [
          { title: "Formateurs experts", text: "Praticiens du terrain et coachs certifiés.", icon: Users },
          { title: "Programmes reconnus", text: "Alignés sur les standards opérationnels actuels.", icon: BookOpen },
          { title: "Apprentissage pratique", text: "Simulations et ateliers pour renforcer les acquis.", icon: Award },
          { title: "Suivi continu", text: "Accompagnement après formation pour ancrer la performance.", icon: Headphones },
        ]
      : locale === "ar"
        ? [
            { title: "مدربون خبراء", text: "ممارسون ميدانيون ومدربون معتمدون.", icon: Users },
            { title: "مناهج معتمدة", text: "متوافقة مع أفضل الممارسات التشغيلية.", icon: BookOpen },
            { title: "تعلم تطبيقي", text: "ورشات ومحاكاة لترسيخ المهارات.", icon: Award },
            { title: "متابعة مستمرة", text: "مواكبة بعد التكوين للحفاظ على النتائج.", icon: Headphones },
          ]
        : [
            { title: "Expert trainers", text: "Industry practitioners and certified coaches.", icon: Users },
            { title: "Recognized curricula", text: "Aligned with operational best practices.", icon: BookOpen },
            { title: "Hands-on learning", text: "Labs and simulations to reinforce skills.", icon: Award },
            { title: "Ongoing support", text: "Post-training follow-up to sustain performance gains.", icon: Headphones },
          ];

  return (
    <section
      className="border-y border-slate-300/30 bg-[#d1d5db]/35 py-14 sm:py-20"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="why-heading"
          align="center"
          eyebrow={t.home.whyEyebrow}
          title={t.home.whyTitle}
          subtitle={t.home.whySubtitle}
        />
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <li key={item.title}>
              <FadeIn delay={i * 0.06}>
                <div className="flex h-full flex-col items-center rounded-2xl bg-white/90 p-6 text-center shadow-sm ring-1 ring-slate-200/80 sm:p-7">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--tef-navy)]/10 text-[var(--tef-navy)]">
                    <item.icon className="h-7 w-7" aria-hidden />
                  </span>
                  <h3 className="font-heading mt-4 text-base font-bold text-[var(--tef-navy)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
