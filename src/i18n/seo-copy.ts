import type { Locale } from "@/i18n/translations";

type SeoEntry = { title: string; description: string };

export const homeSeo: Record<Locale, SeoEntry> = {
  fr: {
    title: "Accueil",
    description:
      "Formation hôtellerie Maroc et école restauration : Tamuda Hospitality Academy à Tamuda Bay (M'diq), près de Tanger. Académie premium, parcours professionnels et accompagnement entreprises.",
  },
  en: {
    title: "Home",
    description:
      "Hospitality training Morocco & restaurant school: Tamuda Hospitality Academy in Tamuda Bay (M'diq) near Tangier—premium programs, modular pathways, and corporate support nationwide.",
  },
  ar: {
    title: "الرئيسية",
    description:
      "تكوين فندقة ومدرسة مطاعم في المغرب: أكاديمية تامودا للضيافة في تامودا باي (المضيق) قرب طنجة. برامج راقية للشركات والمهنيين.",
  },
};

export const aboutSeo: Record<Locale, SeoEntry> = {
  fr: {
    title: "À propos",
    description:
      "Mission et méthode Tamuda Hospitality Academy (M'diq) : centre de référence pour la formation hôtellerie Maroc, l’école restauration et le service de luxe, avec impact mesurable sur le terrain.",
  },
  en: {
    title: "About Us",
    description:
      "Tamuda Hospitality Academy (M'diq): our mission and training methodology for hospitality, food & beverage, and luxury service—measurable outcomes for teams in Morocco.",
  },
  ar: {
    title: "من نحن",
    description:
      "رسالة وأسلوب أكاديمية تامودا للضيافة بالمضيق: تكوين مهني في الفندقة والمطاعم وخدمة الفخامة مع نتائج ملموسة في المغرب.",
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
      "Hospitality training Morocco & restaurant school programs: reception, kitchen, pastry, service, HACCP, maintenance, and hotel management at Tamuda Hospitality Academy (M'diq)—clear learning outcomes.",
  },
  ar: {
    title: "التكوينات — الكتالوج",
    description:
      "تكوين فندقة ومدرسة مطاعم: برامج الاستقبال، المطبخ، الحلويات، الخدمة، سلامة الغذاء والصيانة وإدارة الفنادق في أكاديمية تامودا بالمضيق.",
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
      "Contact formation hôtellerie Maroc — Tamuda Hospitality Academy, Tamuda Bay (M'diq). Devis, catalogue formations / école restauration, accompagnement entreprise : formulaire, téléphone, adresse.",
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

export const blogKeywords: Record<Locale, string[]> = {
  fr: [
    "blog hôtellerie Maroc",
    "conseils restauration professionnelle",
    "expérience client hôtel",
    "culture HACCP",
    "Tamuda Hospitality Academy",
  ],
  en: [
    "hospitality blog Morocco",
    "restaurant operations",
    "guest experience hotel",
    "food safety culture",
    "Tamuda Hospitality Academy",
  ],
  ar: ["مدونة ضيافة المغرب", "سلامة غذائية", "تجربة الضيف", "أكاديمية تامودا للضيافة"],
};

export const aboutKeywords: Record<Locale, string[]> = {
  fr: [
    "Tamuda Hospitality Academy",
    "formation hôtellerie Maroc",
    "école restauration Maroc",
    "à propos académie hôtelière",
    "formation luxe Maroc",
  ],
  en: [
    "Tamuda Hospitality Academy",
    "hospitality training Morocco",
    "restaurant school Morocco",
    "premium hospitality academy Morocco",
  ],
  ar: ["أكاديمية تامودا", "تكوين فندقة المغرب", "مدرسة مطاعم المغرب", "تكوين ضيافة فاخرة المغرب"],
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
  fr: [
    "coaching entreprise Maroc",
    "atelier formation équipe",
    "plan de compétences RH",
    "formation hôtellerie entreprise",
    "accompagnement restauration Maroc",
  ],
  en: [
    "corporate coaching Morocco",
    "team training workshop",
    "HR competency framework",
    "hospitality corporate training",
  ],
  ar: ["توجيه شركات المغرب", "ورش تكوين فرق", "تكوين مؤسسات ضيافة"],
};

export const contactKeywords: Record<Locale, string[]> = {
  fr: [
    "contact formation M'diq",
    "devis formation entreprise Maroc",
    "formation hôtellerie Maroc contact",
    "école restauration Maroc",
  ],
  en: [
    "contact training Morocco",
    "request quote hospitality training",
    "hospitality academy contact Tangier",
  ],
  ar: ["اتصال تكوين المضيق", "عرض أسعار تكوين المغرب", "أكاديمية ضيافة المغرب"],
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
    {
      question: "Où suivre une formation hôtellerie au Maroc ?",
      answer:
        "Tamuda Hospitality Academy est basée à Tamuda Bay (M'diq), près de Tanger. Nous organisons des parcours pour entreprises et professionnels : renseignez-vous sur les sessions, l’inter-entreprise ou l’intervention sur site.",
    },
    {
      question: "Proposez-vous une formation restauration et service au Maroc ?",
      answer:
        "Oui : notre école restauration couvre cuisine, pâtisserie, service en salle, hygiène HACCP et management opérationnel, avec des modules adaptés aux besoins des établissements.",
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
    {
      question: "Where can I take hospitality training in Morocco?",
      answer:
        "Tamuda Hospitality Academy is located in Tamuda Bay (M'diq) near Tangier. We run programs for companies and professionals—ask us about open sessions, in-house delivery, or tailored pathways.",
    },
    {
      question: "Do you offer restaurant and food service training in Morocco?",
      answer:
        "Yes. Our restaurant school pathways cover kitchen, pastry, dining room service, HACCP hygiene, and operational management, with modular content for hotels and restaurant groups.",
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
    {
      question: "أين يمكنني متابعة تكوين في الفندقة بالمغرب؟",
      answer:
        "تتواجد أكاديمية تامودا للضيافة في تامودا باي (المضيق) قرب طنجة. ننظم برامج للشركات والمهنيين؛ تواصلوا لمعرفة الدورات والتكوين داخل المؤسسة.",
    },
    {
      question: "هل تقدمون تكويناً في المطاعم وخدمة الزبائن؟",
      answer:
        "نعم: نغطي المطبخ والحلويات وخدمة القاعة وسلامة الغذاء HACCP والإدارة التشغيلية، بوحدات مرنة للفنادق والمطاعم.",
    },
  ],
};
