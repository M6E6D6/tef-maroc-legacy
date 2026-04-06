import type { Locale } from "@/i18n/translations";

export const BLOG_SLUGS = ["guest-experience-excellence", "food-safety-culture"] as const;
export type BlogSlug = (typeof BLOG_SLUGS)[number];

export function isBlogSlug(value: string): value is BlogSlug {
  return (BLOG_SLUGS as readonly string[]).includes(value);
}

export function getAllBlogSlugs(): BlogSlug[] {
  return [...BLOG_SLUGS];
}

/** Same order as `marketingImages.blog` */
export const blogImageIndex: Record<BlogSlug, number> = {
  "guest-experience-excellence": 0,
  "food-safety-culture": 1,
};

type Block = { type: "h2" | "p"; text: Record<Locale, string> };

type BlogArticle = {
  slug: BlogSlug;
  meta: { title: Record<Locale, string>; description: Record<Locale, string> };
  /** Short line for listing cards */
  excerpt: Record<Locale, string>;
  lead: Record<Locale, string>;
  blocks: Block[];
  /** ISO date for JSON-LD */
  datePublished: string;
};

const articles: BlogArticle[] = [
  {
    slug: "guest-experience-excellence",
    datePublished: "2026-01-15",
    meta: {
      title: {
        fr: "Excellence d’accueil : habitudes qui font la différence",
        en: "Guest experience excellence: habits that make the difference",
        ar: "التميز في استقبال الضيوف: عادات تصنع الفارق",
      },
      description: {
        fr: "Du premier contact à l’au revoir : routines simples pour des équipes alignées sur votre promesse marque.",
        en: "From first contact to farewell: simple routines so teams stay aligned with your brand promise.",
        ar: "من أول تواصل إلى الوداع: عادات بسيطة لفرق متوافقة مع وعد علامتكم.",
      },
    },
    excerpt: {
      fr: "Rituels d’accueil, langage et cohérence entre réception, conciergerie et housekeeping.",
      en: "Welcome rituals, language, and consistency across front desk, concierge, and housekeeping.",
      ar: "طقوس الاستقبال واللغة والتناسق بين الاستقبال والكونسييرج وخدمة الغرف.",
    },
    lead: {
      fr: "L’expérience client ne se décrète pas : elle se vit à chaque point de contact. Voici comment structurer des habitudes observables, mesurables et reproductibles sur le terrain.",
      en: "Guest experience isn’t declared in a slide deck—it’s lived at every touchpoint. Here’s how to build observable, measurable habits that hold up on the floor.",
      ar: "تجربة الضيف لا تُعلن في عرض تقديمي فقط؛ تُعاش في كل لقاء. إليكم كيف تبنون عادات واضحة وقابلة للقياس في الميدان.",
    },
    blocks: [
      {
        type: "h2",
        text: { fr: "Alignement sur la promesse marque", en: "Align on the brand promise", ar: "التوافق مع وعد العلامة" },
      },
      {
        type: "p",
        text: {
          fr: "Les standards d’accueil doivent être traduits en comportements : ton de voix, posture, délais de réponse et coordination entre services pour éviter les ruptures d’expérience.",
          en: "Welcome standards must translate into behaviours: tone of voice, posture, response times, and handoffs between departments to avoid experience gaps.",
          ar: "يجب أن تتحول معايير الاستقبال إلى سلوكيات: نبرة الصوت، الموقف، زمن الاستجابة، والتنسيق بين الأقسام لتفادي انقطاع التجربة.",
        },
      },
      {
        type: "h2",
        text: { fr: "Mesurer sans bureaucratiser", en: "Measure without bureaucracy", ar: "القياس دون بيروقراطية" },
      },
      {
        type: "p",
        text: {
          fr: "Une grille courte d’observation en situation (mystery guest interne ou revue d’équipe) suffit pour détecter les écarts et célébrer les bons réflexes.",
          en: "A short in-situation checklist—internal mystery guest or team huddle review—is enough to spot gaps and reinforce good habits.",
          ar: "قائمة مراقبة قصيرة في الموقع (زائر خفي داخلي أو مراجعة جماعية) تكفي لرصد الفجوات وتعزيز السلوكيات الجيدة.",
        },
      },
      {
        type: "h2",
        text: { fr: "Pour aller plus loin", en: "Next steps", ar: "الخطوة التالية" },
      },
      {
        type: "p",
        text: {
          fr: "Nous pouvons co-construire vos scénarios d’accueil et vos critères de réussite avec vos équipes terrain.",
          en: "We can co-design your welcome scenarios and success criteria with your front-line teams.",
          ar: "يمكننا تصميم سيناريوهات الاستقبال ومعايير النجاح مع فرقكم الميدانية.",
        },
      },
    ],
  },
  {
    slug: "food-safety-culture",
    datePublished: "2026-02-01",
    meta: {
      title: {
        fr: "Culture HACCP en cuisine : au-delà de la checklist",
        en: "HACCP culture in the kitchen: beyond the checklist",
        ar: "ثقافة HACCP في المطبخ: ما بعد القائمة",
      },
      description: {
        fr: "Engager les brigades sur la traçabilité, les températures et les gestes barrière au quotidien.",
        en: "Engage brigades on traceability, temperatures, and daily barrier gestures—not just paperwork.",
        ar: "إشراك الفرق في التتبع ودرجات الحرارة والإجراءات الوقائية يومياً وليس الورق فقط.",
      },
    },
    excerpt: {
      fr: "Du référentiel à la ligne : rendre la sécurité alimentaire visible et prioritaire.",
      en: "From binder to line: making food safety visible and priority on the shift.",
      ar: "من الملف إلى الخط: جعل سلامة الغذاء واضحة وذات أولوية في الوردية.",
    },
    lead: {
      fr: "Un dossier HACCP impeccable ne suffit pas si les gestes ne suivent pas en production. Voici comment ancrer une culture où chaque membre de brigade se sent responsable des points critiques.",
      en: "A perfect HACCP binder isn’t enough if behaviours don’t follow on the pass. Here’s how to embed a culture where every cook owns the critical points.",
      ar: "ملف HACCP مثالي لا يكفي إذا لم تترجم السلوكيات على خط الإنتاج. إليكم كيف ترسخون ثقافة يتحمل فيها كل طباخ نقاط الحرج.",
    },
    blocks: [
      {
        type: "h2",
        text: { fr: "Rendre les CCP visibles", en: "Make CCPs visible", ar: "إبراز نقاط الرقابة الحرجة" },
      },
      {
        type: "p",
        text: {
          fr: "Repères colorés, photos de référence au poste et rappels courts avant le coup de feu réduisent les oublis sous pression.",
          en: "Colour cues, reference photos at the station, and short pre-rush briefings reduce slips under pressure.",
          ar: "علامات ملونة وصور مرجعية عند المحطة وتذكيرات قصيرة قبل الذروة تقلل النسيان تحت الضغط.",
        },
      },
      {
        type: "h2",
        text: { fr: "Responsabiliser sans culpabiliser", en: "Accountability without blame", ar: "المساءلة دون إدانة" },
      },
      {
        type: "p",
        text: {
          fr: "Les écarts se traitent comme des signaux de processus : analyse rapide, correction et partage d’apprentissage en équipe.",
          en: "Treat deviations as process signals: quick analysis, fix, and shared learning—no blame theatre.",
          ar: "التعامل مع الانحرافات كإشارات للإجراءات: تحليل سريع وتصحيح وتعلم جماعي دون اتهام.",
        },
      },
      {
        type: "h2",
        text: { fr: "Accompagnement", en: "Support", ar: "المرافقة" },
      },
      {
        type: "p",
        text: {
          fr: "Nous pouvons animer des ateliers terrain et des audits participatifs adaptés à votre outil de production.",
          en: "We can run on-site workshops and participatory audits tailored to your production setup.",
          ar: "يمكننا تنشيط ورش ميدانية وتدقيقات تشاركية ملائمة لمنشأة الإنتاج لديكم.",
        },
      },
    ],
  },
];

const bySlug = Object.fromEntries(articles.map((a) => [a.slug, a])) as Record<BlogSlug, BlogArticle>;

export function getBlogPost(slug: string): BlogArticle | undefined {
  return isBlogSlug(slug) ? bySlug[slug] : undefined;
}

export const blogBreadcrumbSegment: Record<Locale, Record<BlogSlug, string>> = {
  fr: {
    "guest-experience-excellence": "Excellence d’accueil",
    "food-safety-culture": "Culture HACCP",
  },
  en: {
    "guest-experience-excellence": "Guest experience excellence",
    "food-safety-culture": "Food safety culture",
  },
  ar: {
    "guest-experience-excellence": "التميز في الاستقبال",
    "food-safety-culture": "ثقافة سلامة الغذاء",
  },
};
