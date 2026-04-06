import type { Locale } from "@/i18n/translations";
import { isTrainingCategorySlug, type TrainingCategorySlug } from "@/data/trainings";

export const trainingImageIndex: Record<TrainingCategorySlug, number> = {
  "reception-hospitality": 0,
  "kitchen-culinary": 1,
  pastry: 2,
  "restaurant-service": 3,
  maintenance: 4,
  hygiene: 5,
  management: 6,
};

type Block = { type: "h2" | "p"; text: Record<Locale, string> };

type TrainingArticle = {
  slug: TrainingCategorySlug;
  meta: { title: Record<Locale, string>; description: Record<Locale, string> };
  lead: Record<Locale, string>;
  blocks: Block[];
};

const articles: TrainingArticle[] = [
  {
    slug: "reception-hospitality",
    meta: {
      title: {
        fr: "Réception & hospitalité — parcours professionnel",
        en: "Reception & hospitality — professional track",
        ar: "الاستقبال والضيافة — مسار مهني",
      },
      description: {
        fr: "Accueil, relation client et standards cinq étoiles pour hôtels et résidences : protocoles, réclamations, marque.",
        en: "Guest-facing excellence for hotels and residences: protocols, complaints, arrivals, and brand standards.",
        ar: "التميز في الاستقبال للفنادق والمساكن: البروتوكولات والشكاوى ومعايير العلامة.",
      },
    },
    lead: {
      fr: "Le premier contact fixe l’ambiance du séjour. Ce parcours relie accueil physique, téléphone, réservations et gestion d’incidents pour une expérience fluide, mesurable et alignée sur vos manuels d’exploitation.",
      en: "First impressions set the stay. This track connects desk, phone, reservations, and incident handling for a smooth, measurable guest journey aligned to your SOPs.",
      ar: "الانطباع الأول يحدد تجربة الإقامة. يربط هذا المسار المكتب والهاتف والحجوزات والتعامل مع الطوارئ لتجربة ضيف متناسقة وقابلة للقياس.",
    },
    blocks: [
      {
        type: "h2",
        text: { fr: "Contenu pédagogique", en: "What you learn", ar: "ماذا تتعلم" },
      },
      {
        type: "p",
        text: {
          fr: "Scénarios d’arrivée et de départ, langage professionnel multilingue, gestion des attentes VIP, coordination avec la conciergerie et le housekeeping.",
          en: "Check-in/out scenarios, professional multilingual phrasing, VIP expectations, and handoffs to concierge and housekeeping.",
          ar: "سيناريوهات الوصول والمغادرة، أسلوب مهني متعدد اللغات، توقعات الضيوف المميزين، والتنسيق مع الكونسييرج وخدمة الغرف.",
        },
      },
      {
        type: "h2",
        text: { fr: "Format recommandé", en: "Suggested format", ar: "الشكل المقترح" },
      },
      {
        type: "p",
        text: {
          fr: "Modules courts ou blocs intensifs (40–80 h selon profil). Évaluation en situation et grille de comportements observables.",
          en: "Modular or intensive blocks (40–80 hours depending on cohort). Role-plays and observable-behaviour checklists.",
          ar: "وحدات أو كتل مكثفة (40–80 ساعة حسب المجموعة). تمثيل أدوار وقوائم سلوكيات قابلة للملاحظة.",
        },
      },
      {
        type: "h2",
        text: { fr: "Pour aller plus loin", en: "Next steps", ar: "للمتابعة" },
      },
      {
        type: "p",
        text: {
          fr: "Nous adaptons les cas pratiques à votre PMS, vos scripts d’appel et vos politiques tarifaires.",
          en: "We tailor drills to your PMS, call scripts, and rate policies.",
          ar: "نضبط التمارين وفق نظام حجوزاتكم وسيناريوهات الاتصال وسياسات التسعير.",
        },
      },
    ],
  },
  {
    slug: "kitchen-culinary",
    meta: {
      title: {
        fr: "Cuisine & arts culinaires",
        en: "Kitchen & culinary arts",
        ar: "المطبخ وفنون الطهي",
      },
      description: {
        fr: "Techniques de brigade, mise en place, sécurité et flux HACCP pour une cuisine professionnelle stable.",
        en: "Brigade techniques, mise en place, safety, and HACCP-aligned workflow for professional kitchens.",
        ar: "تقنيات البرقاد والتحضير والسلامة وسير عمل HACCP للمطابخ المهنية.",
      },
    },
    lead: {
      fr: "Une cuisine performante repose sur des fondamentaux solides et des habitudes de cadence. Le programme équilibre gestes techniques, organisation des postes et respect des règles d’hygiène sans ralentir le service.",
      en: "High-performing kitchens pair solid fundamentals with pacing habits. The program balances technique, station organisation, and hygiene rules without slowing service.",
      ar: "يعتمد مطبخ فعال على أسس قوية وإيقاع عمل منتظم. يوازن البرنامج بين التقنية وتنظيم المحطات وقواعد السلامة دون إبطاء الخدمة.",
    },
    blocks: [
      {
        type: "h2",
        text: { fr: "Axes techniques", en: "Technical focus", ar: "المحاور التقنية" },
      },
      {
        type: "p",
        text: {
          fr: "Découpes, fonds, sauces, cuissons, dressage et communication passe / expédition sous pression.",
          en: "Cuts, stocks, sauces, cooking methods, plating, and pass communication under pressure.",
          ar: "التقطيع والمرق والصلصات وطرق الطهي والتقديم والتواصل مع منصة التسليم تحت الضغط.",
        },
      },
      {
        type: "h2",
        text: { fr: "Durée indicative", en: "Duration", ar: "المدة المقترحة" },
      },
      {
        type: "p",
        text: {
          fr: "60–120 heures selon le niveau d’entrée et les spécialités (restauration collective ou gastronomique).",
          en: "60–120 hours based on entry level and context (institutional vs fine dining).",
          ar: "60–120 ساعة حسب المستوى والسياق (جماعي أو فاخر).",
        },
      },
      {
        type: "h2",
        text: { fr: "Livrables", en: "Outcomes", ar: "المخرجات" },
      },
      {
        type: "p",
        text: {
          fr: "Fiches techniques, audits de poste et critères d’autonomie par mission.",
          en: "Recipe cards, station audits, and autonomy milestones per role.",
          ar: "بطاقات تقنية وتدقيق محطات ومعايير استقلالية لكل مهمة.",
        },
      },
    ],
  },
  {
    slug: "pastry",
    meta: {
      title: {
        fr: "Pâtisserie professionnelle",
        en: "Professional pastry",
        ar: "الحلويات المهنية",
      },
      description: {
        fr: "Desserts, viennoiserie et arts du sucre : précision, créativité et exigences sanitaires.",
        en: "Desserts, viennoiserie, and plated sweets with precision, creativity, and food-safety rigour.",
        ar: "الحلويات والمعجنات بدقة وإبداع واحترام السلامة الغذائية.",
      },
    },
    lead: {
      fr: "La pâtisserie combine science, esthétique et discipline. Nous travaillons températures, textures et tenue au transport pour des productions reproductibles en production ou en boutique.",
      en: "Pastry blends science, aesthetics, and discipline. We work temperature, texture, and hold-time for reproducible production or boutique output.",
      ar: "يجمع الحلويات بين العلم والجمال والانضباط. نركز على الحرارة والقوام والثبات بعد الإنتاج لنتائج متكررة.",
    },
    blocks: [
      {
        type: "h2",
        text: { fr: "Programme", en: "Programme", ar: "البرنامج" },
      },
      {
        type: "p",
        text: {
          fr: "Bases pâtes, crèmes, chocolat, glacerie courte ou buffet dessert selon vos besoins.",
          en: "Doughs, creams, chocolate, short ice-work, or dessert buffet lines depending on needs.",
          ar: "العجائن والكريمات والشوكولاتة وتقنيات التبريد أو بوفيه الحلويات حسب الحاجة.",
        },
      },
      {
        type: "h2",
        text: { fr: "Allergènes et étiquetage", en: "Allergens & labelling", ar: "المسببات الحساسية والتوسيم" },
      },
      {
        type: "p",
        text: {
          fr: "Traçabilité, fiches techniques et communication salle pour limiter les risques.",
          en: "Traceability, spec sheets, and floor communication to reduce risk.",
          ar: "التتبع وبطاقات المواصفات وتواصل الصالة لتقليل المخاطر.",
        },
      },
      {
        type: "h2",
        text: { fr: "Volume horaire", en: "Hours", ar: "الحصة الزمنية" },
      },
      {
        type: "p",
        text: {
          fr: "48–96 heures en général, avec ateliers courts répétés pour ancrer les gestes.",
          en: "Typically 48–96 hours with short repeated labs to lock in muscle memory.",
          ar: "غالباً 48–96 ساعة مع ورش قصيرة متكررة لترسيخ المهارات.",
        },
      },
    ],
  },
  {
    slug: "restaurant-service",
    meta: {
      title: {
        fr: "Restaurant & service en salle",
        en: "Restaurant & floor service",
        ar: "المطعم وخدمة الصالة",
      },
      description: {
        fr: "Service synchronisé, bases du vin, upselling et gestion des pics entre cuisine et salle.",
        en: "Synchronized service, wine basics, upselling, and peak coordination between kitchen and floor.",
        ar: "خدمة متزامنة وأساسيات النبيذ ورفع الإيرادات وتنسيق الذروة بين المطبخ والصالة.",
      },
    },
    lead: {
      fr: "Une salle efficace anticipe le rythme de la cuisine et le confort du convive. Le parcours renforce le briefing d’équipe, l’art de recommander sans forcer, et la gestion du stress sur le shift.",
      en: "A sharp floor team anticipates kitchen pace and guest comfort. The track strengthens pre-shift briefings, recommendations without pressure, and calm peak execution.",
      ar: "فرق صالة فعّالة تتوقع إيقاع المطبخ وشعور الضيف. يقوي المسار الإحاطة قبل الخدمة والتوصيات دون ضغط وإدارة ذروة هادئة.",
    },
    blocks: [
      {
        type: "h2",
        text: { fr: "Compétences clés", en: "Core skills", ar: "المهارات الأساسية" },
      },
      {
        type: "p",
        text: {
          fr: "Port de plateau, découpe visible, recommandations, pairings simples, gestion des réclamations à table.",
          en: "Tray service, table-side tasks, simple pairings, and in-room complaint handling.",
          ar: "حمل الصواني، المهام على الطاولة، الازدواجات البسيطة، والتعامل مع الشكاوى عند الطاولة.",
        },
      },
      {
        type: "h2",
        text: { fr: "Coordination", en: "Coordination", ar: "التنسيق" },
      },
      {
        type: "p",
        text: {
          fr: "Signaux avec la cuisine, file d’attente et priorisation quand la salle est pleine.",
          en: "Signals with the pass, queueing, and prioritisation when the house is full.",
          ar: "إشارات مع المطبخ وترتيب الأولويات عند امتلاء الصالة.",
        },
      },
      {
        type: "h2",
        text: { fr: "Durée", en: "Duration", ar: "المدة" },
      },
      {
        type: "p",
        text: {
          fr: "40–72 heures selon la complexité de la carte et le nombre de postes.",
          en: "40–72 hours depending on menu complexity and station count.",
          ar: "40–72 ساعة حسب تعقيد القائمة وعدد المحطات.",
        },
      },
    ],
  },
  {
    slug: "maintenance",
    meta: {
      title: {
        fr: "Maintenance des sites hôteliers",
        en: "Hospitality facility maintenance",
        ar: "صيانة المرافق الفندقية",
      },
      description: {
        fr: "Entretien préventif, interventions courantes et documentation pour garder les installations fiables.",
        en: "Preventive upkeep, routine fixes, and documentation to keep assets reliable.",
        ar: "الصيانة الوقائية والتدخلات الاعتيادية والتوثيق لضمان موثوقية المنشآت.",
      },
    },
    lead: {
      fr: "La maintenance invisible soutient la satisfaction client : délais d’intervention, sécurité des occupants et sobriété énergétique. Nous structurons priorités, checklists et remontées vers la direction technique.",
      en: "Invisible maintenance underpins guest satisfaction: response time, occupant safety, and efficiency. We structure priorities, checklists, and engineering escalation paths.",
      ar: "الصيانة السليمة تدعم رضا الضيف: زمن الاستجابة وسلامة النزلاء وكفاءة الطاقة. ننظم الأولويات وقوائم التحقق والتصعيد الفني.",
    },
    blocks: [
      {
        type: "h2",
        text: { fr: "Champs couverts", en: "Coverage", ar: "المجالات" },
      },
      {
        type: "p",
        text: {
          fr: "Électricité légère, plomberie simple, climatisation de confort, portes et serrures, coordination fournisseurs.",
          en: "Light electrical, basic plumbing, comfort HVAC, doors and locks, vendor coordination.",
          ar: "كهرباء خفيفة، سباكة بسيطة، تكييف الراحة، الأبواب والأقفال، تنسيق الموردين.",
        },
      },
      {
        type: "h2",
        text: { fr: "Sécurité", en: "Safety", ar: "الأمان" },
      },
      {
        type: "p",
        text: {
          fr: "Permis de travail, EPI et règles d’accès aux zones techniques.",
          en: "Work permits, PPE, and access rules for technical areas.",
          ar: "تصاريح العمل والمعدات الواقية وقواعد الدخول للمناطق التقنية.",
        },
      },
      {
        type: "h2",
        text: { fr: "Durée", en: "Duration", ar: "المدة" },
      },
      {
        type: "p",
        text: {
          fr: "32–64 heures selon le parc machines et les procédures internes.",
          en: "32–64 hours depending on asset mix and internal procedures.",
          ar: "32–64 ساعة حسب المعدات والإجراءات الداخلية.",
        },
      },
    ],
  },
  {
    slug: "hygiene",
    meta: {
      title: {
        fr: "Hygiène & sécurité alimentaire",
        en: "Hygiene & food safety",
        ar: "النظافة وسلامة الغذاء",
      },
      description: {
        fr: "HACCP, programmes de nettoyage et préparation aux contrôles pour équipes restauration et hôtellerie.",
        en: "HACCP, cleaning programmes, and inspection readiness for F&B and hotel teams.",
        ar: "HACCP وبرامج التنظيف والاستعداد للتفتيش لفرق الإطعام والضيافة.",
      },
    },
    lead: {
      fr: "L’hygiène est un geste collectif quotidien, pas un document au placard. Ce parcours rend les risques visibles, les corrections simples et la traçabilité tenable sur le terrain.",
      en: "Hygiene is a daily team habit, not a shelf document. The course makes risks visible, fixes practical, and traceability achievable on the floor.",
      ar: "النظافة عادة يومية جماعية وليست وثيقة معطاة. يجعل المسار المخاطر واضحة والتصويب عملياً والتتبع ممكناً في الميدان.",
    },
    blocks: [
      {
        type: "h2",
        text: { fr: "Modules", en: "Modules", ar: "الوحدات" },
      },
      {
        type: "p",
        text: {
          fr: "CCP, températures, chaîne du froid, allergènes, nettoyage et désinfection planifiés.",
          en: "CCPs, temperatures, cold chain, allergens, and scheduled cleaning/disinfection.",
          ar: "نقاط الرقابة الحرجة ودرجات الحرارة وسلسلة التبريد والمسببات الحساسية والتنظيم المجدول.",
        },
      },
      {
        type: "h2",
        text: { fr: "Audit", en: "Audit readiness", ar: "الاستعداد للتدقيق" },
      },
      {
        type: "p",
        text: {
          fr: "Jeux de rôle d’inspection et préparation des dossiers attendus.",
          en: "Inspection role-plays and expected file preparation.",
          ar: "تمثيل تفتيش وإعداد الملفات المطلوبة.",
        },
      },
      {
        type: "h2",
        text: { fr: "Durée", en: "Duration", ar: "المدة" },
      },
      {
        type: "p",
        text: {
          fr: "16–40 heures, souvent en blocs courts pour ne pas retirer les équipes du service.",
          en: "16–40 hours, often in short blocks to avoid pulling teams off service.",
          ar: "16–40 ساعة غالباً في كتل قصيرة دون إخلال بالخدمة.",
        },
      },
    ],
  },
  {
    slug: "management",
    meta: {
      title: {
        fr: "Management & leadership opérationnel",
        en: "Management & operational leadership",
        ar: "الإدارة والقيادة التشغيلية",
      },
      description: {
        fr: "Encadrement, pilotage des équipes, RH de base et culture de performance pour superviseurs et managers terrain.",
        en: "Supervision, team steering, HR basics, and a performance culture for supervisors and front-line managers.",
        ar: "الإشراف وقيادة الفرق وأساسيات الموارد البشرية وثقافة الأداء للمشرفين ومديري الخط الأول.",
      },
    },
    lead: {
      fr: "Le passage à des responsabilités d’équipe exige autre chose que l’excellence technique : clarifier les attentes, donner du feedback, arbitrer sous contrainte et faire monter en compétences sans micro-management.",
      en: "Moving to team leadership takes more than technical excellence: setting expectations, feedback, trade-offs under pressure, and developing people without micromanaging.",
      ar: "الانتقال لقيادة الفريق يتطلب أكثر من الإتقان الفني: توضيح التوقعات والتغذية الراجعة والقرار تحت الضغط وتطوير الآخرين دون إفراط في التحكم.",
    },
    blocks: [
      {
        type: "h2",
        text: { fr: "Thématiques", en: "Themes", ar: "المواضيع" },
      },
      {
        type: "p",
        text: {
          fr: "Planification, coûts, satisfaction client, conduite de réunions, entretiens structurés, gestion des conflits.",
          en: "Planning, costs, guest satisfaction, meetings, structured 1:1s, conflict basics.",
          ar: "التخطيط والتكاليف ورضا الضيف والاجتماعات والمقابلات الفردية وأساسيات النزاعات.",
        },
      },
      {
        type: "h2",
        text: { fr: "Public cible", en: "Audience", ar: "الجمهور" },
      },
      {
        type: "p",
        text: {
          fr: "Chefs de poste, futurs managers, coordinateurs multi-sites.",
          en: "Shift leads, future managers, multi-site coordinators.",
          ar: "رؤوس الورديات والمديرين المستقبليين ومنسقي عدة مواقع.",
        },
      },
      {
        type: "h2",
        text: { fr: "Durée", en: "Duration", ar: "المدة" },
      },
      {
        type: "p",
        text: {
          fr: "48–100 heures avec projets terrain entre les sessions.",
          en: "48–100 hours with field assignments between sessions.",
          ar: "48–100 ساعة مع مهام ميدانية بين الجلسات.",
        },
      },
    ],
  },
];

