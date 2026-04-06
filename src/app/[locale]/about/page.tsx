"use client";

import { Users, Search, GraduationCap, LineChart } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionImage } from "@/components/ui/SectionImage";
import { marketingImages } from "@/data/marketing-images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";

const teamPhotoAltKeys = ["teamCollaboration", "teamKitchen", "teamWorkshop"] as const;

export default function AboutPage() {
  const { locale, t } = useI18n();
  const methodology =
    locale === "fr"
      ? [
          { step: "01", title: "Analyse des besoins", text: "Cartographie des écarts et priorités métier.", icon: Search },
          { step: "02", title: "Déploiement", text: "Ateliers, labs et coaching avec objectifs clairs.", icon: GraduationCap },
          { step: "03", title: "Évaluation", text: "Mesure de l'impact et plan d'amélioration.", icon: LineChart },
        ]
      : locale === "ar"
        ? [
            { step: "01", title: "تحليل الاحتياجات", text: "تحديد الفجوات والأولويات التشغيلية.", icon: Search },
            { step: "02", title: "تنفيذ التكوين", text: "ورشات وتطبيقات عملية مع أهداف واضحة.", icon: GraduationCap },
            { step: "03", title: "التقييم", text: "قياس الأثر وخطة التحسين.", icon: LineChart },
          ]
        : [
            { step: "01", title: "Needs analysis", text: "Map gaps and priorities with HR and managers.", icon: Search },
            { step: "02", title: "Training delivery", text: "Workshops, labs, and coaching with clear outcomes.", icon: GraduationCap },
            { step: "03", title: "Evaluation", text: "Measure impact and define next steps.", icon: LineChart },
          ];

  const team =
    locale === "fr"
      ? [
          { name: "Direction & formateurs", role: "Instructeurs seniors et responsables de programme", id: "t1" },
          { name: "Experts hôtellerie", role: "Spécialistes F&B, chambres et expérience client", id: "t2" },
          { name: "Opérations & coaching", role: "Superviseurs et coachs certifiés", id: "t3" },
        ]
      : locale === "ar"
        ? [
            { name: "الإدارة والمدربون", role: "مدربون كبار ومديرو برامج", id: "t1" },
            { name: "خبراء الضيافة", role: "مختصو الأغذية والخدمات وتجربة الضيف", id: "t2" },
            { name: "العمليات والتوجيه", role: "مشرفون ومدربون معتمدون", id: "t3" },
          ]
        : [
            { name: "Leadership & faculty", role: "Senior instructors & program directors", id: "t1" },
            { name: "Hospitality specialists", role: "F&B, rooms, and guest experience experts", id: "t2" },
            { name: "Operations & coaching", role: "Supervisors and certified coaches", id: "t3" },
          ];

  return (
    <div className="bg-white">
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-[var(--color-navy)] sm:text-5xl">
            {t.aboutPage.title} {siteConfig.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">{t.aboutPage.intro}</p>
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <FadeIn>
              <div>
                <h2 id="mission-heading" className="font-heading text-2xl font-semibold text-[var(--color-navy)]">
                  {t.aboutPage.mission}
                </h2>
                <p className="mt-4 text-slate-600">{t.aboutPage.missionText}</p>
              </div>
              <div className="mt-10">
                <h2 className="font-heading text-2xl font-semibold text-[var(--color-navy)]">
                  {t.aboutPage.vision}
                </h2>
                <p className="mt-4 text-slate-600">{t.aboutPage.visionText}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <SectionImage
                src={marketingImages.aboutFacility}
                alt={t.mediaAlt.aboutFacility}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50/80 py-16 sm:py-24" aria-labelledby="method-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="method-heading"
            eyebrow={t.aboutPage.howWeWork}
            title={t.aboutPage.methodology}
            subtitle={t.aboutPage.methodologySubtitle}
          />
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {methodology.map((m, i) => (
              <li key={m.step}>
                <FadeIn delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <span className="text-sm font-bold text-[var(--color-gold)]">{m.step}</span>
                    <m.icon className="mt-4 h-8 w-8 text-[var(--color-navy)]" aria-hidden />
                    <h3 className="font-heading mt-4 text-lg font-semibold text-[var(--color-navy)]">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">{m.text}</p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="team-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="team-heading"
            eyebrow={t.aboutPage.people}
            title={t.aboutPage.team}
            subtitle={t.aboutPage.teamSubtitle}
          />
          <ul className="mt-12 grid gap-8 sm:grid-cols-3">
            {team.map((member, i) => (
              <li key={member.id}>
                <FadeIn delay={i * 0.06}>
                  <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <SectionImage
                      src={marketingImages.team[i]!}
                      alt={t.mediaAlt[teamPhotoAltKeys[i]!]}
                      aspect="square"
                      className="rounded-none border-0 shadow-none"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-[var(--color-navy)]">
                        <Users className="h-5 w-5 text-[var(--color-gold)]" aria-hidden />
                        <h3 className="font-heading font-semibold">{member.name}</h3>
                      </div>
                      <p className="mt-2 text-sm text-slate-600">{member.role}</p>
                    </div>
                  </article>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
