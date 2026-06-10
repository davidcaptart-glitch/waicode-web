import { Eyebrow } from "./Buttons";
import Reveal from "./Reveal";

const STACK = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "REST APIs",
  "OpenAI",
  "Claude · Anthropic",
  "Automatización & IA",
];

export default function TechStack() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Eyebrow>Stack habitual</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Tecnologías con las que{" "}
            <span className="text-brand-600">construyo las soluciones.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-slate-550">
            Elijo las herramientas según el problema, no al revés.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <ul className="mt-8 flex flex-wrap gap-3" aria-label="Tecnologías habituales">
            {STACK.map((tech) => (
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
