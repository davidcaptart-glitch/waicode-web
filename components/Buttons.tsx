import type { ReactNode } from "react";
import { ArrowRightIcon } from "./icons";

type CTAProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" } as const;

/** Solid blue pill with the nested circular arrow ("button-in-button"). */
export function PrimaryCTA({ href, children, external, className = "" }: CTAProps) {
  return (
    <a
      href={href}
      {...(external ? EXTERNAL : {})}
      className={`group inline-flex items-center gap-3 rounded-full bg-brand-600 py-2.5 pl-6 pr-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(36,86,228,0.5)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-brand-700 hover:shadow-[0_12px_32px_-8px_rgba(36,86,228,0.6)] active:scale-[0.98] ${className}`}
    >
      {children}
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:scale-105">
        <ArrowRightIcon className="h-4 w-4" />
      </span>
    </a>
  );
}

/** Quiet outlined pill. */
export function SecondaryCTA({ href, children, external, className = "" }: CTAProps) {
  return (
    <a
      href={href}
      {...(external ? EXTERNAL : {})}
      className={`inline-flex items-center justify-center rounded-full border border-ink/10 bg-white px-7 py-3 text-sm font-semibold text-ink transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-brand-300 hover:text-brand-700 hover:shadow-[var(--shadow-soft)] active:scale-[0.98] ${className}`}
    >
      {children}
    </a>
  );
}

/** Microscopic pill eyebrow that precedes section headings. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
      {children}
    </span>
  );
}
