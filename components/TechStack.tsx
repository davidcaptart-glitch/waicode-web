import { getTranslations, type Locale } from "@/lib/i18n";
import { Eyebrow } from "./Buttons";
import Reveal from "./Reveal";

export default function TechStack({ locale = "es" }: { locale?: Locale }) {
  const t = getTranslations(locale).techstack;

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Eyebrow>{t.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            {t.h2Part1}
            <span className="text-brand-600">{t.h2Part2}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-slate-550">
            {t.subtitle}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <ul className="mt-8 flex flex-wrap gap-3" aria-label={t.eyebrow}>
            {t.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-[var(--shadow-soft)] ring-1 ring-ink/8 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-brand-300 hover:text-brand-700 hover:shadow-[var(--shadow-glow)]"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
