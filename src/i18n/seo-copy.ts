import type { Locale } from "@/i18n/translations";

type SeoEntry = { title: string; description: string };

export const homeSeo: Record<Locale, SeoEntry> = {
  fr: {
    title: "Accueil",
    description:
      "TEF Maroc Legacy à Casablanca : formations professionnelles en hôtellerie, cuisine, pâtisserie, management et coaching pour entreprises. Parcours modulaires et certification au Maroc.",
  },
  en: {
    title: "Home",
    description:
      "TEF Maroc Legacy in Casablanca: professional hospitality, culinary, pastry, and management training plus corporate coaching. Modular programs for teams across Morocco.",
  },
  ar: {
    title: "الرئيسية",
    description:
      "تي إي إف ماروك ليجاسي بالدار البيضاء: تكوين مهني في الضيافة والمطبخ والحلويات والإدارة والتوجيه للشركات. مسارات مرنة في أنحاء المغرب.",
  },
};

export const aboutSeo: Record<Locale, SeoEntry> = {
  fr: {
    title: "À propos",
    description:
      "Découvrez la mission, la méthodologie et l’équipe de TEF Maroc Legacy : centre de formation dédié aux métiers de l’hôtellerie-restauration et du management opérationnel au Maroc.",
  },
  en: {
    title: "About Us",
    description:
      "Learn about TEF Maroc Legacy’s mission, training methodology, and faculty—focused on hospitality, F&B, and operational leadership for organizations in Morocco.",
  },
  ar: {
    title: "من نحن",
    description:
      "تعرّف على رسالة تي إي إف ماروك ليجاسي ومنهجيته وفريقه: تكوين متخصص في الضيافة والمطاعم والقيادة التشغيلية في المغرب.",
  },
};

export const trainingsSeo: Record<Locale, SeoEntry> = {
  fr: {
    title: "Formations — Catalogue",
    description:
      "Catalogue des formations TEF Maroc Legacy : réception, cuisine, pâtisserie, service, hygiène HACCP, maintenance et management. Durées modulaires et objectifs par métier.",
  },
  en: {
    title: "Trainings — Catalogue",
    description:
      "Browse TEF Maroc Legacy training paths: reception, kitchen, pastry, restaurant service, hygiene, maintenance, and management—with clear durations and learning outcomes.",
  },
  ar: {
    title: "التكوينات — الكتالوج",
    description:
      "استعرض مسارات تي إي إف ماروك ليجاسي: الاستقبال، المطبخ، الحلويات، الخدمة، النظافة، الصيانة والإدارة مع مدة التكوين والأهداف.",
  },
};

export const servicesSeo: Record<Locale, SeoEntry> = {
  fr: {
    title: "Services",
    description:
      "Services TEF Maroc Legacy : programmes sur mesure, coaching dirigeants et équipes, ateliers terrain et plans de compétences pour hôtels, restaurants et groupes au Maroc.",
  },
  en: {
    title: "Services",
    description:
      "TEF Maroc Legacy services: custom training programs, executive and team coaching, workshops, and competency frameworks for hotels, restaurants, and groups in Morocco.",
  },
  ar: {
    title: "الخدمات",
    description:
      "خدمات تي إي إف ماروك ليجاسي: برامج مخصصة، توجيه للإدارات والفرق، ورش ميدانية وخطط كفاءات للفنادق والمطاعم والمجموعات في المغرب.",
  },
};

export const blogSeo: Record<Locale, SeoEntry> = {
  fr: {
    title: "Blog",
    description:
      "Articles TEF Maroc Legacy : expérience client, accueil, culture HACCP et bonnes pratiques pour hôtels et restaurants au Maroc.",
  },
  en: {
    title: "Blog",
    description:
      "TEF Maroc Legacy articles on guest experience, welcome standards, HACCP culture, and hospitality operations in Morocco.",
  },
  ar: {
    title: "المدونة",
    description:
      "مقالات تي إي إف ماروك ليجاسي حول تجربة الضيف والاستقبال وثقافة سلامة الغذاء والضيافة في المغرب.",
  },
};

export const contactSeo: Record<Locale, SeoEntry> = {
  fr: {
    title: "Contact",
    description:
      "Contactez TEF Maroc Legacy à Casablanca : demande de devis formation, renseignements catalogue et accompagnement entreprise. Formulaire, téléphone et adresse.",
  },
  en: {
    title: "Contact",
    description:
      "Contact TEF Maroc Legacy in Casablanca for training quotes, program information, and corporate support—form, phone, and office address in Morocco.",
  },
  ar: {
    title: "اتصل بنا",
    description:
      "تواصل مع تي إي إف ماروك ليجاسي بالدار البيضاء لعرض أسعار التكوين أو الاستفسارات أو دعم الشركات: نموذج، هاتف وعنوان.",
  },
};

