import Image from "next/image";
import { getTranslations, type Locale } from "@/lib/i18n";

export default function Footer({ locale = "es" }: { locale?: Locale }) {
  const t = getTranslations(locale);

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
              © {new Date().getFullYear()} WAI Code. {t.footer.tagline}
            </p>
          </div>

          <nav aria-label={t.footer.navLabel}>
            <ul className="flex items-center gap-6">
              {t.nav.navLinks.map((link) => (
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
          {t.footer.legalLinks.map((link) => (
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
