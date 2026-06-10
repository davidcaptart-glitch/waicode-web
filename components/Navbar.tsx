"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site";
import { ArrowRightIcon } from "./icons";

const EASE = [0.32, 0.72, 0, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        scrolled || open
          ? "border-b border-ink/5 bg-white/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Principal"
      >
        <a href="#inicio" className="flex items-center" aria-label="WAI Code — inicio">
          <Image
            src="/images/logo-mark.png"
            alt="WAI Code"
            width={161}
            height={91}
            priority
            className="h-10 w-auto"
            style={{ mixBlendMode: "multiply" }}
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-550 transition-colors duration-300 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2.5 rounded-full bg-brand-600 py-2 pl-5 pr-2 text-sm font-semibold text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-brand-700 active:scale-[0.98] sm:inline-flex"
          >
            Hablemos
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 group-hover:translate-x-0.5">
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white lg:hidden"
          >
            <span
              className={`absolute h-px w-4.5 bg-ink transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "rotate-45" : "-translate-y-[3.5px]"
              }`}
            />
            <span
              className={`absolute h-px w-4.5 bg-ink transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "-rotate-45" : "translate-y-[3.5px]"
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-72px)] overflow-y-auto bg-white/95 backdrop-blur-3xl lg:hidden"
          >
            <ul className="flex flex-col gap-2 px-6 pt-10">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={reduced ? {} : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.06 * i, ease: EASE }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-3xl font-semibold tracking-tight text-ink"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={reduced ? {} : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
                className="pt-6"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-3 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white"
                >
                  Hablemos
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
