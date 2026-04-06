import type { Locale } from "@/i18n/translations";

export const SERVICE_SLUGS = ["training-programs", "coaching", "workshops", "skill-development"] as const;
export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}

/** Same order as `marketingImages.services` on the listing page */
export const serviceImageIndex: Record<ServiceSlug, number> = {
  "training-programs": 0,
  coaching: 1,
  workshops: 2,
  "skill-development": 3,
};

type Block = { type: "h2" | "p"; text: Record<Locale, string> };

type ServiceArticle = {
  slug: ServiceSlug;
  meta: { title: Record<Locale, string>; description: Record<Locale, string> };
  lead: Record<Locale, string>;
  blocks: Block[];
};

const servicesArticles: ServiceArticle[] = [
  {
    slug: "training-programs",
    meta: {
      title: {
        fr: "Programmes de formation professionnelle",
        en: "Professional training programs",
        ar: "برامج التكوين المهني",
      },
      description: {
        fr: "Parcours modulaires pour équipes et individus : contenu aligné sur vos SOP, vos standards marque et vos exigences terrain.",
        en: "Modular learning paths for teams and individuals—aligned to your SOPs, brand standards, and operational realities.",
        ar: "مسارات تكوينية مرنة للأفراد والفرق، متوافقة مع إجراءات العمل ومعايير العلامة التجارية.",
      },
    },
    lead: {
      fr: "Nous concevons des programmes de formation qui vont au-delà du support : vos équipes s’exercent sur des cas métier, des mises en situation et des critères de réussite clairs, pour que les compétences soient directement applicables en service.",
      en: "We design training that goes beyond slides: your teams practise real scenarios, role-plays, and clear success criteria so skills transfer straight to the floor.",
      ar: "نصمم تكويناً يتجاوز المحاضرات: تمارين عملية وحالات واقعية ومعايير نجاح واضحة حتى تنتقل المهارات مباشرة إلى الميدان.",
    },
    blocks: [
      {
        type: "h2",
        text: {
          fr: "Pour qui ?",
          en: "Who is it for?",
          ar: "لمن؟",
        },
      },
      {
        type: "p",
        text: {
          fr: "Hôtels, restaurants, groupes de la restauration, résidences et opérateurs en quête de montée en compétences ciblée—accueil, cuisine, service, hygiene, maintenance ou management opérationnel.",
          en: "Hotels, restaurants, multi-site F&B groups, and operators that need targeted upskilling across front office, kitchen, service, hygiene, maintenance, or operational leadership.",
          ar: "فنادق ومطاعم ومجموعات في قطاع الضيافة ترغب في رفع كفاءة فرق الاستقبال والمطبخ والخدمة والنظافة والصيانة أو الإدارة التشغيلية.",
        },
      },
      {
        type: "h2",
        text: {
          fr: "Comment nous travaillons",
          en: "How we work",
          ar: "كيف نعمل",
        },
      },
      {
        type: "p",
        text: {
          fr: "Analyse des besoins, objectifs par cohorte, modules courts ou blocs intensifs, évaluation formative et plan de consolidation. Chaque parcours peut être certifiant ou orienté performance terrain, selon vos priorités.",
          en: "Needs analysis, cohort-specific outcomes, short modules or intensive blocks, formative assessment, and follow-through. Paths can target certification goals or pure on-the-job performance—your call.",
          ar: "تحليل الاحتياجات، أهداف لكل مجموعة، وحدات قصيرة أو كتل مكثفة، تقييم مستمر وخطة تعزيز. يمكن أن يتجه المسار نحو الاعتماد أو نحو الأداء الميداني حسب أولوياتكم.",
        },
      },
      {
        type: "h2",
        text: {
          fr: "Prochaine étape",
          en: "Next step",
          ar: "الخطوة التالية",
        },
      },
      {
        type: "p",
        text: {
          fr: "Partagez vos effectifs, vos créneaux et vos enjeux métier : nous vous proposerons un calendrier et un contenu adaptés.",
          en: "Share headcount, timing constraints, and business goals—we’ll propose a schedule and curriculum that fit.",
          ar: "شاركوا أعداد المشاركين والمواعيد والأهداف التشغيلية لنقترح جدولاً ومحتوى ملائمين.",
        },
      },
    ],
  },
  {
    slug: "coaching",
    meta: {
      title: {
        fr: "Coaching managérial et d’équipe",
        en: "Executive and team coaching",
        ar: "توجيه إداري وللفِرق",
      },
      description: {
        fr: "Accompagnement individuel ou en petit groupe pour managers et talents : objectifs, accountability et feedback structuré.",
        en: "One-to-one or small-group coaching for managers and high potentials—goals, accountability, and structured feedback.",
        ar: "توجيه فردي أو لمجموعات صغيرة للمديرين والمواهب: أهداف واضحة ومتابعة وتغذية راجعة منظمة.",
      },
    },
    lead: {
      fr: "Le coaching vise des changements de comportement et de priorisation observables : nous clarifions les attentes, les indicateurs de progrès et les routines de management qui tiennent dans une semaine opérationnelle chargée.",
      en: "Coaching targets observable shifts in behaviour and focus: we clarify expectations, progress signals, and management routines that survive a busy operational week.",
      ar: "يهدف التوجيه إلى تغييرات سلوكية واضحة وتنظيم أولويات: نوضح التوقعات ومؤشرات التقدم وأساليب الإدارة التي تناسب ضغط العمل اليومي.",
    },
    blocks: [
      {
        type: "h2",
        text: {
          fr: "Formats",
          en: "Formats",
          ar: "الأشكال",
        },
      },
      {
        type: "p",
        text: {
          fr: "Sessions régulières (en présentiel ou hybride), sprint de 8 à 12 semaines, ou coaching ponctuel autour d’un enjeu critique (conflit, passage à l’échelle, préparation audit).",
          en: "Recurring sessions (on-site or hybrid), 8–12 week sprints, or focused engagements around a critical challenge—conflict, scaling up, or inspection readiness.",
          ar: "جلسات منتظمة (حضورية أو هجينة)، تسارع من 8 إلى 12 أسبوعاً، أو دعم مركّز حول قضية حرجة مثل الصراع أو التوسع أو الاستعداد للتدقيق.",
        },
      },
      {
        type: "h2",
        text: {
          fr: "Éthique et confidentialité",
          en: "Ethics and confidentiality",
          ar: "الأخلاقيات والسرية",
        },
      },
      {
        type: "p",
        text: {
          fr: "Cadre clair entre coaché, direction RH et opérations : pas de hors-sol, pas de « consulting déguisé »—des engagements actionnables et mesurables.",
          en: "Clear framing with the coachee, HR, and operations—no theatre, no disguised consulting—just actionable, measurable commitments.",
          ar: "إطار واضح مع المستفيد والموارد البشرية والعمليات: التزامات عملية وقابلة للقياس دون استشارة سطحية.",
        },
      },
      {
        type: "h2",
        text: {
          fr: "Échanger sur votre besoin",
          en: "Discuss your needs",
          ar: "ناقشوا احتياجكم",
        },
      },
      {
        type: "p",
        text: {
          fr: "Indiquez le profil des personnes accompagnées et vos objectifs à 90 jours : nous vous recommandons un rythme et des livrables réalistes.",
          en: "Tell us who will be coached and your 90-day goals—we’ll recommend a realistic cadence and deliverables.",
          ar: "حددوا الملفات الشخصية وأهدافكم لـ 90 يوماً لنوصي بإيقاع واقعي ونتائج ملموسة.",
        },
      },
    ],
  },
  {
    slug: "workshops",
    meta: {
      title: {
        fr: "Ateliers et séminaires",
        en: "Workshops and seminars",
        ar: "ورشات وندوات",
      },
      description: {
        fr: "Sessions courtes et ciblées : soft skills, service recovery, habitudes de leadership et culture qualité.",
        en: "Short, focused sessions on soft skills, service recovery, leadership habits, and quality culture.",
        ar: "جلسات قصيرة وموجهة: المهارات اللينة، استعادة خدمة الضيف، عادات القيادة وثقافة الجودة.",
      },
    },
    lead: {
      fr: "Les ateliers permettent de mobiliser rapidement une équipe sur un thème précis : nous mêlons apports courts, exercices en sous-groupes et restitution avec engagements collectifs visibles.",
      en: "Workshops mobilise a team around one topic fast: short inputs, breakout practice, and a visible team commitment on the way out.",
      ar: "الورشات تجمع الفريق حول موضوع واحد بسرعة: عروض قصيرة، تمارين جماعية، والتزام جماعي واضح في الختام.",
    },
    blocks: [
      {
        type: "h2",
        text: {
          fr: "Exemples de thèmes",
          en: "Sample themes",
          ar: "أمثلة مواضيع",
        },
      },
      {
        type: "p",
        text: {
          fr: "Excellence d’accueil, gestion des réclamations, communication assertive entre brigades, briefing avant service, préparation rush, animation d’équipe multiculturelle.",
          en: "Welcome excellence, complaint handling, assertive handovers between brigades, pre-service briefings, peak-hour readiness, leading multicultural teams.",
          ar: "جودة الاستقبال، التعامل مع الشكاوى، تواصل واضح بين الفرق، إحاطة ما قبل الخدمة، الجاهزية لساعات الذروة، قيادة فرق متعددة الثقافات.",
        },
      },
      {
        type: "h2",
        text: {
          fr: "Durée et logistique",
          en: "Duration and logistics",
          ar: "المدة واللوجستيك",
        },
      },
      {
        type: "p",
        text: {
          fr: "Demi-journée à deux jours selon la profondeur souhaitée ; matériel pédagogique fourni ; possible sur site client ou dans nos locaux partenaires à Casablanca.",
          en: "Half-day to two days depending on depth; materials included; on your premises or at partner facilities in Casablanca.",
          ar: "من نصف يوم إلى يومين حسب العمق؛ وسائل تقديم جاهزة؛ في موقعكم أو لدى شركائنا بالدار البيضاء.",
        },
      },
      {
        type: "h2",
        text: {
          fr: "Réserver un créneau",
          en: "Book a slot",
          ar: "احجزوا موعداً",
        },
      },
      {
        type: "p",
        text: {
          fr: "Indiquez la date souhaitée, le nombre de participants et un exemple de situation terrain : nous personnalisons le fil conducteur.",
          en: "Share your preferred date, headcount, and one real scenario you want the workshop to address—we’ll tailor the storyline.",
          ar: "زودونا بالتاريخ والعدد التقريبي للمشاركين ومثال واقعي تريدون معالجته لنخصص مسار الورشة.",
        },
      },
    ],
  },
  {
    slug: "skill-development",
    meta: {
      title: {
        fr: "Plans de développement des compétences",
        en: "Skill development plans",
        ar: "خطط تطوير المهارات",
      },
      description: {
        fr: "Référentiels de compétences, feuilles de route et indicateurs co-construits avec les RH et les opérations.",
        en: "Competency frameworks, learning roadmaps, and KPIs co-designed with HR and operations.",
        ar: "أطر كفاءات ومسارات تعلم ومؤشرات أداء مشتركة مع الموارد البشرية والعمليات.",
      },
    },
    lead: {
      fr: "Au-delà d’un catalogue de formations, un plan de compétences relie les rôles critiques aux parcours d’apprentissage, aux preuves de maîtrise et aux leviers RH (mobilité, reconnaissance, staffing).",
      en: "Beyond a training catalogue, a competency plan links critical roles to learning paths, evidence of mastery, and HR levers—mobility, recognition, and staffing.",
      ar: "يتجاوز الخطة مجرد كتالوج تكوين: تربط الأدوار الحرجة بمسارات التعلم وبدليل الإتقان وبآليات الموارد البشرية.",
    },
    blocks: [
      {
        type: "h2",
        text: {
          fr: "Livrables",
          en: "Deliverables",
          ar: "المخرجات",
        },
      },
      {
        type: "p",
        text: {
          fr: "Cartographie des métiers et compétences, matrices de progression, calendrier annuel, intégration aux entretiens annuels ou revues de talent.",
          en: "Role and skill mapping, progression matrices, annual calendar, hooks into performance or talent reviews.",
          ar: "خرائط المهارات والمسارات، مصفوفات التقدم، تقويم سنوي، ربط بتقييم الأداء أو مراجعات المواهب.",
        },
      },
      {
        type: "h2",
        text: {
          fr: "Pilotage",
          en: "Governance",
          ar: "الحوكمة",
        },
      },
      {
        type: "p",
        text: {
          fr: "Indicateurs simples : taux de couverture par population critique, temps moyen jusqu’à autonomie, scores avant/après, taux de complétion.",
          en: "Lightweight KPIs: coverage of critical populations, time-to-autonomy, before/after scoring, completion rates.",
          ar: "مؤشرات خفيفة: تغطية الفئات الحرجة، زمن الاستقلالية، مقارنة قبل/بعد، نسب الإكمال.",
        },
      },
      {
        type: "h2",
        text: {
          fr: "Démarrer un diagnostic",
          en: "Start a diagnosis",
          ar: "ابدأوا التشخيص",
        },
      },
      {
        type: "p",
        text: {
          fr: "Nous commençons souvent par un atelier cadrage avec RH et directions opérationnelles pour éviter les référentiels « papier » sans usage.",
          en: "We usually kick off with a framing workshop with HR and ops so frameworks don’t become shelfware.",
          ar: "نبدأ غالباً بورشة إطار مع الموارد البشرية والعمليات لضمان أن الإطار يُستخدم فعلياً.",
        },
      },
    ],
  },
];

const bySlug = Object.fromEntries(servicesArticles.map((a) => [a.slug, a])) as Record<ServiceSlug, ServiceArticle>;

export function getServiceArticle(slug: string): ServiceArticle | undefined {
  return isServiceSlug(slug) ? bySlug[slug] : undefined;
}

export function getAllServiceSlugs(): ServiceSlug[] {
  return [...SERVICE_SLUGS];
}

/** Short labels for JSON-LD breadcrumbs (URL segment → human label) */
export const serviceBreadcrumbSegment: Record<Locale, Record<ServiceSlug, string>> = {
  fr: {
    "training-programs": "Programmes de formation",
    coaching: "Coaching",
    workshops: "Ateliers & séminaires",
    "skill-development": "Plans de développement",
  },
  en: {
    "training-programs": "Training programs",
    coaching: "Coaching",
    workshops: "Workshops & seminars",
    "skill-development": "Skill development",
  },
  ar: {
    "training-programs": "برامج التكوين",
    coaching: "التوجيه",
    workshops: "ورشات وندوات",
    "skill-development": "خطط التطوير",
  },
};
