export type Locale = "fr" | "en" | "ar";

export const defaultLocale: Locale = "fr";

export const locales: Locale[] = ["fr", "en", "ar"];

type Dictionary = {
  languageLabel: string;
  languages: Record<Locale, string>;
  nav: {
    home: string;
    about: string;
    trainings: string;
    services: string;
    blog: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    skipToMain: string;
    primaryNavigation: string;
    mobileNavigation: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    contact: string;
    rights: string;
    tagline: string;
    columnAbout: string;
    columnServices: string;
    columnInfo: string;
    columnContact: string;
  };
  common: {
    objectives: string;
    viewDetails: string;
  };
  mediaAlt: {
    hero: string;
    aboutPreview: string;
    aboutFacility: string;
    teamCollaboration: string;
    teamKitchen: string;
    teamWorkshop: string;
    serviceTraining: string;
    serviceCoaching: string;
    serviceWorkshop: string;
    servicePlanning: string;
    blogGuestExcellence: string;
    blogFoodSafety: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroText: string;
    heroPrimaryCta: string;
    heroSecondaryCta: string;
    heroGalleryPrevAria: string;
    heroGalleryNextAria: string;
    featureSolidTitle: string;
    featureRelationsTitle: string;
    featureInnovationTitle: string;
    aboutEyebrow: string;
    aboutTitle: string;
    aboutSubtitle: string;
    aboutText: string;
    aboutLink: string;
    categoriesEyebrow: string;
    categoriesTitle: string;
    categoriesSubtitle: string;
    whyEyebrow: string;
    whyTitle: string;
    whySubtitle: string;
    testimonialsEyebrow: string;
    testimonialsTitle: string;
    testimonialsSubtitle: string;
    infoBarClockLabel: string;
    infoBarClockValue: string;
    partnersTitle: string;
    servicesSplitCta: string;
  };
  contact: {
    title: string;
    intro: string;
    sendMessage: string;
    requiredFields: string;
    details: string;
    address: string;
    phone: string;
    email: string;
    location: string;
    mapText: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
    formAriaLabel: string;
    formFirstName: string;
    formLastName: string;
    formSubject: string;
    cardKicker: string;
    cardHeading: string;
  };
  aboutPage: {
    title: string;
    intro: string;
    mission: string;
    missionText: string;
    vision: string;
    visionText: string;
    howWeWork: string;
    methodology: string;
    methodologySubtitle: string;
    people: string;
    team: string;
    teamSubtitle: string;
  };
  servicesPage: {
    title: string;
    intro: string;
    eyebrow: string;
    howHelp: string;
    subtitle: string;
  };
  servicesDetailPage: {
    backToServices: string;
    ctaIntro: string;
    ctaContact: string;
  };
  trainingsPage: {
    title: string;
    intro: string;
    eyebrow: string;
    categoriesObjectives: string;
    subtitle: string;
  };
  trainingsDetailPage: {
    backToTrainings: string;
    ctaIntro: string;
    ctaContact: string;
  };
  blogPage: {
    title: string;
    intro: string;
    eyebrow: string;
    articlesTitle: string;
    subtitle: string;
  };
  blogDetailPage: {
    backToBlog: string;
    ctaIntro: string;
    ctaContact: string;
  };
  floating: {
    consultantLabel: string;
    whatsappAria: string;
    backToTopAria: string;
  };
};

