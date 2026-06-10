import Image from "next/image";
import { LEGAL_LINKS, NAV_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/5 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo-mark.png"
              alt="WAI Code"
              width={120}
              height={68}
              className="h-9 w-auto"
              style={{ mixBlendMode: "multiply" }}
            />
            <p className="text-sm text-slate-550">
              © {new Date().getFullYear()} WAI Code. Soluciones tecnológicas a
              medida.
            </p>
          </div>

          <nav aria-label="Pie de página">
            <ul className="flex items-center gap-6">
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
          </nav>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-ink/5 pt-6 sm:justify-start">
          {LEGAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-slate-550/60 transition-colors duration-300 hover:text-slate-550"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
