import { PROJECTS } from "@/lib/site";
import { Eyebrow } from "./Buttons";
import LazyVideo from "./LazyVideo";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="proyectos" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Eyebrow>Proyectos destacados</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Algunos proyectos en los que{" "}
            <span className="text-brand-600">he trabajado.</span>
          </h2>
        </Reveal>

        {/* Bento: first two larger, remaining three smaller */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {PROJECTS.map((project, i) => (
            <Reveal
              key={project.name}
              delay={0.07 * (i % 3)}
              y={32}
              className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}
            >
              <article className="group h-full rounded-[2rem] bg-ink/[0.03] p-2 ring-1 ring-ink/5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                <div className="relative overflow-hidden rounded-[calc(2rem-0.5rem)] bg-gradient-to-br from-[#0d1326] via-[#101a38] to-[#0a0e1c]">
                  <LazyVideo
                    src={project.video}
                    label={`Vídeo de demostración del proyecto ${project.name}`}
                    className="aspect-video w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="px-4 pb-4 pt-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-brand-600">
                      {project.name}
                    </h3>
                    <div className="flex gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-700 ring-1 ring-brand-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-550">
                    {project.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
