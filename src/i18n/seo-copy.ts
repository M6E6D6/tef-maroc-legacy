import type { Locale } from "@/i18n/translations";

type SeoEntry = { title: string; description: string };

export const homeSeo: Record<Locale, SeoEntry> = {
  fr: {
    title: "Accueil",
    description:
      "Tamuda Hospitality Academy à Tamuda Bay (M'diq) : académie premium en hôtellerie, restauration et service de luxe. Formations professionnelles, parcours modulaires et accompagnement des entreprises au Maroc.",
  },
  en: {
    title: "Home",
    description:
      "Tamuda Hospitality Academy in Tamuda Bay (M'diq): a premium academy for hospitality, restaurants, and luxury service—professional training, modular programs, and corporate pathways across Morocco.",
  },
  ar: {
    title: "الرئيسية",
    description:
      "أكاديمية تامودا للضيافة في تامودا باي (المضيق): تكوين راقٍ في الفندقة والمطاعم وخدمة الضيافة الفاخرة. برامج مهنية ومسارات مرنة للشركات في المغرب.",
  },
};

export const aboutSeo: Record<Locale, SeoEntry> = {
  fr: {
    title: "À propos",
    description:
      "Découvrez la mission et la méthode de Tamuda Hospitality Academy : académie premium dédiée aux métiers de l’hôtellerie, de la restauration et du service de luxe au Maroc.",
  },
  en: {
    title: "About Us",
    description:
      "Learn about Tamuda Hospitality Academy’s mission and approach—a premium academy for hospitality, food & beverage, and luxury service in Morocco.",
  },
  ar: {
    title: "من نحن",
    description:
      "تعرّف على رسالة وأسلوب أكاديمية تامودا للضيافة: تكوين راقٍ في الفندقة والمطاعم وخدمة الفخامة في المغرب.",
  },
};

export const trainingsSeo: Record<Locale, SeoEntry> = {
  fr: {
    title: "Formations — Catalogue",
    description:
      "Catalogue Tamuda Hospitality Academy — formation hôtellerie Maroc, école restauration Maroc : réception, cuisine, pâtisserie, service, hygiène HACCP, maintenance et management hôtelier. Durées modulaires et objectifs par métier.",
  },
  en: {
    title: "Trainings — Catalogue",
    description:
      "Browse Tamuda Hospitality Academy programs: reception, kitchen, pastry, restaurant service, hygiene, maintenance, and hotel management—with clear outcomes.",
  },
  ar: {
    title: "التكوينات — الكتالوج",
    description:
      "استعرض برامج أكاديمية تامودا: الاستقبال، المطبخ، الحلويات، الخدمة، النظافة، الصيانة وإدارة الفنادق مع الأهداف المهنية.",
  },
};

export const servicesSeo: Record<Locale, SeoEntry> = {
  fr: {
    title: "Services",
    description:
      "Services Tamuda Hospitality Academy : programmes sur mesure, coaching dirigeants et équipes, ateliers et plans de compétences pour établissements hôteliers et de restauration au Maroc.",
  },
  en: {
    title: "Services",
    description:
      "Tamuda Hospitality Academy services: bespoke programs, executive and team coaching, workshops, and competency plans for hotels and restaurants in Morocco.",
  },
  ar: {
    title: "الخدمات",
    description:
      "خدمات أكاديمية تامودا: برامج مخصصة، توجيه للإدارات والفرق، ورش وخطط كفاءات للفنادق والمطاعم في المغرب.",
  },
};

export const blogSeo: Record<Locale, SeoEntry> = {
  fr: {
    title: "Blog",
    description:
      "Articles Tamuda Hospitality Academy : expérience client, accueil, culture HACCP et bonnes pratiques pour l’hôtellerie-restauration au Maroc.",
  },
  en: {
    title: "Blog",
    description:
      "Tamuda Hospitality Academy articles on guest experience, service standards, HACCP culture, and luxury hospitality operations in Morocco.",
  },
  ar: {
    title: "المدونة",
    description:
      "مقالات أكاديمية تامودا حول تجربة الضيف والاستقبال وثقافة سلامة الغذاء والضيافة الراقية في المغرب.",
  },
};

export const contactSeo: Record<Locale, SeoEntry> = {
  fr: {
    title: "Contact",
    description:
      "Contactez Tamuda Hospitality Academy à Tamuda Bay (M'diq) : devis formation, informations catalogue et accompagnement entreprise. Formulaire, téléphone et adresse.",
  },
  en: {
    title: "Contact",
    description:
      "Contact Tamuda Hospitality Academy in Tamuda Bay (M'diq) for training quotes, program details, and corporate support—form, phone, and address.",
  },
  ar: {
    title: "اتصل بنا",
    description:
      "تواصل مع أكاديمية تامودا للضيافة في تامودا باي (المضيق) لعرض أسعار التكوين أو الاستفسارات أو دعم الشركات.",
  },
};

