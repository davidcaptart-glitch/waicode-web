export const SITE_URL = "https://waicode.es";

export const WHATSAPP_NUMBER = "+34 610 09 75 62";

export const WHATSAPP_URL =
  "https://wa.me/34610097562?text=" +
  encodeURIComponent(
    "Hola David, he visto tu web de WAI Code y me gustaría hablar sobre un proyecto."
  );

// Rellena con tus URLs reales para completar el Knowledge Panel y los schemas
export const LINKEDIN_URL = ""; // p. ej. "https://www.linkedin.com/in/david-waicode"
export const GITHUB_URL = "";   // p. ej. "https://github.com/davidwaicode"

export const WHATSAPP_URL_EN =
  "https://wa.me/34610097562?text=" +
  encodeURIComponent(
    "Hi David, I've seen your WAI Code website and I'd like to discuss a project."
  );

export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const LEGAL_LINKS = [
  { label: "Aviso Legal", href: "/aviso-legal" },
  { label: "Política de Privacidad", href: "/privacidad" },
  { label: "Política de Cookies", href: "/cookies" },
] as const;

export type Project = {
  name: string;
  tagline: string;
  description: string;
  result: string;
  video: string;
  tags: string[];
  url: string;
};

export const PROJECTS_EN: Project[] = [
  {
    name: "SurfSuite",
    tagline: "Your entire business connected in a single ecosystem.",
    description:
      "Operations, sales, HR, automation and AI in one place, specialized for recruitment and staffing companies. Unifies scattered data, eliminates duplicates and allows teams to operate with greater speed and clarity.",
    result: "All business areas on a single platform",
    video: "/videos/surfsuite.mp4",
    tags: ["SaaS", "Platform", "HR"],
    url: "https://surfsuite.es",
  },
  {
    name: "Lyra",
    tagline: "Your AI-powered personal assistant.",
    description:
      "Organizes tasks, manages conversations and automates actions to help you reclaim time and focus on what truly matters. Designed to eliminate interruptions and enable deeper, more productive work every day.",
    result: "Automates repetitive tasks and reclaims time",
    video: "/videos/lyra.mp4",
    tags: ["SaaS", "AI", "Automation"],
    url: "https://lyraissistant.com",
  },
  {
    name: "InduChain",
    tagline: "The network that connects industry.",
    description:
      "Industrial buyers and suppliers meet, validate capabilities and generate real business opportunities within the industrial ecosystem. Reduces qualified supplier search time from weeks to hours.",
    result: "Industrial supplier search in hours",
    video: "/videos/induchain.mp4",
    tags: ["Professional network", "Industry", "B2B"],
    url: "https://induchain.es",
  },
  {
    name: "Phootflow",
    tagline: "Thousands of photos processed in minutes.",
    description:
      "Automates the selection, editing and delivery of photo sessions with AI so photographers can focus on creating. Processes hundreds of images automatically, drastically reducing post-production time.",
    result: "Thousands of photos edited automatically with AI",
    video: "/videos/phootflow.mp4",
    tags: ["AI", "Automation", "Photography"],
    url: "https://phootflow.com",
  },
  {
    name: "Benot",
    tagline: "Custom t-shirts designed for every story.",
    description:
      "Design, customize and order unique t-shirts in a few steps: from your own designs to sports collections and charity causes. The customer enjoys a complete customization experience, from design to delivery, in a smooth, frictionless process.",
    result: "Complete customization from start to finish",
    video: "/videos/benot.mp4",
    tags: ["E-commerce", "Customization", "Sports"],
    url: "https://benot.store",
  },
];

