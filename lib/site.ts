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
  tagline: string;
  description: string;
  video: string;
  tags: string[];
  url: string;
};

export const PROJECTS: Project[] = [
  {
    name: "SurfSuite",
    tagline: "Toda tu empresa conectada en un único ecosistema.",
    description:
      "Operaciones, ventas, RRHH, automatizaciones e inteligencia artificial en un solo lugar, especializado en empresas de recruitment y gestión de personal.",
    video: "/videos/surfsuite.mp4",
    tags: ["SaaS", "Plataforma", "RRHH"],
    url: "https://surfsuite.es",
  },
  {
    name: "Lyra",
    tagline: "Tu asistente personal impulsado por IA.",
    description:
      "Organiza tareas, gestiona conversaciones y automatiza acciones para ayudarte a recuperar tiempo y centrarte en lo que realmente importa.",
    video: "/videos/lyra.mp4",
    tags: ["SaaS", "IA", "Automatización"],
    url: "https://lyraissistant.com",
  },
  {
    name: "InduChain",
    tagline: "La red que conecta la industria.",
    description:
      "Compradores y proveedores industriales se encuentran, validan capacidades y generan oportunidades de negocio reales dentro del ecosistema industrial.",
    video: "/videos/induchain.mp4",
    tags: ["Red profesional", "Industria", "B2B"],
    url: "https://induchain.com",
  },
  {
    name: "Phootflow",
    tagline: "Miles de fotografías procesadas en minutos.",
    description:
      "Automatiza la selección, edición y entrega de sesiones fotográficas con inteligencia artificial para que los fotógrafos se centren en crear.",
    video: "/videos/phootflow.mp4",
    tags: ["IA", "Automatización", "Fotografía"],
    url: "https://phootflow.com",
  },
  {
    name: "Benot",
    tagline: "Camisetas personalizadas diseñadas para cada historia.",
    description:
      "Diseña, personaliza y pide camisetas únicas en pocos pasos: desde diseños propios hasta colecciones deportivas y causas solidarias.",
    video: "/videos/benot.mp4",
    tags: ["E-commerce", "Personalización", "Deporte"],
    url: "https://benot.store",
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