export const homeKeywords: Record<Locale, string[]> = {
  fr: [
    "Tamuda Hospitality Academy",
    "formation hôtellerie Maroc",
    "école restauration Maroc",
    "formation restauration M'diq",
    "académie hôtelière Maroc",
    "service de luxe formation",
    "école hôtelière Maroc",
    "HACCP formation Maroc",
  ],
  en: [
    "Tamuda Hospitality Academy",
    "hospitality academy Morocco",
    "hospitality training Morocco",
    "restaurant school Morocco",
    "luxury service training",
    "hotel school M'diq",
    "restaurant training Morocco",
    "HACCP training Morocco",
  ],
  ar: [
    "أكاديمية تامودا للضيافة",
    "تكوين فندقة المغرب",
    "مدرسة مطاعم المغرب",
    "تكوين مطاعم المضيق",
    "خدمة فاخرة تكوين",
  ],
};

export const aboutKeywords: Record<Locale, string[]> = {
  fr: ["Tamuda Hospitality Academy", "à propos académie hôtelière", "formation luxe Maroc"],
  en: ["Tamuda Hospitality Academy", "premium hospitality academy Morocco"],
  ar: ["أكاديمية تامودا", "تكوين ضيافة فاخرة المغرب"],
};

export const trainingsKeywords: Record<Locale, string[]> = {
  fr: [
    "formation hôtellerie Maroc",
    "école restauration Maroc",
    "catalogue formations hôtellerie",
    "formation réception hôtel",
    "formation cuisine Maroc",
    "formation pâtisserie professionnelle",
    "formation management hôtelier",
  ],
  en: [
    "hospitality training Morocco",
    "restaurant school Morocco",
    "hospitality training catalog",
    "hotel reception training",
    "culinary school Morocco",
    "pastry professional course",
    "hotel management training",
  ],
  ar: [
    "تكوين فندقة المغرب",
    "مدرسة مطاعم المغرب",
    "كتالوج تكوين ضيافة",
    "تكوين استقبال فندق",
    "تكوين مطبخ المغرب",
  ],
};

export const servicesKeywords: Record<Locale, string[]> = {
  fr: ["coaching entreprise Maroc", "atelier formation équipe", "plan de compétences RH"],
  en: ["corporate coaching Morocco", "team training workshop", "HR competency framework"],
  ar: ["توجيه شركات المغرب", "ورش تكوين فرق"],
};

export const contactKeywords: Record<Locale, string[]> = {
  fr: ["contact formation M'diq", "devis formation entreprise Maroc"],
  en: ["contact training Morocco", "request quote hospitality training"],
  ar: ["اتصال تكوين المضيق"],
};

/** Données FAQ structurées (schema.org FAQPage) — page d’accueil uniquement */
export const homeFaqLd: Record<Locale, { question: string; answer: string }[]> = {
  fr: [
    {
      question: "Quels domaines couvrent les formations Tamuda Hospitality Academy ?",
      answer:
        "Nous proposons des parcours en hôtellerie, restauration et service de luxe : réception, cuisine et arts culinaires, pâtisserie, service en salle, hygiène et sécurité alimentaire, maintenance et management opérationnel, avec des modules adaptés aux équipes.",
    },
    {
      question: "Les formations sont-elles destinées aux entreprises ou aux particuliers ?",
      answer:
        "Nous accompagnons les entreprises (hôtels, restaurants, groupes) avec des programmes sur mesure, ainsi que les professionnels en reconversion ou montée en compétences selon les sessions ouvertes.",
    },
    {
      question: "Comment obtenir un devis ou un programme personnalisé ?",
      answer:
        "Utilisez le formulaire de contact ou écrivez-nous à l’adresse indiquée : nous analysons vos besoins, vos effectifs et vos objectifs pour proposer un calendrier et un contenu alignés sur vos standards.",
    },
  ],
  en: [
    {
      question: "Which training areas does Tamuda Hospitality Academy cover?",
      answer:
        "We offer pathways across hospitality, restaurants, and luxury service: reception, kitchen and culinary arts, pastry, restaurant service, food safety and hygiene, maintenance, and operational management—with modular content for teams.",
    },
    {
      question: "Are programs designed for companies or individuals?",
      answer:
        "We support hotels, restaurant groups, and operators with tailored programs, and we serve professionals upskilling or changing roles when open sessions are available.",
    },
    {
      question: "How can I request a quote or a custom program?",
      answer:
        "Use the contact form or email us at the address on the contact page. We review your goals, headcount, and standards to propose a schedule and curriculum that fit your operation.",
    },
  ],
  ar: [
    {
      question: "ما المجالات التي تغطيها التكوينات لدى أكاديمية تامودا للضيافة؟",
      answer:
        "نوفر مسارات في الفندقة والمطاعم وخدمة الضيافة الفاخرة: الاستقبال، المطبخ والطهي، الحلويات، خدمة المطعم، سلامة الغذاء والنظافة، الصيانة، والإدارة التشغيلية مع وحدات مرنة للفرق.",
    },
    {
      question: "هل البرامج موجهة للشركات أم للأفراد؟",
      answer:
        "نرافق الفنادق والمطاعم والمجموعات ببرامج مخصصة، ونستقبل المهنيين الراغبين في تطوير المهارات عند توفر دورات مفتوحة.",
    },
    {
      question: "كيف أطلب عرض أسعار أو برنامجاً مخصصاً؟",
      answer:
        "عبر نموذج الاتصال أو البريد الإلكتروني في صفحة الاتصال: ندرس أهدافكم وأعداد المشاركين والمعايير لاقتراح جدول ومحتوى يناسب عملكم.",
    },
  ],
};
