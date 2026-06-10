import { PROJECTS, WHATSAPP_URL } from "@/lib/site";
import { Eyebrow, PrimaryCTA, SecondaryCTA } from "./Buttons";
import LazyVideo from "./LazyVideo";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
      {/* ambient backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-brand-100/60 blur-3xl" />
        <div className="absolute top-1/3 left-[-12%] h-[360px] w-[360px] rounded-full bg-brand-50 blur-3xl" />
        <div className="bg-dot-grid absolute inset-x-0 top-0 h-[520px] [mask-image:linear-gradient(to_bottom,black,transparent)] opacity-60" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:px-8">
        <div>
          <Reveal>
            <Eyebrow>Soluciones tecnológicas a medida</Eyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.06] tracking-tight text-ink sm:text-5xl xl:text-[3.6rem]">
              Transformo problemas complejos.{" "}
              <span className="text-brand-600">
                En herramientas que funcionan.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-550">
              Analizo procesos, automatizo tareas y desarrollo soluciones
              digitales a medida para ayudar a empresas a crecer, ahorrar
              tiempo y trabajar mejor.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <PrimaryCTA href="#proyectos">Ver proyectos</PrimaryCTA>
              <SecondaryCTA href={WHATSAPP_URL} external>
                Hablemos
              </SecondaryCTA>
            </div>
          </Reveal>

          <Reveal delay={0.34}>
            <ul className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3">
              {PROJECTS.map((project) => (
                <li
                  key={project.name}
                  className="flex items-center gap-2 text-sm font-semibold tracking-tight text-ink/40"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-brand-300"
                    aria-hidden
                  />
                  {project.name}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Hero video — double-bezel frame */}
        <Reveal delay={0.2} y={40}>
          <div className="rounded-[2rem] bg-ink/5 p-2 ring-1 ring-ink/5 shadow-[var(--shadow-float)]">
            <div className="relative overflow-hidden rounded-[calc(2rem-0.5rem)] bg-gradient-to-br from-[#0d1326] via-[#101a38] to-[#0a0e1c] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
              <LazyVideo
                src="/videos/intro-personal.mp4"
                label="Vídeo: David, fundador de WAI Code, trabajando en soluciones"
                className="aspect-video w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
