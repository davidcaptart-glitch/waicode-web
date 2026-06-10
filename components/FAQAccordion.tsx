"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRightIcon } from "./icons";

const EASE = [0.32, 0.72, 0, 1] as const;

export type FAQItem = { q: string; a: string };

export default function FAQAccordion({ items }: { items: readonly FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-ink/8">
      {items.map(({ q, a }, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-5 text-left"
            >
              <span className="text-[15px] font-semibold leading-snug tracking-tight text-ink sm:text-base">
                {q}
              </span>
              <ChevronRightIcon
                className={`mt-0.5 h-5 w-5 shrink-0 text-brand-600 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 pr-8 text-[15px] leading-relaxed text-slate-550">
                    {a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
