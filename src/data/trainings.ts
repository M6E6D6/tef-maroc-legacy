export type TrainingCategory = {
  id: string;
  title: string;
  description: string;
  duration: string;
  objectives: string[];
};

/** Stable URL slugs; every category uses the same `id` in data arrays */
export const TRAINING_CATEGORY_SLUGS = [
  "reception-hospitality",
  "kitchen-culinary",
  "pastry",
  "restaurant-service",
  "maintenance",
  "hygiene",
  "management",
] as const;

export type TrainingCategorySlug = (typeof TRAINING_CATEGORY_SLUGS)[number];

export function isTrainingCategorySlug(value: string): value is TrainingCategorySlug {
  return (TRAINING_CATEGORY_SLUGS as readonly string[]).includes(value);
}

export function getAllTrainingCategorySlugs(): TrainingCategorySlug[] {
  return [...TRAINING_CATEGORY_SLUGS];
}

const trainingCategoriesEn: TrainingCategory[] = [
  {
    id: "reception-hospitality",
    title: "Reception & Hospitality",
    description:
      "Front-desk excellence, guest relations, and five-star welcome standards for hotels and residences.",
    duration: "40–80 hours (modular)",
    objectives: [
      "Master professional greeting and telephone protocols",
      "Handle reservations, complaints, and VIP arrivals",
      "Apply brand standards for lobby and concierge services",
    ],
  },
  {
    id: "kitchen-culinary",
    title: "Kitchen & Culinary Arts",
    description:
      "Classic and modern techniques, mise en place, and kitchen safety for professional brigades.",
    duration: "60–120 hours",
    objectives: [
      "Execute foundational cuts, stocks, and sauces",
      "Coordinate timing and plating under pressure",
      "Follow HACCP-aligned kitchen workflows",
    ],
  },
  {
    id: "pastry",
    title: "Pastry",
    description:
      "Desserts, viennoiserie, and plated sweets with precision, creativity, and consistency.",
    duration: "48–96 hours",
    objectives: [
      "Work with doughs, creams, and chocolate tempering",
      "Design seasonal pastry menus",
      "Meet hygiene and allergen labelling expectations",
    ],
  },
  {
    id: "restaurant-service",
    title: "Restaurant & Service",
    description:
      "Floor service, wine basics, upselling, and seamless coordination between kitchen and dining room.",
    duration: "40–72 hours",
    objectives: [
      "Deliver synchronized service and table-side etiquette",
      "Support revenue through recommendations and pairings",
      "Manage peak service periods calmly and efficiently",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance",
    description:
      "Preventive upkeep, minor repairs, and facility readiness for hospitality environments.",
    duration: "32–64 hours",
    objectives: [
      "Prioritize work orders and safety checks",
      "Use tools and documentation responsibly",
      "Support sustainability and energy-saving practices",
    ],
  },
  {
    id: "hygiene",
    title: "Hygiene",
    description:
      "Food safety, personal hygiene, and audit readiness aligned with industry regulations.",
    duration: "16–40 hours",
    objectives: [
      "Apply HACCP principles and cleaning schedules",
      "Train teams on cross-contamination prevention",
      "Prepare for inspections and certifications",
    ],
  },
  {
    id: "management",
    title: "Management",
    description:
      "Leadership, operations, HR basics, and performance culture for supervisors and aspiring managers.",
    duration: "48–100 hours",
    objectives: [
      "Set KPIs, coach teams, and run effective meetings",
      "Optimize scheduling, costs, and guest satisfaction",
      "Develop succession and talent plans",
    ],
  },
];

const trainingCategoriesFr: TrainingCategory[] = [
  {
    id: "reception-hospitality",
    title: "Réception & Hospitalité",
    description: "Excellence à l'accueil, relation client et standards de bienvenue.",
    duration: "40–80 heures (modulaire)",
    objectives: ["Maîtriser l'accueil professionnel", "Gérer réservations et réclamations", "Appliquer les standards de marque"],
  },
  {
    id: "kitchen-culinary",
    title: "Cuisine & Arts culinaires",
    description: "Techniques classiques et modernes, mise en place et sécurité en cuisine.",
    duration: "60–120 heures",
    objectives: ["Exécuter les bases de cuisine", "Coordonner timing et dressage", "Appliquer des workflows HACCP"],
  },
  {
    id: "pastry",
    title: "Pâtisserie",
    description: "Desserts, viennoiserie et créations sucrées avec précision.",
    duration: "48–96 heures",
    objectives: ["Travailler pâtes et crèmes", "Concevoir des cartes saisonnières", "Respecter hygiène et allergènes"],
  },
  {
    id: "restaurant-service",
    title: "Restaurant & Service",
    description: "Service en salle, bases du vin et coordination cuisine-salle.",
    duration: "40–72 heures",
    objectives: ["Assurer un service synchronisé", "Développer l'upselling", "Gérer les pics d'activité"],
  },
  {
    id: "maintenance",
    title: "Maintenance",
    description: "Entretien préventif, réparations mineures et disponibilité des installations.",
    duration: "32–64 heures",
    objectives: ["Prioriser les interventions", "Utiliser outils et documents", "Soutenir les pratiques durables"],
  },
  {
    id: "hygiene",
    title: "Hygiène",
    description: "Sécurité alimentaire, hygiène personnelle et préparation aux audits.",
    duration: "16–40 heures",
    objectives: ["Appliquer les principes HACCP", "Prévenir les contaminations", "Préparer inspections et certifications"],
  },
  {
    id: "management",
    title: "Management",
    description: "Leadership, opérations, RH et culture de performance.",
    duration: "48–100 heures",
    objectives: ["Définir KPI et coacher", "Optimiser planning et coûts", "Développer les talents"],
  },
];

const trainingCategoriesAr: TrainingCategory[] = [
  {
    id: "reception-hospitality",
    title: "الاستقبال والضيافة",
    description: "التميز في الاستقبال وعلاقة الضيف ومعايير الترحيب.",
    duration: "40-80 ساعة",
    objectives: ["إتقان بروتوكولات الاستقبال", "معالجة الحجوزات والشكاوى", "تطبيق معايير العلامة"],
  },
  {
    id: "kitchen-culinary",
    title: "المطبخ وفنون الطهي",
    description: "تقنيات الطهي الأساسية والحديثة مع السلامة المهنية.",
    duration: "60-120 ساعة",
    objectives: ["تنفيذ الأساسيات", "تنسيق التوقيت والتقديم", "اتباع إجراءات HACCP"],
  },
  {
    id: "pastry",
    title: "الحلويات",
    description: "حلويات ومعجنات بدقة وإبداع وثبات جودة.",
    duration: "48-96 ساعة",
    objectives: ["العمل على العجائن والكريمات", "تصميم قوائم موسمية", "احترام اشتراطات النظافة والحساسية"],
  },
  {
    id: "restaurant-service",
    title: "خدمة المطعم",
    description: "خدمة القاعة والتنسيق بين المطبخ وقاعة الطعام.",
    duration: "40-72 ساعة",
    objectives: ["تقديم خدمة متزامنة", "تعزيز المبيعات التكميلية", "إدارة فترات الذروة بكفاءة"],
  },
  {
    id: "maintenance",
    title: "الصيانة",
    description: "صيانة وقائية وإصلاحات بسيطة وجاهزية المرافق.",
    duration: "32-64 ساعة",
    objectives: ["ترتيب أوامر العمل", "استخدام الأدوات والوثائق", "دعم الاستدامة وترشيد الطاقة"],
  },
  {
    id: "hygiene",
    title: "النظافة",
    description: "سلامة الغذاء والنظافة والاستعداد للتفتيش.",
    duration: "16-40 ساعة",
    objectives: ["تطبيق مبادئ HACCP", "منع التلوث المتبادل", "التحضير للتفتيش والشهادات"],
  },
  {
    id: "management",
    title: "الإدارة",
    description: "القيادة والعمليات والموارد البشرية وثقافة الأداء.",
    duration: "48-100 ساعة",
    objectives: ["تحديد مؤشرات الأداء", "تحسين التخطيط والتكاليف", "تطوير خطط التعاقب والكفاءات"],
  },
];

export function getTrainingCategories(locale: "fr" | "en" | "ar"): TrainingCategory[] {
  if (locale === "fr") return trainingCategoriesFr;
  if (locale === "ar") return trainingCategoriesAr;
  return trainingCategoriesEn;
}

export const trainingCategories: TrainingCategory[] = trainingCategoriesEn;
