import { Eyebrow } from "./Buttons";
import LazyVideo from "./LazyVideo";
import Reveal from "./Reveal";

const POINTS = [
  "Cada empresa tiene necesidades distintas.",
  "Algunas veces la solución es una web.",
  "Otras una automatización.",
  "Otras una plataforma interna.",
  "Otras un sistema impulsado por IA.",
];

export default function Approach() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-mist p-6 ring-1 ring-ink/5 sm:p-10 lg:p-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow>Mi enfoque</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                No vendo
                <br />
                páginas web.
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <ul className="mt-8 space-y-3.5">
                {POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-base text-slate-550"
                  >
                    <span
                      className="mt-[7px] flex h-2 w-2 shrink-0 items-center justify-center rounded-full bg-brand-500 ring-4 ring-brand-100"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-8 max-w-md border-t border-ink/10 pt-7 text-base leading-relaxed text-slate-550">
                Mi trabajo consiste en{" "}
                <strong className="font-semibold text-ink">
                  entender el problema
                </strong>{" "}
                y construir la herramienta adecuada para resolverlo.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={40}>
            <div className="rounded-[2rem] bg-white p-2 ring-1 ring-ink/5 shadow-[var(--shadow-float)]">
              <div className="relative overflow-hidden rounded-[calc(2rem-0.5rem)] bg-gradient-to-br from-[#0d1326] via-[#101a38] to-[#0a0e1c]">
                <LazyVideo
                  src="/videos/intro-waicode.mp4"
                  label="Vídeo: del caos al resultado — el proceso de WAI Code"
                  className="aspect-video w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
