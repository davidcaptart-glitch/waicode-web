import { SERVICES, SERVICES_EN } from "@/lib/site";
import { getTranslations, type Locale } from "@/lib/i18n";
import { Eyebrow } from "./Buttons";
import Reveal from "./Reveal";
import { ServiceIcon } from "./icons";

export default function Services({ locale = "es" }: { locale?: Locale }) {
  const t = getTranslations(locale).services;
  const services = locale === "en" ? SERVICES_EN : SERVICES;

  return (
    <section id="servicios" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
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

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={0.05 * (i % 5)} y={20}>
              <article className="group h-full rounded-3xl bg-ink/[0.03] p-1.5 ring-1 ring-ink/5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                <div className="flex h-full flex-col rounded-[calc(1.5rem-0.375rem)] bg-white p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] ring-1 ring-ink/5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors duration-500 group-hover:bg-brand-600 group-hover:text-white">
                    <ServiceIcon name={service.icon} className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-4 text-[15px] font-bold tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-550">
                    {service.description}
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
