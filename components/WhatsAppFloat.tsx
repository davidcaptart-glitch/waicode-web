"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./icons";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function WhatsAppFloat() {
  const reduced = useReducedMotion();

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablemos por WhatsApp"
      onClick={() => trackWhatsAppClick("boton_flotante")}
      initial={reduced ? {} : { opacity: 0, scale: 0.6, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.2, ease: [0.32, 0.72, 0, 1] }}
      className="group fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7"
    >
      <span
        className="absolute inset-0 rounded-2xl bg-brand-500/40 blur-md transition-opacity duration-700 group-hover:opacity-100 opacity-0"
        aria-hidden
      />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-b from-brand-500 to-brand-700 text-white shadow-[0_12px_32px_-8px_rgba(36,86,228,0.55)] ring-1 ring-white/20 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-1 group-active:scale-95">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </motion.a>
  );
}
