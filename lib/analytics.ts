declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type WhatsAppOrigin =
  | "navbar"
  | "hero"
  | "proyectos"
  | "seccion_final"
  | "boton_flotante";

export function trackWhatsAppClick(origin: WhatsAppOrigin) {
  window.gtag?.("event", "whatsapp_click", {
    event_category: "contact",
    event_label: origin,
    origin,
  });
}
