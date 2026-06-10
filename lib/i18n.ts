export type Locale = "es" | "en";

const translations = {
  es: {
    nav: {
      cta: "Hablemos",
      ariaLabel: "Principal",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      navLinks: [
        { label: "Servicios", href: "#servicios" },
        { label: "Proyectos", href: "#proyectos" },
        { label: "Proceso", href: "#proceso" },
        { label: "Contacto", href: "#contacto" },
      ],
    },
    hero: {
      eyebrow: "Soluciones tecnológicas a medida",
      h1Part1: "Transformo problemas de negocio",
      h1Part2: "en software a medida, automatizaciones e IA.",
      subtitle:
        "Analizo tus procesos, identifico ineficiencias y construyo la solución exacta: aplicaciones a medida, automatizaciones de negocio e inteligencia artificial aplicada a tu empresa.",
      geoNote:
        "Trabajo en remoto con empresas de toda España y países hispanohablantes.",
      cta1: "Ver proyectos",
      cta2: "Hablemos",
      videoLabel:
        "Vídeo: David, fundador de WAI Code, trabajando en soluciones",
    },
    approach: {
      eyebrow: "Mi enfoque",
      h2Line1: "No vendo",
      h2Line2: "páginas web.",
      points: [
        "Cada empresa tiene necesidades distintas.",
        "Algunas veces la solución es una web.",
        "Otras una automatización.",
        "Otras una plataforma interna.",
        "Otras un sistema impulsado por IA.",
      ],
      descPre: "Mi trabajo consiste en ",
      descStrong: "entender el problema",
      descPost:
        " y construir la herramienta adecuada para resolverlo.",
      videoLabel: "Vídeo: del caos al resultado — el proceso de WAI Code",
    },
    services: {
      eyebrow: "Qué puedo construir",
      h2Part1: "Soluciones digitales a medida para ",
      h2Part2: "tu negocio.",
    },
    techstack: {
      eyebrow: "Stack habitual",
      h2Part1: "Tecnologías con las que ",
      h2Part2: "construyo las soluciones.",
      subtitle: "Elijo las herramientas según el problema, no al revés.",
      stack: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "REST APIs",
        "OpenAI",
        "Claude · Anthropic",
        "Automatización & IA",
      ],
    },
    process: {
      eyebrow: "Mi proceso",
      h2: "Así es como trabajo contigo.",
    },
    projects: {
      eyebrow: "Proyectos destacados",
      h2Part1: "Algunos proyectos en los que ",
      h2Part2: "he trabajado.",
      subtitle:
        "Cada empresa tiene necesidades distintas. Estas son algunas de las soluciones que he diseñado y desarrollado.",
    },
    carousel: {
      viewProject: "Ver proyecto",
      prevProject: "Proyecto anterior",
      nextProject: "Proyecto siguiente",
      selectProject: "Seleccionar proyecto",
      openProject: (name: string) =>
        `Abrir el proyecto ${name} en una pestaña nueva`,
      showProject: (name: string) => `Mostrar el proyecto ${name}`,
      videoLabel: (name: string) =>
        `Vídeo de demostración del proyecto ${name}`,
      viewTab: (name: string) => `Ver ${name}`,
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      h2Part1: "Dudas habituales sobre ",
      h2Part2: "software a medida y automatización.",
      subtitle:
        "Si tienes alguna otra pregunta, escríbeme directamente por WhatsApp.",
      items: [
        {
          q: "¿Cuánto cuesta desarrollar software a medida?",
          a: "El coste varía según la complejidad del proyecto, las funcionalidades requeridas y el plazo de entrega. Un MVP funcional puede estar listo desde unos pocos miles de euros, mientras que una plataforma SaaS completa requiere una inversión mayor. La primera conversación es gratuita y sin compromiso: analizo tu caso y te doy una estimación realista.",
        },
        {
          q: "¿Cuánto tiempo tarda en desarrollarse una aplicación?",
          a: "Depende del alcance. Una herramienta interna o una automatización de procesos puede estar lista en 2-4 semanas. Un SaaS completo o una plataforma con múltiples módulos puede llevar entre 3 y 6 meses. Trabajo con entregas iterativas para que puedas ver resultados reales desde las primeras semanas.",
        },
        {
          q: "¿En qué se diferencia el software a medida del software estándar?",
          a: "El software estándar obliga a tu empresa a adaptarse a la herramienta. El software a medida se construye exactamente para tu proceso, tu equipo y tus necesidades. El resultado es mayor eficiencia, menos fricción y sin pagar por funciones que nunca usarás.",
        },
        {
          q: "¿Con qué tipo de empresas trabajas?",
          a: "Trabajo principalmente con pymes, startups en crecimiento y emprendedores con un problema de negocio concreto que la tecnología puede resolver. Trabajo en remoto, por lo que colaboro con empresas de toda España y de cualquier país hispanohablante sin limitación geográfica. Si tienes un reto específico y quieres abordarlo con una solución propia, podemos hablar.",
        },
        {
          q: "¿Trabajas con empresas fuera de España?",
          a: "Sí. Trabajo 100% en remoto, así que no hay ninguna limitación geográfica. La mayor parte de mis clientes son españoles, pero también trabajo habitualmente con empresas de México, Argentina, Colombia y otros países de habla hispana. El idioma y la zona horaria son lo único relevante, y el español lo tenemos cubierto.",
        },
        {
          q: "¿Puedo pedir cambios o mejoras durante el desarrollo?",
          a: "Sí. Trabajo de forma iterativa y en contacto constante con el cliente. Los cambios son parte del proceso, especialmente en las primeras fases. El objetivo es que el resultado final sea exactamente lo que necesitas, no lo que se acordó meses antes sin contexto real.",
        },
        {
          q: "¿Qué tecnologías utilizas para desarrollar?",
          a: "Principalmente Next.js, TypeScript, Node.js y PostgreSQL para el desarrollo de aplicaciones web. Para automatizaciones e inteligencia artificial trabajo con las APIs de OpenAI y Anthropic (Claude), entre otras. Elijo las tecnologías según el caso concreto, no al revés.",
        },
        {
          q: "¿Trabajas con proyectos de inteligencia artificial?",
          a: "Sí. Integro IA en procesos de negocio existentes: automatización de tareas repetitivas, asistentes internos, análisis de datos, generación de contenido estructurado y clasificación de información. No aplico IA por moda: la uso cuando tiene sentido real y genera un retorno claro.",
        },
        {
          q: "¿Cómo empezamos a trabajar juntos?",
          a: "Lo más sencillo es enviarme un mensaje por WhatsApp explicando qué necesitas. Sin formularios ni procesos complicados. Me explicas el problema, analizo si puedo ayudarte y acordamos los próximos pasos. Sin compromiso.",
        },
      ],
    },
    finalcta: {
      eyebrow: "¿Listo para construir algo grande?",
      h2Part1: "¿Tienes un problema ",
      h2Part2: "que resolver?",
      subtitle1: "Cuéntame qué necesitas y vemos si puedo ayudarte.",
      descLine1: "No vendo soluciones genéricas.",
      descLine2:
        "Analizo cada caso y construyo la herramienta adecuada para resolverlo.",
      bullets: ["Respuesta rápida", "Sin compromiso", "Soluciones a medida"],
      cta1: "Hablemos por WhatsApp",
      cta2: "Ver proyectos",
      imageAlt: "David, fundador de WAI Code, trabajando con su portátil",
      proofTitle: "Solución encontrada",
      proofLabel: "Impacto estimado",
      proofUnit: "eficiencia",
    },
    footer: {
      tagline: "Soluciones tecnológicas a medida.",
      navLabel: "Pie de página",
      legalLinks: [
        { label: "Aviso Legal", href: "/aviso-legal" },
        { label: "Política de Privacidad", href: "/privacidad" },
        { label: "Política de Cookies", href: "/cookies" },
      ],
    },
  },

  en: {
    nav: {
      cta: "Let's talk",
      ariaLabel: "Main navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      navLinks: [
        { label: "Services", href: "#servicios" },
        { label: "Projects", href: "#proyectos" },
        { label: "Process", href: "#proceso" },
        { label: "Contact", href: "#contacto" },
      ],
    },
    hero: {
      eyebrow: "Custom Technology Solutions",
      h1Part1: "I turn business problems into",
      h1Part2: "custom software, automation, and AI.",
      subtitle:
        "I analyze your processes, identify inefficiencies and build the exact solution: custom applications, business automation and artificial intelligence applied to your company.",
      geoNote:
        "Working remotely with companies across Spain and Spanish-speaking countries.",
      cta1: "View projects",
      cta2: "Let's talk",
      videoLabel:
        "Video: David, founder of WAI Code, working on solutions",
    },
    approach: {
      eyebrow: "My approach",
      h2Line1: "I don't sell",
      h2Line2: "websites.",
      points: [
        "Every business has different needs.",
        "Sometimes the solution is a website.",
        "Other times it's automation.",
        "Other times an internal platform.",
        "Other times an AI-powered system.",
      ],
      descPre: "My job is to ",
      descStrong: "understand the problem",
      descPost: " and build the right tool to solve it.",
      videoLabel: "Video: from chaos to results — the WAI Code process",
    },
    services: {
      eyebrow: "What I can build",
      h2Part1: "Custom digital solutions for ",
      h2Part2: "your business.",
    },
    techstack: {
      eyebrow: "Typical stack",
      h2Part1: "Technologies I use ",
      h2Part2: "to build solutions.",
      subtitle: "I choose tools based on the problem, not the other way around.",
      stack: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "REST APIs",
        "OpenAI",
        "Claude · Anthropic",
        "Automation & AI",
      ],
    },
    process: {
      eyebrow: "My process",
      h2: "This is how I work with you.",
    },
    projects: {
      eyebrow: "Featured projects",
      h2Part1: "Some of the projects ",
      h2Part2: "I've worked on.",
      subtitle:
        "Every company has different needs. Here are some of the solutions I've designed and developed.",
    },
    carousel: {
      viewProject: "View project",
      prevProject: "Previous project",
      nextProject: "Next project",
      selectProject: "Select project",
      openProject: (name: string) =>
        `Open ${name} project in a new tab`,
      showProject: (name: string) => `Show ${name} project`,
      videoLabel: (name: string) =>
        `Demo video of the ${name} project`,
      viewTab: (name: string) => `View ${name}`,
    },
    faq: {
      eyebrow: "Frequently asked questions",
      h2Part1: "Common questions about ",
      h2Part2: "custom software and automation.",
      subtitle:
        "If you have any other questions, message me directly on WhatsApp.",
      items: [
        {
          q: "How much does custom software development cost?",
          a: "The cost varies depending on the project's complexity, required features and delivery timeline. A functional MVP can be ready from a few thousand euros, while a complete SaaS platform requires a larger investment. The first conversation is free and without commitment: I analyze your case and give you a realistic estimate.",
        },
        {
          q: "How long does it take to develop an application?",
          a: "It depends on the scope. An internal tool or process automation can be ready in 2-4 weeks. A complete SaaS or a platform with multiple modules can take 3 to 6 months. I work with iterative deliveries so you can see real results from the first weeks.",
        },
        {
          q: "How is custom software different from standard software?",
          a: "Standard software forces your company to adapt to the tool. Custom software is built exactly for your process, your team and your needs. The result is greater efficiency, less friction and without paying for features you'll never use.",
        },
        {
          q: "What types of companies do you work with?",
          a: "I work primarily with SMBs, growing startups and entrepreneurs with a specific business problem that technology can solve. I work remotely, so I collaborate with companies throughout Spain and any Spanish-speaking country without geographic limitations. If you have a specific challenge and want to address it with a custom solution, let's talk.",
        },
        {
          q: "Do you work with companies outside Spain?",
          a: "Yes. I work 100% remotely, so there are no geographic limitations. Most of my clients are Spanish, but I also regularly work with companies from Mexico, Argentina, Colombia and other Spanish-speaking countries. Language and timezone are all that matters, and we have Spanish covered.",
        },
        {
          q: "Can I request changes or improvements during development?",
          a: "Yes. I work iteratively and in constant contact with the client. Changes are part of the process, especially in the early stages. The goal is for the final result to be exactly what you need, not what was agreed months ago without real context.",
        },
        {
          q: "What technologies do you use for development?",
          a: "Primarily Next.js, TypeScript, Node.js and PostgreSQL for web application development. For automation and artificial intelligence I work with OpenAI and Anthropic (Claude) APIs, among others. I choose technologies based on the specific case, not the other way around.",
        },
        {
          q: "Do you work on artificial intelligence projects?",
          a: "Yes. I integrate AI into existing business processes: repetitive task automation, internal assistants, data analysis, structured content generation and information classification. I don't apply AI for the sake of it: I use it when it makes real sense and generates a clear return.",
        },
        {
          q: "How do we start working together?",
          a: "The simplest way is to send me a message on WhatsApp explaining what you need. No forms or complicated processes. You explain the problem, I assess whether I can help and we agree on the next steps. No commitment required.",
        },
      ],
    },
    finalcta: {
      eyebrow: "Ready to build something great?",
      h2Part1: "Got a problem ",
      h2Part2: "to solve?",
      subtitle1: "Tell me what you need and let's see if I can help.",
      descLine1: "I don't sell generic solutions.",
      descLine2: "I analyze each case and build the right tool to solve it.",
      bullets: ["Fast response", "No commitment", "Tailored solutions"],
      cta1: "Let's talk on WhatsApp",
      cta2: "View projects",
      imageAlt: "David, founder of WAI Code, working on his laptop",
      proofTitle: "Solution found",
      proofLabel: "Estimated impact",
      proofUnit: "efficiency",
    },
    footer: {
      tagline: "Custom technology solutions.",
      navLabel: "Footer",
      legalLinks: [
        { label: "Legal Notice", href: "/en/aviso-legal" },
        { label: "Privacy Policy", href: "/en/privacidad" },
        { label: "Cookie Policy", href: "/en/cookies" },
      ],
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