export const translations: Record<Locale, Dictionary> = {
  fr: {
    languageLabel: "Langue",
    languages: { fr: "Français", en: "English", ar: "العربية" },
    nav: {
      home: "Accueil",
      about: "À propos",
      trainings: "Formations",
      services: "Services",
      blog: "Blog",
      contact: "Contact",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      skipToMain: "Aller au contenu principal",
      primaryNavigation: "Navigation principale",
      mobileNavigation: "Navigation mobile",
    },
    footer: {
      description:
        "Académie premium spécialisée en hôtellerie, restauration et service de luxe — formations professionnelles au Maroc.",
      quickLinks: "Liens rapides",
      contact: "Contact",
      rights: "Tous droits réservés.",
      tagline: "Hôtellerie · Restauration · Service de luxe",
      columnAbout: "Qui sommes-nous",
      columnServices: "Nos services",
      columnInfo: "Informations",
      columnContact: "Contact",
    },
    common: { objectives: "Objectifs", viewDetails: "Voir les détails" },
    mediaAlt: {
      hero: "Salle de cours et formation professionnelle en groupe",
      aboutPreview: "Équipe professionnelle en réunion collaborative",
      aboutFacility: "Espace lumineux pour la formation et les ateliers en entreprise",
      teamCollaboration: "Animation de formation et collaboration en entreprise",
      teamKitchen: "Cuisine professionnelle et brigade en service",
      teamWorkshop: "Atelier d'équipe et session de travail encadrée",
      serviceTraining: "Apprenants en formation professionnelle en salle",
      serviceCoaching: "Échange et coaching professionnel en face à face",
      serviceWorkshop: "Séminaire et présentation en petit groupe",
      servicePlanning: "Analyse de documents et planification stratégique",
      blogGuestExcellence: "Hall d’hôtel et accueil client professionnel",
      blogFoodSafety: "Cuisine professionnelle et contrôle des denrées",
    },
    home: {
      heroEyebrow: "Excellence & hôtellerie de luxe",
      heroTitle: "L’expertise terrain",
      heroText:
        "Des formations professionnelles conçues pour améliorer la performance de vos équipes.",
      heroPrimaryCta: "Consulter le catalogue",
      heroSecondaryCta: "Nous contacter",
      heroGalleryPrevAria: "Image précédente",
      heroGalleryNextAria: "Image suivante",
      featureSolidTitle: "Compétences solides",
      featureRelationsTitle: "Relations durables",
      featureInnovationTitle: "Innovation continue",
      aboutEyebrow: "À propos",
      aboutTitle: "Conçu pour la performance terrain",
      aboutSubtitle:
        "Nous combinons expertise métier et pédagogie structurée pour des compétences applicables immédiatement.",
      aboutText:
        "De la réception à la cuisine et au management, nos parcours s'alignent sur les standards marocains et internationaux.",
      aboutLink: "En savoir plus",
      categoriesEyebrow: "Catalogue",
      categoriesTitle: "Catégories de formation",
      categoriesSubtitle:
        "Explorez des parcours en hôtellerie, opérations et leadership avec des compétences claires.",
      whyEyebrow: "Pourquoi nous",
      whyTitle: "Pourquoi choisir Tamuda Hospitality Academy",
      whySubtitle: "Un partenaire orienté résultats, pas seulement certificats.",
      testimonialsEyebrow: "Témoignages",
      testimonialsTitle: "Ce que disent nos partenaires",
      testimonialsSubtitle: "La confiance d'équipes exigeantes sur l'expérience client.",
      infoBarClockLabel: "Horaires",
      infoBarClockValue: "Sur rendez-vous",
      partnersTitle: "Nos références",
      servicesSplitCta: "Découvrir tous les services",
    },
    contact: {
      title: "Contact",
      intro: "Parlez-nous de vos besoins et objectifs, nous proposerons un format adapté.",
      sendMessage: "Envoyer un message",
      requiredFields: "Les champs avec une astérisque sont obligatoires.",
      details: "Coordonnées",
      address: "Adresse",
      phone: "Téléphone",
      email: "Email",
      location: "Localisation",
      mapText: "Carte de {city}, {country}.",
      formName: "Nom",
      formEmail: "Email",
      formMessage: "Message",
      formSubmit: "Envoyer le message",
      formSuccess: "Merci, votre message a été enregistré. Nous vous recontacterons bientôt.",
      formAriaLabel: "Formulaire de contact",
      formFirstName: "Prénom",
      formLastName: "Nom",
      formSubject: "Sujet",
      cardKicker: "Votre contact",
      cardHeading: "Contactez-nous",
    },
    aboutPage: {
      title: "À propos de",
      intro:
        "Nous aidons les professionnels à améliorer leurs performances avec des programmes structurés et mesurables.",
      mission: "Mission",
      missionText:
        "Renforcer les compétences via des formations pratiques, du coaching et des parcours alignés aux objectifs.",
      vision: "Vision",
      visionText:
        "Devenir un centre de formation de référence au Maroc pour la qualité, l'intégrité et l'impact.",
      howWeWork: "Notre méthode",
      methodology: "Méthodologie de formation",
      methodologySubtitle: "Un cycle simple, du diagnostic aux résultats durables.",
      people: "Équipe",
      team: "Notre équipe",
      teamSubtitle: "Des professionnels expérimentés orientés réussite des apprenants.",
    },
    servicesPage: {
      title: "Services",
      intro: "Des programmes structurés aux ateliers agiles, nous accompagnons vos équipes.",
      eyebrow: "Notre offre",
      howHelp: "Comment nous aidons",
      subtitle: "Combinez les services selon vos objectifs et votre budget.",
    },
    servicesDetailPage: {
      backToServices: "Retour aux services",
      ctaIntro: "Discutons de votre contexte pour proposer la formule adaptée.",
      ctaContact: "Nous contacter",
    },
    trainingsPage: {
      title: "Catalogue des formations",
      intro: "Découvrez nos catégories de formation et adaptez les parcours à votre contexte.",
      eyebrow: "Programmes",
      categoriesObjectives: "Catégories et objectifs",
      subtitle: "Choisissez un parcours ou contactez-nous pour un plan sur mesure.",
    },
    trainingsDetailPage: {
      backToTrainings: "Retour au catalogue",
      ctaIntro: "Parlons de votre niveau actuel et du calendrier souhaité pour bâtir un parcours adapté.",
      ctaContact: "Nous contacter",
    },
    blogPage: {
      title: "Blog",
      intro:
        "Articles et retours d’expérience sur l’excellence opérationnelle en hôtellerie, restauration et sécurité alimentaire.",
      eyebrow: "Ressources",
      articlesTitle: "Articles récents",
      subtitle: "Conseils pratiques pour les équipes terrain.",
    },
    blogDetailPage: {
      backToBlog: "Retour au blog",
      ctaIntro: "Un projet de formation ou d’accompagnement ? Échangeons sur vos objectifs.",
      ctaContact: "Nous contacter",
    },
    floating: {
      consultantLabel: "Votre conseiller",
      whatsappAria: "Contacter via WhatsApp",
      backToTopAria: "Retour en haut de la page",
    },
  },
  en: {
    languageLabel: "Language",
    languages: { fr: "Français", en: "English", ar: "العربية" },
    nav: {
      home: "Home",
      about: "About Us",
      trainings: "Trainings",
      services: "Services",
      blog: "Blog",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      skipToMain: "Skip to main content",
      primaryNavigation: "Primary navigation",
      mobileNavigation: "Mobile navigation",
    },
    footer: {
      description:
        "Premium academy for hospitality, restaurant operations, and luxury service—professional training across Morocco.",
      quickLinks: "Quick links",
      contact: "Contact",
      rights: "All rights reserved.",
      tagline: "Hospitality · Restaurants · Luxury service",
      columnAbout: "About Us",
      columnServices: "Our services",
      columnInfo: "Information",
      columnContact: "Contact",
    },
    common: { objectives: "Objectives", viewDetails: "View details" },
    mediaAlt: {
      hero: "Classroom-based professional training session",
      aboutPreview: "Professionals collaborating in a working session",
      aboutFacility: "Bright workspace for corporate training and workshops",
      teamCollaboration: "Facilitated training and team collaboration",
      teamKitchen: "Professional kitchen and culinary brigade in action",
      teamWorkshop: "Team workshop and facilitated working session",
      serviceTraining: "Adult learners in a professional training setting",
      serviceCoaching: "Professional coaching conversation",
      serviceWorkshop: "Seminar room and group presentation",
      servicePlanning: "Planning session reviewing documents and strategy",
      blogGuestExcellence: "Hotel lobby and professional guest welcome",
      blogFoodSafety: "Professional kitchen and food safety in action",
    },
    home: {
      heroEyebrow: "Premium hospitality academy",
      heroTitle: "Field expertise",
      heroText: "Professional training designed to improve your teams’ performance.",
      heroPrimaryCta: "View the catalogue",
      heroSecondaryCta: "Contact us",
      heroGalleryPrevAria: "Previous slide",
      heroGalleryNextAria: "Next slide",
      featureSolidTitle: "Solid skills",
      featureRelationsTitle: "Lasting relationships",
      featureInnovationTitle: "Continuous innovation",
      aboutEyebrow: "About us",
      aboutTitle: "Built for real-world performance",
      aboutSubtitle:
        "We combine industry expertise with structured pedagogy so teams apply skills from day one.",
      aboutText:
        "From front office to kitchen and management, our programs are aligned to Moroccan and international standards.",
      aboutLink: "Learn more about us",
      categoriesEyebrow: "Catalogue",
      categoriesTitle: "Training categories",
      categoriesSubtitle:
        "Explore pathways across hospitality, operations, and leadership with clear competencies.",
      whyEyebrow: "Why us",
      whyTitle: "Why choose Tamuda Hospitality Academy",
      whySubtitle: "A partner focused on outcomes, not just certificates.",
      testimonialsEyebrow: "Testimonials",
      testimonialsTitle: "What partners say",
      testimonialsSubtitle: "Trusted by teams who care about guest experience and people development.",
      infoBarClockLabel: "Hours",
      infoBarClockValue: "By appointment",
      partnersTitle: "Our references",
      servicesSplitCta: "See all services",
    },
    contact: {
      title: "Contact",
      intro: "Tell us about your teams and objectives, and we will propose a suitable format.",
      sendMessage: "Send a message",
      requiredFields: "Fields marked with an asterisk are required.",
      details: "Contact details",
      address: "Address",
      phone: "Phone",
      email: "Email",
      location: "Location",
      mapText: "Map showing {city}, {country}.",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSubmit: "Send message",
      formSuccess: "Thank you, your message has been recorded. We will get back to you shortly.",
      formAriaLabel: "Contact form",
      formFirstName: "First name",
      formLastName: "Last name",
      formSubject: "Subject",
      cardKicker: "Your consultant",
      cardHeading: "Contact Us",
    },
    aboutPage: {
      title: "About",
      intro:
        "We help professionals improve skills and performance through structured and measurable programs.",
      mission: "Mission",
      missionText:
        "Strengthen skills through practical training, coaching, and development paths aligned to goals.",
      vision: "Vision",
      visionText:
        "Become a leading training center in Morocco recognized for quality, integrity, and outcomes.",
      howWeWork: "How we work",
      methodology: "Training methodology",
      methodologySubtitle: "A simple, proven loop from diagnosis to sustainable results.",
      people: "People",
      team: "Our team",
      teamSubtitle: "Experienced professionals united around learner success.",
    },
    servicesPage: {
      title: "Services",
      intro: "From structured programs to agile workshops, we support organizations investing in people.",
      eyebrow: "What we offer",
      howHelp: "How we can help",
      subtitle: "Combine services to match your goals and budget.",
    },
    servicesDetailPage: {
      backToServices: "Back to services",
      ctaIntro: "Tell us about your context so we can propose the right format.",
      ctaContact: "Contact us",
    },
    trainingsPage: {
      title: "Training catalogue",
      intro: "Explore our categories and tailor programs to your operational context.",
      eyebrow: "Programs",
      categoriesObjectives: "Categories & objectives",
      subtitle: "Select a track or contact us for a custom learning plan.",
    },
    trainingsDetailPage: {
      backToTrainings: "Back to catalogue",
      ctaIntro: "Share your current level and preferred timing so we can shape the right learning path.",
      ctaContact: "Contact us",
    },
    blogPage: {
      title: "Blog",
      intro:
        "Insights on operational excellence in hospitality, guest experience, and food safety culture.",
      eyebrow: "Resources",
      articlesTitle: "Latest articles",
      subtitle: "Practical ideas for front-line teams.",
    },
    blogDetailPage: {
      backToBlog: "Back to blog",
      ctaIntro: "Planning training or coaching? Tell us about your goals.",
      ctaContact: "Contact us",
    },
    floating: {
      consultantLabel: "Your consultant",
      whatsappAria: "Contact us on WhatsApp",
      backToTopAria: "Back to top",
    },
  },
  ar: {
    languageLabel: "اللغة",
    languages: { fr: "Français", en: "English", ar: "العربية" },
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      trainings: "التكوينات",
      services: "الخدمات",
      blog: "المدونة",
      contact: "اتصل بنا",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      skipToMain: "الانتقال إلى المحتوى الرئيسي",
      primaryNavigation: "التنقل الرئيسي",
      mobileNavigation: "تنقل الهاتف",
    },
    footer: {
      description:
        "أكاديمية راقية في الفندقة والمطاعم وخدمة الضيافة الفاخرة — تكوين مهني في المغرب.",
      quickLinks: "روابط سريعة",
      contact: "اتصال",
      rights: "جميع الحقوق محفوظة.",
      tagline: "الفندقة · المطاعم · الخدمة الفاخرة",
      columnAbout: "من نحن",
      columnServices: "خدماتنا",
      columnInfo: "معلومات",
      columnContact: "اتصل بنا",
    },
    common: { objectives: "الأهداف", viewDetails: "عرض التفاصيل" },
    mediaAlt: {
      hero: "قاعة تدريس وتكوين مهني جماعي",
      aboutPreview: "فريق مهني في جلسة عمل تعاونية",
      aboutFacility: "فضاء حديث للتكوين وورش المؤسسات",
      teamCollaboration: "تنسيق تكوين وتفاعل بين المشاركين",
      teamKitchen: "مطبخ مهني وفريق عمل أثناء الخدمة",
      teamWorkshop: "ورشة عمل جماعية بإشراف ميسّر",
      serviceTraining: "متدربون في إطار تكوين مهني",
      serviceCoaching: "حوار وتوجيه مهني مباشر",
      serviceWorkshop: "قاعة ندوة وعرض في مجموعة صغيرة",
      servicePlanning: "تخطيط ومراجعات استراتيجية على الوثائق",
      blogGuestExcellence: "فندق واستقبال ضيوف في الضيافة",
      blogFoodSafety: "مطبخ مهني وسلامة غذائية",
    },
    home: {
      heroEyebrow: "أكاديمية ضيافة راقية",
      heroTitle: "الخبرة الميدانية",
      heroText: "تكوينات مهنية مصمّمة لرفع أداء فرقكم.",
      heroPrimaryCta: "استعراض الكتالوج",
      heroSecondaryCta: "تواصل معنا",
      heroGalleryPrevAria: "الشريحة السابقة",
      heroGalleryNextAria: "الشريحة التالية",
      featureSolidTitle: "كفاءات راسخة",
      featureRelationsTitle: "علاقات دائمة",
      featureInnovationTitle: "ابتكار مستمر",
      aboutEyebrow: "من نحن",
      aboutTitle: "مصمم للأداء العملي",
      aboutSubtitle: "نمزج الخبرة الميدانية مع منهجية تعليمية منظمة لتطبيق المهارات مباشرة.",
      aboutText: "من الاستقبال إلى المطبخ والإدارة، برامجنا متوافقة مع المعايير المغربية والدولية.",
      aboutLink: "اعرف المزيد",
      categoriesEyebrow: "الكتالوج",
      categoriesTitle: "فئات التكوين",
      categoriesSubtitle: "مسارات في الضيافة والعمليات والقيادة بكفاءات واضحة.",
      whyEyebrow: "لماذا نحن",
      whyTitle: "لماذا تختار أكاديمية تامودا للضيافة",
      whySubtitle: "شريك يركز على النتائج وليس الشهادات فقط.",
      testimonialsEyebrow: "آراء العملاء",
      testimonialsTitle: "ماذا يقول شركاؤنا",
      testimonialsSubtitle: "موثوق من فرق تهتم بتجربة الضيف وتطوير الموارد البشرية.",
      infoBarClockLabel: "الأوقات",
      infoBarClockValue: "حسب الموعد",
      partnersTitle: "مراجعنا",
      servicesSplitCta: "اكتشف كل الخدمات",
    },
    contact: {
      title: "اتصل بنا",
      intro: "أخبرنا باحتياجاتك وأهدافك وسنقترح صيغة مناسبة.",
      sendMessage: "إرسال رسالة",
      requiredFields: "الحقول المميزة بنجمة مطلوبة.",
      details: "معلومات الاتصال",
      address: "العنوان",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      location: "الموقع",
      mapText: "خريطة {city}، {country}.",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formMessage: "الرسالة",
      formSubmit: "إرسال الرسالة",
      formSuccess: "شكرا، تم تسجيل رسالتك. سنعاود الاتصال بك قريبا.",
      formAriaLabel: "نموذج الاتصال",
      formFirstName: "الاسم الأول",
      formLastName: "اسم العائلة",
      formSubject: "الموضوع",
      cardKicker: "مستشاركم",
      cardHeading: "تواصل معنا",
    },
    aboutPage: {
      title: "حول",
      intro: "نساعد المهنيين على تطوير المهارات والأداء عبر برامج منظمة وقابلة للقياس.",
      mission: "المهمة",
      missionText: "تعزيز المهارات عبر تكوين عملي وتوجيه ومسارات تطوير متوافقة مع الأهداف.",
      vision: "الرؤية",
      visionText: "أن نصبح مركزا رائدا للتكوين في المغرب معروفا بالجودة والنزاهة والنتائج.",
      howWeWork: "كيف نعمل",
      methodology: "منهجية التكوين",
      methodologySubtitle: "دورة بسيطة من التشخيص إلى النتائج المستدامة.",
      people: "الفريق",
      team: "فريقنا",
      teamSubtitle: "مهنيون ذوو خبرة ملتزمون بنجاح المتعلمين.",
    },
    servicesPage: {
      title: "الخدمات",
      intro: "من البرامج المنظمة إلى الورشات المرنة، نواكب المؤسسات التي تستثمر في الإنسان.",
      eyebrow: "ما نقدمه",
      howHelp: "كيف نساعدك",
      subtitle: "اجمع بين الخدمات حسب أهدافك وميزانيتك.",
    },
    servicesDetailPage: {
      backToServices: "العودة إلى الخدمات",
      ctaIntro: "شاركونا سياقكم لنقترح الصيغة المناسبة.",
      ctaContact: "اتصل بنا",
    },
    trainingsPage: {
      title: "كتالوج التكوينات",
      intro: "اكتشف فئات التكوين وخصص المسارات وفق سياقك المهني.",
      eyebrow: "البرامج",
      categoriesObjectives: "الفئات والأهداف",
      subtitle: "اختر مسارا أو تواصل معنا لخطة تعلم مخصصة.",
    },
    trainingsDetailPage: {
      backToTrainings: "العودة إلى الكتالوج",
      ctaIntro: "شاركونا مستواكم الحالي والتوقيت المناسب لنصمم مساراً ملائماً.",
      ctaContact: "اتصل بنا",
    },
    blogPage: {
      title: "المدونة",
      intro: "مقالات حول التميز التشغيلي في الضيافة وتجربة الضيف وثقافة سلامة الغذاء.",
      eyebrow: "موارد",
      articlesTitle: "مقالات",
      subtitle: "أفكار عملية للفرق الميدانية.",
    },
    blogDetailPage: {
      backToBlog: "العودة إلى المدونة",
      ctaIntro: "مشروع تكوين أو مرافقة؟ شاركونا أهدافكم.",
      ctaContact: "اتصل بنا",
    },
    floating: {
      consultantLabel: "مستشاركم",
      whatsappAria: "التواصل عبر واتساب",
      backToTopAria: "العودة لأعلى الصفحة",
    },
  },
};
