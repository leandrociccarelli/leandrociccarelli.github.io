import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en' | 'es' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getSkillItems: (category: string) => string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Navigation
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.curriculum': 'Currículo',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.title': 'Product Design\nLeader &\nEstrategista de UX',
    'hero.description': 'Especialista em transformar insights de pesquisa em soluções digitais inovadoras. Atuo criando experiências que conectam objetivos de negócio às necessidades reais dos usuários.',
    'hero.cta': 'Ver projetos',
    
    // About Section
    'about.section': 'Portfolio',
    'about.title': 'Leandro\nCiccarelli',
    'about.description1': 'Como Product Design Leader com mais de 15 anos de experiência, minha paixão é construir ecossistemas de produtos digitais onde a excelência da experiência do usuário e os objetivos de negócio caminham juntos.',
    'about.description2': 'Especializado em estratégia de produto e na liderança de equipes multidisciplinares, vejo meu papel como o de um facilitador: alguém que cria processos claros e uma cultura de colaboração para que os designers possam fazer seu melhor trabalho. Minha abordagem, que une metodologias ágeis, design thinking e uma profunda análise de dados, visa transformar desafios complexos em soluções intuitivas que geram impacto real e mensurável.',
    'about.photo.caption': 'Leandro Ciccarelli',
    
    // Skills
    'about.skills.section': 'Competências',
    'about.skills.title': 'Experiência & Metodologias',
    'about.skills.research': 'Pesquisa & Análise',
    'about.skills.strategy': 'Estratégia & Produto',
    'about.skills.design': 'Design & Prototipagem',
    'about.skills.tools': 'Ferramentas & Tecnologia',
    
    // Research & Publications
    'about.research.section': 'Pesquisa',
    'about.research.title': 'Publicações & Trabalhos Acadêmicos',
    'about.research.description': 'Minha trajetória acadêmica e profissional inclui pesquisas em Design de Interação, UX Strategy e metodologias de co-criação, resultando em publicações e apresentações em conferências nacionais e internacionais.',
    
    // Publications
    'about.publication.book.type': 'Livro',
    'about.publication.book.title': 'Design de Interação: Metodologias e Práticas',
    'about.publication.book.description': 'Obra que explora as principais metodologias de design centrado no usuário e suas aplicações em projetos digitais.',
    
    'about.publication.article.type': 'Artigo Científico',
    'about.publication.article.title': 'UX Strategy em Ambientes Ágeis: Um Estudo de Caso',
    'about.publication.article.description': 'Pesquisa sobre a integração de práticas de UX em metodologias ágeis de desenvolvimento de software.',
    
    'about.publication.workshop.type': 'Workshop',
    'about.publication.workshop.title': 'Co-criação em Design Thinking: Facilitação e Técnicas',
    'about.publication.workshop.description': 'Workshop prático sobre técnicas de facilitação e co-criação para equipes multidisciplinares.',
    
    'about.lattes.button': 'Currículo Lattes',
    
    // Projects
    'projects.section': 'Projetos',
    'projects.title': 'Cases de estudo\nem destaque',
    'projects.description.main': 'Explore meus principais casos de estudo de design. Você pode baixar todos os cases de uma vez ou selecionar individualmente cada projeto para análise detalhada.',
    'projects.description.sub': 'Cada case inclui metodologias aplicadas, resultados obtidos e aprendizados estratégicos.',
    'projects.download.all': 'Baixar todos os cases',
    'projects.download.individual': 'Baixar case',
    
    // Case Studies
    'projects.case1.title': 'Comunica.In',
    'projects.case1.description': 'Redesign completo da plataforma de comunicação interna, resultando em 40% de aumento no engajamento dos usuários.',
    
    'projects.case2.title': 'Vertown',
    'projects.case2.description': 'Estratégia de UX para marketplace B2B, aumentando conversões em 65% através de otimização da jornada do usuário.',
    
    'projects.case3.title': 'Isvor',
    'projects.case3.description': 'Sistema de design e plataforma educacional que melhorou a experiência de aprendizado em 55%.',
    
    // Footer
    'footer.portfolio': 'Portfolio Leandro Ciccarelli',
    'footer.contact': 'Contato',
    'footer.rights': 'Todos os direitos reservados.',
    
    // Accessibility Panel
    'accessibility.title': 'Acessibilidade',
    'accessibility.fontSize.title': 'Tamanho da Fonte',
    'accessibility.fontSize.current': 'Atual',
    'accessibility.fontSize.shortcut': 'Atalho: Ctrl + (+/-)',
    'accessibility.neurodivergent.title': 'Modo Neurodivergente',
    'accessibility.neurodivergent.activate': 'Ativar Modo Neurodivergente',
    'accessibility.neurodivergent.deactivate': 'Desativar Modo Neurodivergente',
    'accessibility.neurodivergent.description': 'Modo ativado: animações reduzidas, cores suaves, texto mais legível.',
    'accessibility.motion.title': 'Reduzir Movimento',
    'accessibility.motion.reduce': 'Reduzir Animações',
    'accessibility.motion.allow': 'Permitir Animações',
    'accessibility.keyboard.title': 'Navegação por Teclado',
    'accessibility.keyboard.tab': 'Tab: Navegar elementos',
    'accessibility.keyboard.enter': 'Enter/Space: Ativar botões',
    'accessibility.screenReader.title': 'Leitores de Tela',
    'accessibility.screenReader.description': 'Este site é otimizado para NVDA, JAWS e VoiceOver. Todas as imagens possuem descrições alternativas e elementos interativos são adequadamente rotulados.'
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.curriculum': 'Resume',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Product Design\nLeader &\nUX Strategist',
    'hero.description': 'Expert in transforming research insights into innovative digital solutions. I work creating experiences that connect business objectives to real user needs.',
    'hero.cta': 'View projects',
    
    // About Section
    'about.section': 'Portfolio',
    'about.title': 'Leandro\nCiccarelli',
    'about.description1': 'As a Product Design Leader with over 15 years of experience, my passion is building digital product ecosystems where user experience excellence and business objectives walk hand in hand.',
    'about.description2': 'Specialized in product strategy and leading multidisciplinary teams, I see my role as a facilitator: someone who creates clear processes and a culture of collaboration so designers can do their best work. My approach, which combines agile methodologies, design thinking and deep data analysis, aims to transform complex challenges into intuitive solutions that generate real and measurable impact.',
    'about.photo.caption': 'Leandro Ciccarelli',
    
    // Skills
    'about.skills.section': 'Skills',
    'about.skills.title': 'Experience & Methodologies',
    'about.skills.research': 'Research & Analysis',
    'about.skills.strategy': 'Strategy & Product',
    'about.skills.design': 'Design & Prototyping',
    'about.skills.tools': 'Tools & Technology',
    
    // Research & Publications
    'about.research.section': 'Research',
    'about.research.title': 'Publications & Academic Work',
    'about.research.description': 'My academic and professional journey includes research in Interaction Design, UX Strategy and co-creation methodologies, resulting in publications and presentations at national and international conferences.',
    
    // Publications
    'about.publication.book.type': 'Book',
    'about.publication.book.title': 'Interaction Design: Methodologies and Practices',
    'about.publication.book.description': 'Work that explores the main user-centered design methodologies and their applications in digital projects.',
    
    'about.publication.article.type': 'Scientific Article',
    'about.publication.article.title': 'UX Strategy in Agile Environments: A Case Study',
    'about.publication.article.description': 'Research on integrating UX practices into agile software development methodologies.',
    
    'about.publication.workshop.type': 'Workshop',
    'about.publication.workshop.title': 'Co-creation in Design Thinking: Facilitation and Techniques',
    'about.publication.workshop.description': 'Practical workshop on facilitation and co-creation techniques for multidisciplinary teams.',
    
    'about.lattes.button': 'Lattes CV',
    
    // Projects
    'projects.section': 'Projects',
    'projects.title': 'Featured\ncase studies',
    'projects.description.main': 'Explore my main design case studies. You can download all cases at once or individually select each project for detailed analysis.',
    'projects.description.sub': 'Each case includes applied methodologies, obtained results and strategic learnings.',
    'projects.download.all': 'Download all cases',
    'projects.download.individual': 'Download case',
    
    // Case Studies
    'projects.case1.title': 'Comunica.In',
    'projects.case1.description': 'Complete redesign of the internal communication platform, resulting in 40% increase in user engagement.',
    
    'projects.case2.title': 'Vertown',
    'projects.case2.description': 'UX strategy for B2B marketplace, increasing conversions by 65% through user journey optimization.',
    
    'projects.case3.title': 'Isvor',
    'projects.case3.description': 'Design system and educational platform that improved learning experience by 55%.',
    
    // Footer
    'footer.portfolio': 'Leandro Ciccarelli Portfolio',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    
    // Accessibility Panel
    'accessibility.title': 'Accessibility',
    'accessibility.fontSize.title': 'Font Size',
    'accessibility.fontSize.current': 'Current',
    'accessibility.fontSize.shortcut': 'Shortcut: Ctrl + (+/-)',
    'accessibility.neurodivergent.title': 'Neurodivergent Mode',
    'accessibility.neurodivergent.activate': 'Activate Neurodivergent Mode',
    'accessibility.neurodivergent.deactivate': 'Deactivate Neurodivergent Mode',
    'accessibility.neurodivergent.description': 'Mode activated: reduced animations, soft colors, more readable text.',
    'accessibility.motion.title': 'Reduce Motion',
    'accessibility.motion.reduce': 'Reduce Animations',
    'accessibility.motion.allow': 'Allow Animations',
    'accessibility.keyboard.title': 'Keyboard Navigation',
    'accessibility.keyboard.tab': 'Tab: Navigate elements',
    'accessibility.keyboard.enter': 'Enter/Space: Activate buttons',
    'accessibility.screenReader.title': 'Screen Readers',
    'accessibility.screenReader.description': 'This site is optimized for NVDA, JAWS and VoiceOver. All images have alternative descriptions and interactive elements are properly labeled.'
  },
  es: {
    // Navigation
    'nav.about': 'Acerca',
    'nav.projects': 'Proyectos',
    'nav.curriculum': 'Currículum',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Product Design\nLeader &\nEstrategista de UX',
    'hero.description': 'Experto en transformar insights de investigación en soluciones digitales innovadoras. Trabajo creando experiencias que conectan objetivos de negocio con necesidades reales de usuarios.',
    'hero.cta': 'Ver proyectos',
    
    // About Section
    'about.section': 'Portafolio',
    'about.title': 'Leandro\nCiccarelli',
    'about.description1': 'Como Product Design Leader con más de 15 años de experiencia, mi pasión es construir ecosistemas de productos digitales donde la excelencia de la experiencia del usuario y los objetivos de negocio caminan juntos.',
    'about.description2': 'Especializado en estrategia de producto y liderazgo de equipos multidisciplinarios, veo mi rol como el de un facilitador: alguien que crea procesos claros y una cultura de colaboración para que los diseñadores puedan hacer su mejor trabajo. Mi enfoque, que une metodologías ágiles, design thinking y un profundo análisis de datos, busca transformar desafíos complejos en soluciones intuitivas que generan impacto real y medible.',
    'about.photo.caption': 'Leandro Ciccarelli',
    
    // Skills
    'about.skills.section': 'Competencias',
    'about.skills.title': 'Experiencia y Metodologías',
    'about.skills.research': 'Investigación y Análisis',
    'about.skills.strategy': 'Estrategia y Producto',
    'about.skills.design': 'Diseño y Prototipado',
    'about.skills.tools': 'Herramientas y Tecnología',
    
    // Research & Publications
    'about.research.section': 'Investigación',
    'about.research.title': 'Publicaciones y Trabajo Académico',
    'about.research.description': 'Mi trayectoria académica y profesional incluye investigación en Diseño de Interacción, Estrategia UX y metodologías de co-creación, resultando en publicaciones y presentaciones en conferencias nacionales e internacionales.',
    
    // Publications
    'about.publication.book.type': 'Libro',
    'about.publication.book.title': 'Diseño de Interacción: Metodologías y Prácticas',
    'about.publication.book.description': 'Obra que explora las principales metodologías de diseño centrado en el usuario y sus aplicaciones en proyectos digitales.',
    
    'about.publication.article.type': 'Artículo Científico',
    'about.publication.article.title': 'Estrategia UX en Entornos Ágiles: Un Estudio de Caso',
    'about.publication.article.description': 'Investigación sobre la integración de prácticas UX en metodologías ágiles de desarrollo de software.',
    
    'about.publication.workshop.type': 'Taller',
    'about.publication.workshop.title': 'Co-creación en Design Thinking: Facilitación y Técnicas',
    'about.publication.workshop.description': 'Taller práctico sobre técnicas de facilitación y co-creación para equipos multidisciplinarios.',
    
    'about.lattes.button': 'CV Lattes',
    
    // Projects
    'projects.section': 'Proyectos',
    'projects.title': 'Casos de estudio\ndestacados',
    'projects.description.main': 'Explora mis principales casos de estudio de diseño. Puedes descargar todos los casos de una vez o seleccionar individualmente cada proyecto para análisis detallado.',
    'projects.description.sub': 'Cada caso incluye metodologías aplicadas, resultados obtenidos y aprendizajes estratégicos.',
    'projects.download.all': 'Descargar todos los casos',
    'projects.download.individual': 'Descargar caso',
    
    // Case Studies
    'projects.case1.title': 'Comunica.In',
    'projects.case1.description': 'Rediseño completo de la plataforma de comunicación interna, resultando en 40% de aumento en el engagement de usuarios.',
    
    'projects.case2.title': 'Vertown',
    'projects.case2.description': 'Estrategia UX para marketplace B2B, aumentando conversiones en 65% a través de optimización del journey del usuario.',
    
    'projects.case3.title': 'Isvor',
    'projects.case3.description': 'Sistema de diseño y plataforma educacional que mejoró la experiencia de aprendizaje en 55%.',
    
    // Footer
    'footer.portfolio': 'Portafolio Leandro Ciccarelli',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
    
    // Accessibility Panel
    'accessibility.title': 'Accesibilidad',
    'accessibility.fontSize.title': 'Tamaño de Fuente',
    'accessibility.fontSize.current': 'Actual',
    'accessibility.fontSize.shortcut': 'Atajo: Ctrl + (+/-)',
    'accessibility.neurodivergent.title': 'Modo Neurodivergente',
    'accessibility.neurodivergent.activate': 'Activar Modo Neurodivergente',
    'accessibility.neurodivergent.deactivate': 'Desactivar Modo Neurodivergente',
    'accessibility.neurodivergent.description': 'Modo activado: animaciones reducidas, colores suaves, texto más legible.',
    'accessibility.motion.title': 'Reducir Movimiento',
    'accessibility.motion.reduce': 'Reducir Animaciones',
    'accessibility.motion.allow': 'Permitir Animaciones',
    'accessibility.keyboard.title': 'Navegación por Teclado',
    'accessibility.keyboard.tab': 'Tab: Navegar elementos',
    'accessibility.keyboard.enter': 'Enter/Space: Activar botones',
    'accessibility.screenReader.title': 'Lectores de Pantalla',
    'accessibility.screenReader.description': 'Este sitio está optimizado para NVDA, JAWS y VoiceOver. Todas las imágenes tienen descripciones alternativas y los elementos interactivos están correctamente etiquetados.'
  },
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.curriculum': 'CV',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Product Design\nLeader &\nStratégiste UX',
    'hero.description': 'Expert en transformation d\'insights de recherche en solutions digitales innovantes. Je travaille en créant des expériences qui connectent les objectifs business aux besoins réels des utilisateurs.',
    'hero.cta': 'Voir les projets',
    
    // About Section
    'about.section': 'Portfolio',
    'about.title': 'Leandro\nCiccarelli',
    'about.description1': 'En tant que Product Design Leader avec plus de 15 ans d\'expérience, ma passion est de construire des écosystèmes de produits digitaux où l\'excellence de l\'expérience utilisateur et les objectifs business marchent main dans la main.',
    'about.description2': 'Spécialisé en stratégie produit et leadership d\'équipes multidisciplinaires, je vois mon rôle comme celui d\'un facilitateur : quelqu\'un qui crée des processus clairs et une culture de collaboration pour que les designers puissent faire leur meilleur travail. Mon approche, qui unit méthodologies agiles, design thinking et une analyse profonde des données, vise à transformer les défis complexes en solutions intuitives qui génèrent un impact réel et mesurable.',
    'about.photo.caption': 'Leandro Ciccarelli',
    
    // Skills
    'about.skills.section': 'Compétences',
    'about.skills.title': 'Expérience et Méthodologies',
    'about.skills.research': 'Recherche et Analyse',
    'about.skills.strategy': 'Stratégie et Produit',
    'about.skills.design': 'Design et Prototypage',
    'about.skills.tools': 'Outils et Technologie',
    
    // Research & Publications
    'about.research.section': 'Recherche',
    'about.research.title': 'Publications et Travail Académique',
    'about.research.description': 'Mon parcours académique et professionnel inclut des recherches en Design d\'Interaction, Stratégie UX et méthodologies de co-création, résultant en publications et présentations dans des conférences nationales et internationales.',
    
    // Publications
    'about.publication.book.type': 'Livre',
    'about.publication.book.title': 'Design d\'Interaction : Méthodologies et Pratiques',
    'about.publication.book.description': 'Œuvre qui explore les principales méthodologies de design centré utilisateur et leurs applications dans les projets digitaux.',
    
    'about.publication.article.type': 'Article Scientifique',
    'about.publication.article.title': 'Stratégie UX dans les Environnements Agiles : Une Étude de Cas',
    'about.publication.article.description': 'Recherche sur l\'intégration des pratiques UX dans les méthodologies agiles de développement logiciel.',
    
    'about.publication.workshop.type': 'Atelier',
    'about.publication.workshop.title': 'Co-création en Design Thinking : Facilitation et Techniques',
    'about.publication.workshop.description': 'Atelier pratique sur les techniques de facilitation et co-création pour équipes multidisciplinaires.',
    
    'about.lattes.button': 'CV Lattes',
    
    // Projects
    'projects.section': 'Projets',
    'projects.title': 'Études de cas\nen vedette',
    'projects.description.main': 'Explorez mes principales études de cas de design. Vous pouvez télécharger tous les cas d\'un coup ou sélectionner individuellement chaque projet pour une analyse détaillée.',
    'projects.description.sub': 'Chaque cas inclut les méthodologies appliquées, les résultats obtenus et les apprentissages stratégiques.',
    'projects.download.all': 'Télécharger tous les cas',
    'projects.download.individual': 'Télécharger le cas',
    
    // Case Studies
    'projects.case1.title': 'Comunica.In',
    'projects.case1.description': 'Redesign complet de la plateforme de communication interne, résultant en 40% d\'augmentation de l\'engagement des utilisateurs.',
    
    'projects.case2.title': 'Vertown',
    'projects.case2.description': 'Stratégie UX pour marketplace B2B, augmentant les conversions de 65% grâce à l\'optimisation du parcours utilisateur.',
    
    'projects.case3.title': 'Isvor',
    'projects.case3.description': 'Système de design et plateforme éducationnelle qui a amélioré l\'expérience d\'apprentissage de 55%.',
    
    // Footer
    'footer.portfolio': 'Portfolio Leandro Ciccarelli',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
    
    // Accessibility Panel
    'accessibility.title': 'Accessibilité',
    'accessibility.fontSize.title': 'Taille de Police',
    'accessibility.fontSize.current': 'Actuel',
    'accessibility.fontSize.shortcut': 'Raccourci : Ctrl + (+/-)',
    'accessibility.neurodivergent.title': 'Mode Neurodivergent',
    'accessibility.neurodivergent.activate': 'Activer le Mode Neurodivergent',
    'accessibility.neurodivergent.deactivate': 'Désactiver le Mode Neurodivergent',
    'accessibility.neurodivergent.description': 'Mode activé : animations réduites, couleurs douces, texte plus lisible.',
    'accessibility.motion.title': 'Réduire le Mouvement',
    'accessibility.motion.reduce': 'Réduire les Animations',
    'accessibility.motion.allow': 'Permettre les Animations',
    'accessibility.keyboard.title': 'Navigation au Clavier',
    'accessibility.keyboard.tab': 'Tab : Naviguer entre les éléments',
    'accessibility.keyboard.enter': 'Enter/Space : Activer les boutons',
    'accessibility.screenReader.title': 'Lecteurs d\'Écran',
    'accessibility.screenReader.description': 'Ce site est optimisé pour NVDA, JAWS et VoiceOver. Toutes les images ont des descriptions alternatives et les éléments interactifs sont correctement étiquetés.'
  }
};

