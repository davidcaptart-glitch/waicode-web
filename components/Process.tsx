import { PROCESS_STEPS, PROCESS_STEPS_EN } from "@/lib/site";
import { getTranslations, type Locale } from "@/lib/i18n";
import { Eyebrow } from "./Buttons";
import Reveal from "./Reveal";
import { ServiceIcon } from "./icons";

export default function Process({ locale = "es" }: { locale?: Locale }) {
  const t = getTranslations(locale).process;
  const steps = locale === "en" ? PROCESS_STEPS_EN : PROCESS_STEPS;

  return (
    <section id="proceso" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Eyebrow>{t.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            {t.h2}
          </h2>
        </Reveal>

        <ol className="relative mt-16 grid gap-12 lg:grid-cols-5 lg:gap-6">
          {/* connecting line (desktop) */}
          <div
            className="absolute left-0 right-0 top-7 hidden border-t border-dashed border-brand-200 lg:block"
            aria-hidden
          />
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <Reveal delay={0.12 * i} y={24}>
                <div className="flex flex-row items-start gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                  <div className="relative shrink-0">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-brand-500 to-brand-700 text-white shadow-[0_10px_24px_-8px_rgba(36,86,228,0.55)] ring-4 ring-white">
                      <ServiceIcon name={step.icon} className="h-6 w-6" />
                    </span>
                    <span className="absolute -bottom-1 left-1/2 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-white text-[10px] font-bold text-brand-700 ring-1 ring-brand-200">
                      {i + 1}
                    </span>
                  </div>
                  <div className="lg:mt-6">
                    <h3 className="text-base font-bold tracking-tight text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-550 lg:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