export const PROJECTS: Project[] = [
  {
    name: "SurfSuite",
    tagline: "Toda tu empresa conectada en un único ecosistema.",
    description:
      "Operaciones, ventas, RRHH, automatizaciones e inteligencia artificial en un solo lugar, especializado en empresas de recruitment y gestión de personal. Unifica datos dispersos, elimina duplicidades y permite a los equipos operar con mayor velocidad y claridad.",
    result: "Todas las áreas del negocio en una sola plataforma",
    video: "/videos/surfsuite.mp4",
    tags: ["SaaS", "Plataforma", "RRHH"],
    url: "https://surfsuite.es",
  },
  {
    name: "Lyra",
    tagline: "Tu asistente personal impulsado por IA.",
    description:
      "Organiza tareas, gestiona conversaciones y automatiza acciones para ayudarte a recuperar tiempo y centrarte en lo que realmente importa. Diseñado para eliminar interrupciones y permitir un trabajo más profundo y productivo cada día.",
    result: "Automatiza tareas repetitivas y recupera tiempo",
    video: "/videos/lyra.mp4",
    tags: ["SaaS", "IA", "Automatización"],
    url: "https://lyraissistant.com",
  },
  {
    name: "InduChain",
    tagline: "La red que conecta la industria.",
    description:
      "Compradores y proveedores industriales se encuentran, validan capacidades y generan oportunidades de negocio reales dentro del ecosistema industrial. Reduce el tiempo de búsqueda de proveedores cualificados de semanas a horas.",
    result: "Búsqueda de proveedores industriales en horas",
    video: "/videos/induchain.mp4",
    tags: ["Red profesional", "Industria", "B2B"],
    url: "https://induchain.es",
  },
  {
    name: "Phootflow",
    tagline: "Miles de fotografías procesadas en minutos.",
    description:
      "Automatiza la selección, edición y entrega de sesiones fotográficas con inteligencia artificial para que los fotógrafos se centren en crear. Permite procesar cientos de imágenes de forma automática, reduciendo el tiempo de postproducción drásticamente.",
    result: "Miles de fotos editadas automáticamente con IA",
    video: "/videos/phootflow.mp4",
    tags: ["IA", "Automatización", "Fotografía"],
    url: "https://phootflow.com",
  },
  {
    name: "Benot",
    tagline: "Camisetas personalizadas diseñadas para cada historia.",
    description:
      "Diseña, personaliza y pide camisetas únicas en pocos pasos: desde diseños propios hasta colecciones deportivas y causas solidarias. El cliente vive una experiencia de personalización completa, desde el diseño hasta la entrega, en un proceso fluido y sin fricciones.",
    result: "Personalización completa de principio a fin",
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

export const SERVICES_EN: Service[] = [
  { title: "Custom Software", description: "Personalized applications to solve specific business problems.", icon: "code" },
  { title: "SaaS Platforms", description: "Scalable, multi-tenant products ready to grow with your business.", icon: "layers" },
  { title: "Automation", description: "We eliminate repetitive tasks and optimize key business processes.", icon: "bolt" },
  { title: "Internal Tools", description: "Private systems for your team, centralizing and improving operations.", icon: "wrench" },
  { title: "Marketplaces", description: "Platforms that connect supply and demand efficiently.", icon: "store" },
  { title: "Client Portals", description: "Personalized spaces for your clients to interact and manage their accounts.", icon: "users" },
  { title: "CRM", description: "Advanced management of clients, contacts and business opportunities.", icon: "contact" },
  { title: "ERP", description: "Full control of your business from a single integrated platform.", icon: "grid" },
  { title: "AI for Business", description: "We integrate artificial intelligence to multiply business results.", icon: "sparkles" },
  { title: "Integrations", description: "We connect your tools and systems to work together seamlessly.", icon: "plug" },
];

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

export const PROCESS_STEPS_EN: ProcessStep[] = [
  { title: "Understanding the problem", description: "You tell me how your business works and what you need to improve.", icon: "chat" },
  { title: "Analyzing options", description: "We find the best way to solve it with the right technology.", icon: "search" },
  { title: "Designing the solution", description: "I define the architecture, scope and approach to build the best solution.", icon: "pen" },
  { title: "Building", description: "I develop the system with quality, security and scalability.", icon: "terminal" },
  { title: "Evolving", description: "We keep improving it together as your business grows.", icon: "trend" },
];

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