const skillsData = {
  pt: {
    research: [
      'Entrevistas com usuários',
      'Pesquisa etnográfica',
      'Análise de dados quantitativos',
      'Testes de usabilidade',
      'Análise competitiva',
      'Personas e jornadas do usuário'
    ],
    strategy: [
      'Estratégia de produto',
      'Roadmap de UX',
      'OKRs e métricas de UX',
      'Design de serviços',
      'Transformação digital',
      'Gestão de stakeholders'
    ],
    design: [
      'Design de interfaces',
      'Sistemas de design',
      'Prototipagem avançada',
      'Design thinking',
      'Acessibilidade (WCAG)',
      'Design responsivo'
    ],
    tools: [
      'Figma, Sketch, Adobe XD',
      'Principle, ProtoPie',
      'Miro, FigJam',
      'Hotjar, Google Analytics',
      'Jira, Confluence',
      'HTML/CSS básico'
    ]
  },
  en: {
    research: [
      'User interviews',
      'Ethnographic research',
      'Quantitative data analysis',
      'Usability testing',
      'Competitive analysis',
      'Personas and user journeys'
    ],
    strategy: [
      'Product strategy',
      'UX roadmap',
      'OKRs and UX metrics',
      'Service design',
      'Digital transformation',
      'Stakeholder management'
    ],
    design: [
      'Interface design',
      'Design systems',
      'Advanced prototyping',
      'Design thinking',
      'Accessibility (WCAG)',
      'Responsive design'
    ],
    tools: [
      'Figma, Sketch, Adobe XD',
      'Principle, ProtoPie',
      'Miro, FigJam',
      'Hotjar, Google Analytics',
      'Jira, Confluence',
      'Basic HTML/CSS'
    ]
  },
  es: {
    research: [
      'Entrevistas con usuarios',
      'Investigación etnográfica',
      'Análisis de datos cuantitativos',
      'Pruebas de usabilidad',
      'Análisis competitivo',
      'Personas y journeys de usuario'
    ],
    strategy: [
      'Estrategia de producto',
      'Roadmap de UX',
      'OKRs y métricas de UX',
      'Diseño de servicios',
      'Transformación digital',
      'Gestión de stakeholders'
    ],
    design: [
      'Diseño de interfaces',
      'Sistemas de diseño',
      'Prototipado avanzado',
      'Design thinking',
      'Accesibilidad (WCAG)',
      'Diseño responsivo'
    ],
    tools: [
      'Figma, Sketch, Adobe XD',
      'Principle, ProtoPie',
      'Miro, FigJam',
      'Hotjar, Google Analytics',
      'Jira, Confluence',
      'HTML/CSS básico'
    ]
  },
  fr: {
    research: [
      'Entretiens utilisateurs',
      'Recherche ethnographique',
      'Analyse de données quantitatives',
      'Tests d\'utilisabilité',
      'Analyse concurrentielle',
      'Personas et parcours utilisateur'
    ],
    strategy: [
      'Stratégie produit',
      'Roadmap UX',
      'OKRs et métriques UX',
      'Design de services',
      'Transformation digitale',
      'Gestion des parties prenantes'
    ],
    design: [
      'Design d\'interfaces',
      'Systèmes de design',
      'Prototypage avancé',
      'Design thinking',
      'Accessibilité (WCAG)',
      'Design responsive'
    ],
    tools: [
      'Figma, Sketch, Adobe XD',
      'Principle, ProtoPie',
      'Miro, FigJam',
      'Hotjar, Google Analytics',
      'Jira, Confluence',
      'HTML/CSS de base'
    ]
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const getSkillItems = (category: string): string[] => {
    return skillsData[language][category as keyof typeof skillsData[typeof language]] || [];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getSkillItems }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}