import { PROJECTS, PROJECTS_EN } from "@/lib/site";
import { getTranslations, type Locale } from "@/lib/i18n";
import { Eyebrow } from "./Buttons";
import ProjectsCarousel from "./ProjectsCarousel";
import Reveal from "./Reveal";

export default function Projects({ locale = "es" }: { locale?: Locale }) {
  const t = getTranslations(locale).projects;
  const projects = locale === "en" ? PROJECTS_EN : PROJECTS;

  return (
    <section id="proyectos" className="overflow-x-clip py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>{t.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            {t.h2Part1}
            <span className="text-brand-600">{t.h2Part2}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-slate-550">
            {t.subtitle}
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.2} y={40}>
        <div className="mt-12">
          <ProjectsCarousel projects={projects} locale={locale} />
        </div>
      </Reveal>
    </section>
  );
}
