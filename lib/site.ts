export const SITE_URL = "https://waicode.es";

export const WHATSAPP_NUMBER = "+34 610 097 562";

export const WHATSAPP_URL =
  "https://wa.me/34610097562?text=" +
  encodeURIComponent(
    "Hola David, he visto tu web de WAI Code y me gustaría hablar sobre un proyecto."
  );

export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
] as const;

export type Project = {
  name: string;
  description: string;
  video: string;
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    name: "SurfSuite",
    description:
      "La plataforma integral para empresas de recruitment y gestión de personal.",
    video: "/videos/surfsuite.mp4",
    tags: ["SaaS", "Plataforma"],
  },
  {
    name: "Lyra",
    description:
      "Un asistente con IA que organiza, automatiza y optimiza tu día a día.",
    video: "/videos/lyra.mp4",
    tags: ["IA", "SaaS"],
  },
  {
    name: "InduChain",
    description:
      "La red profesional que conecta empresas industriales y genera oportunidades reales.",
    video: "/videos/induchain.mp4",
    tags: ["Red profesional", "Industria"],
  },
  {
    name: "Phootflow",
    description:
      "Selección, edición y entrega automática de fotografías con IA.",
    video: "/videos/phootflow.mp4",
    tags: ["IA", "Automatización"],
  },
  {
    name: "Benot",
    description:
      "Camisetas personalizadas, deportivas y solidarias diseñadas para cada historia.",
    video: "/videos/benot.mp4",
    tags: ["E-commerce", "Personalización"],
  },
];

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const SERVICES: Service[] = [
  {
    title: "Software a medida",
    description:
      "Aplicaciones personalizadas para resolver problemas específicos de tu negocio.",
    icon: "code",
  },
  {
    title: "Plataformas SaaS",
    description:
      "Productos escalables, multitenant y preparados para crecer.",
    icon: "layers",
  },
  {
    title: "Automatizaciones",
    description:
      "Eliminamos tareas repetitivas y optimizamos procesos clave.",
    icon: "bolt",
  },
  {
    title: "Herramientas internas",
    description:
      "Sistemas privados para tu equipo, centralizando y mejorando la operativa.",
    icon: "wrench",
  },
  {
    title: "Marketplaces",
    description:
      "Plataformas que conectan oferta y demanda de forma eficiente.",
    icon: "store",
  },
  {
    title: "Portales de clientes",
    description:
      "Espacios personalizados para que tus clientes interactúen y gestionen.",
    icon: "users",
  },
  {
    title: "CRM",
    description:
      "Gestión avanzada de clientes, contactos y oportunidades de negocio.",
    icon: "contact",
  },
  {
    title: "ERP",
    description:
      "Control total de tu empresa desde una única plataforma integrada.",
    icon: "grid",
  },
  {
    title: "IA aplicada al negocio",
    description:
      "Integramos inteligencia artificial para multiplicar resultados.",
    icon: "sparkles",
  },
  {
    title: "Integraciones",
    description:
      "Conectamos tus herramientas y sistemas para que trabajen juntos.",
    icon: "plug",
  },
];

export type ProcessStep = {
  title: string;
  description: string;
  icon: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Entiendo el problema",
    description: "Me explicas cómo funciona tu negocio y qué necesitas mejorar.",
    icon: "chat",
  },
  {
    title: "Analizo opciones",
    description: "Buscamos la mejor forma de resolverlo con la tecnología adecuada.",
    icon: "search",
  },
  {
    title: "Diseño la solución",
    description: "Defino arquitectura, alcance y enfoque para construir la mejor solución.",
    icon: "pen",
  },
  {
    title: "Construyo",
    description: "Desarrollo el sistema con calidad, seguridad y escalabilidad.",
    icon: "terminal",
  },
  {
    title: "Evolucionamos",
    description: "Seguimos mejorándolo juntos según tu negocio crece.",
    icon: "trend",
  },
];
