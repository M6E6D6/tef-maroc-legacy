import { headers } from "next/headers";
import { blogBreadcrumbSegment } from "@/data/blog-posts";
import { serviceBreadcrumbSegment } from "@/data/services-detail";
import { trainingBreadcrumbSegment } from "@/data/trainings-detail";
import { absoluteUrl } from "@/i18n/metadata";
import { locales, type Locale } from "@/i18n/translations";

const segmentLabels: Record<Locale, Record<string, string>> = {
  fr: {
    about: "À propos",
    trainings: "Formations",
    services: "Services",
    blog: "Blog",
    contact: "Contact",
  },
  en: {
    about: "About",
    trainings: "Trainings",
    services: "Services",
    blog: "Blog",
    contact: "Contact",
  },
  ar: {
    about: "من نحن",
    trainings: "التكوينات",
    services: "الخدمات",
    blog: "المدونة",
    contact: "اتصل بنا",
  },
};

const homeLabels: Record<Locale, string> = {
  fr: "Accueil",
  en: "Home",
  ar: "الرئيسية",
};

export async function BreadcrumbJsonLd() {
  const pathname = (await headers()).get("x-pathname") ?? "";
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length < 1) return null;

  const locale = parts[0] as Locale;
  if (!locales.includes(locale)) return null;

  const items: { name: string; url: string }[] = [
    { name: homeLabels[locale], url: absoluteUrl(`/${locale}`) },
  ];

  const labels: Record<string, string> = {
    ...segmentLabels[locale],
    ...serviceBreadcrumbSegment[locale],
    ...trainingBreadcrumbSegment[locale],
    ...blogBreadcrumbSegment[locale],
  };
  let pathAcc = `/${locale}`;
  for (let i = 1; i < parts.length; i++) {
    const seg = parts[i];
    if (!seg) continue;
    pathAcc += `/${seg}`;
    const name = labels[seg] ?? seg;
    items.push({ name, url: absoluteUrl(pathAcc) });
  }

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