const bySlug = Object.fromEntries(articles.map((a) => [a.slug, a])) as Record<
  TrainingCategorySlug,
  TrainingArticle
>;

export function getTrainingArticle(slug: string): TrainingArticle | undefined {
  return isTrainingCategorySlug(slug) ? bySlug[slug] : undefined;
}

export const trainingBreadcrumbSegment: Record<Locale, Record<TrainingCategorySlug, string>> = {
  fr: {
    "reception-hospitality": "Réception & hospitalité",
    "kitchen-culinary": "Cuisine & arts culinaires",
    pastry: "Pâtisserie",
    "restaurant-service": "Restaurant & service",
    maintenance: "Maintenance",
    hygiene: "Hygiène",
    management: "Management",
  },
  en: {
    "reception-hospitality": "Reception & hospitality",
    "kitchen-culinary": "Kitchen & culinary",
    pastry: "Pastry",
    "restaurant-service": "Restaurant & service",
    maintenance: "Maintenance",
    hygiene: "Hygiene",
    management: "Management",
  },
  ar: {
    "reception-hospitality": "الاستقبال والضيافة",
    "kitchen-culinary": "المطبخ والطهي",
    pastry: "الحلويات",
    "restaurant-service": "خدمة المطعم",
    maintenance: "الصيانة",
    hygiene: "النظافة",
    management: "الإدارة",
  },
};
