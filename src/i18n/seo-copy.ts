import type { Locale } from "@/i18n/translations";

type SeoEntry = { title: string; description: string };

export const homeSeo: Record<Locale, SeoEntry> = {
  fr: {
    title: "Accueil",
    description:
      "TEF Maroc Legacy : formations professionnelles, coaching et développement des compétences en hôtellerie et management au Maroc.",
  },
  en: {
    title: "Home",
    description:
      "TEF Maroc Legacy: professional training, coaching, and skill development in hospitality and management in Morocco.",
  },
  ar: {
    title: "الرئيسية",
    description:
      "تي إي إف ماروك ليجاسي: تكوين مهني وتوجيه وتطوير المهارات في الضيافة والإدارة بالمغرب.",
  },
};

export const aboutSeo: Record<Locale, SeoEntry> = {
  fr: {
    title: "À propos",
    description:
      "Mission, vision, méthodologie et équipe de TEF Maroc Legacy — centre de formation professionnelle au Maroc.",
  },
  en: {
    title: "About Us",
    description:
      "Mission, vision, methodology, and team at TEF Maroc Legacy — professional training in Morocco.",
  },
  ar: {
    title: "من نحن",
    description: "المهمة والرؤية والمنهجية وفريق تي إي إف ماروك ليجاسي.",
  },
};

export const trainingsSeo: Record<Locale, SeoEntry> = {
  fr: {
    title: "Formations — Catalogue",
    description:
      "Catalogue des formations : hôtellerie, cuisine, pâtisserie, management et plus — TEF Maroc Legacy.",
  },
  en: {
    title: "Trainings — Catalogue",
    description:
      "Training categories: hospitality, culinary, pastry, management, and more at TEF Maroc Legacy.",
  },
  ar: {
    title: "التكوينات — الكتالوج",
    description: "فئات التكوين: الضيافة، المطبخ، الحلويات، الإدارة والمزيد.",
  },
};

export const servicesSeo: Record<Locale, SeoEntry> = {
  fr: {
    title: "Services",
    description:
      "Programmes de formation, coaching, ateliers et plans de compétences — TEF Maroc Legacy.",
  },
  en: {
    title: "Services",
    description: `Training programs, coaching, workshops, and skill plans — TEF Maroc Legacy.`,
  },
  ar: {
    title: "الخدمات",
    description: "برامج التكوين والتوجيه والورش وخطط المهارات.",
  },
};

export const contactSeo: Record<Locale, SeoEntry> = {
  fr: {
    title: "Contact",
    description: "Contactez TEF Maroc Legacy — adresse, téléphone, email et formulaire.",
  },
  en: {
    title: "Contact",
    description: `Contact TEF Maroc Legacy — address in Morocco, phone, email, and message form.`,
  },
  ar: {
    title: "اتصل بنا",
    description: "تواصل مع تي إي إف ماروك ليجاسي — العنوان والهاتف والبريد والنموذج.",
  },
};