export const homeKeywords: Record<Locale, string[]> = {
  fr: [
    "formation professionnelle Maroc",
    "formation hôtellerie Casablanca",
    "école hôtelière Maroc",
    "coaching management Maroc",
    "formation cuisine professionnelle",
    "HACCP formation Maroc",
    "TEF Maroc Legacy",
  ],
  en: [
    "professional training Morocco",
    "hospitality training Casablanca",
    "hotel school Morocco",
    "management coaching Morocco",
    "culinary training Morocco",
    "HACCP training Morocco",
    "TEF Maroc Legacy",
  ],
  ar: [
    "تكوين مهني المغرب",
    "تكوين ضيافة الدار البيضاء",
    "فندقة تكوين المغرب",
    "توجيه إداري المغرب",
    "تكوين مطبخ مهني",
    "TEF Maroc Legacy",
  ],
};

export const aboutKeywords: Record<Locale, string[]> = {
  fr: ["à propos TEF Maroc", "centre formation Casablanca", "méthodologie formation entreprise"],
  en: ["about TEF Maroc Legacy", "training center Morocco", "corporate training methodology"],
  ar: ["من نحن تي إي إف ماروك", "مركز تكوين المغرب"],
};

export const trainingsKeywords: Record<Locale, string[]> = {
  fr: [
    "catalogue formations hôtellerie",
    "formation réception hôtel",
    "formation cuisine Maroc",
    "formation pâtisserie professionnelle",
    "formation management hôtelier",
  ],
  en: [
    "hospitality training catalog",
    "hotel reception training",
    "culinary school Morocco",
    "pastry professional course",
    "hotel management training",
  ],
  ar: ["كتالوج تكوين ضيافة", "تكوين استقبال فندق", "تكوين مطبخ المغرب"],
};

export const servicesKeywords: Record<Locale, string[]> = {
  fr: ["coaching entreprise Maroc", "atelier formation équipe", "plan de compétences RH"],
  en: ["corporate coaching Morocco", "team training workshop", "HR competency framework"],
  ar: ["توجيه شركات المغرب", "ورش تكوين فرق"],
};

export const contactKeywords: Record<Locale, string[]> = {
  fr: ["contact formation Casablanca", "devis formation entreprise Maroc"],
  en: ["contact training Morocco", "request quote hospitality training"],
  ar: ["اتصال تكوين الدار البيضاء"],
};

/** Données FAQ structurées (schema.org FAQPage) — page d’accueil uniquement */
export const homeFaqLd: Record<Locale, { question: string; answer: string }[]> = {
  fr: [
    {
      question: "Quels domaines couvrent les formations TEF Maroc Legacy ?",
      answer:
        "Nous proposons des parcours en réception et hospitalité, cuisine et arts culinaires, pâtisserie, service en salle, hygiène et sécurité alimentaire, maintenance des locaux et management opérationnel, avec des modules adaptés aux équipes.",
    },
    {
      question: "Les formations sont-elles destinées aux entreprises ou aux particuliers ?",
      answer:
        "Nous accompagnons principalement les entreprises (hôtels, restaurants, chaînes et groupes) avec des programmes sur mesure, ainsi que les professionnels en reconversion ou montée en compétences selon les sessions ouvertes.",
    },
    {
      question: "Comment obtenir un devis ou un programme personnalisé ?",
      answer:
        "Utilisez le formulaire de contact sur cette page ou écrivez-nous à l’adresse indiquée : nous analysons vos besoins, vos effectifs et vos objectifs pour proposer un calendrier et un contenu alignés sur vos standards.",
    },
  ],
  en: [
    {
      question: "Which training areas does TEF Maroc Legacy cover?",
      answer:
        "We offer learning paths in reception and hospitality, kitchen and culinary arts, pastry, restaurant service, food safety and hygiene, facility maintenance, and operational management—with modular content for teams.",
    },
    {
      question: "Are programs designed for companies or individuals?",
      answer:
        "We primarily support hotels, restaurant groups, and operators with tailored programs, and we also serve professionals upskilling or changing roles when open enrollment sessions are available.",
    },
    {
      question: "How can I request a quote or a custom program?",
      answer:
        "Use the contact form or email us at the address on the contact page. We review your goals, headcount, and standards to propose a schedule and curriculum that fit your operation.",
    },
  ],
  ar: [
    {
      question: "ما المجالات التي يغطيها التكوين لدى تي إي إف ماروك ليجاسي؟",
      answer:
        "نوفر مسارات في الاستقبال والضيافة، المطبخ والطهي، الحلويات، خدمة المطعم، سلامة الغذاء والنظافة، صيانة المرافق، والإدارة التشغيلية، مع وحدات مرنة للفرق.",
    },
    {
      question: "هل البرامج موجهة للشركات أم للأفراد؟",
      answer:
        "نرافق بشكل أساسي الفنادق والمطاعم والمجموعات ببرامج مخصصة، كما نستقبل المهنيين الراغبين في تطوير المهارات عند توفر دورات مفتوحة.",
    },
    {
      question: "كيف أطلب عرض أسعار أو برنامجاً مخصصاً؟",
      answer:
        "عبر نموذج الاتصال أو البريد الإلكتروني المذكور في صفحة الاتصال: ندرس احتياجاتكم وأعداد المشاركين والأهداف لاقتراح جدول ومحتوى يناسب عملكم.",
    },
  ],
};
