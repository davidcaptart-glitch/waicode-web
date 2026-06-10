import Image from "next/image";
import { WHATSAPP_URL, WHATSAPP_URL_EN } from "@/lib/site";
import { getTranslations, type Locale } from "@/lib/i18n";
import { Eyebrow, SecondaryCTA } from "./Buttons";
import Reveal from "./Reveal";
import { ArrowRightIcon, CheckCircleIcon, WhatsAppIcon } from "./icons";
import WhatsAppLink from "./WhatsAppLink";

export default function FinalCTA({ locale = "es" }: { locale?: Locale }) {
  const t = getTranslations(locale).finalcta;
  const waUrl = locale === "en" ? WHATSAPP_URL_EN : WHATSAPP_URL;

  return (
    <section id="contacto" className="px-4 pb-24 pt-8 sm:px-6 lg:px-8 lg:pb-32">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white via-brand-50/60 to-brand-100/70 ring-1 ring-ink/5">
        <div
          className="bg-dot-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
          aria-hidden
        />

        <div className="relative grid items-end gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div className="p-8 pb-0 sm:p-12 lg:p-16 lg:pr-0">
            <Reveal>
              <Eyebrow>{t.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.9rem] lg:leading-[1.08]">
                {t.h2Part1}
                <span className="text-brand-600">{t.h2Part2}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-lg text-slate-550">{t.subtitle1}</p>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-550">
                {t.descLine1}
                <br />
                {t.descLine2}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <ul className="mt-7 space-y-3">
                {t.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-3 text-base font-medium text-ink"
                  >
                    <CheckCircleIcon className="h-5.5 w-5.5 text-brand-600" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-9 flex flex-wrap items-center gap-4 pb-8 sm:pb-12 lg:pb-16">
                <WhatsAppLink
                  href={waUrl}
                  origin="seccion_final"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-brand-600 py-2.5 pl-5 pr-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(36,86,228,0.5)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-brand-700 hover:shadow-[0_12px_32px_-8px_rgba(36,86,228,0.6)] active:scale-[0.98]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  {t.cta1}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:scale-105">
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </WhatsAppLink>
                <SecondaryCTA href="#proyectos">{t.cta2}</SecondaryCTA>
              </div>
            </Reveal>
          </div>

          <div className="relative hidden self-end lg:block">
            <Reveal delay={0.2} y={40}>
              <div className="relative">
                <Image
                  src="/images/david-founder.png"
                  alt={t.imageAlt}
                  width={1024}
                  height={790}
                  className="w-full max-w-[560px] object-contain"
                  sizes="(min-width: 1024px) 560px, 0px"
                />
                <div className="absolute left-0 top-[30%] w-52 rounded-2xl bg-white/80 p-4 shadow-[var(--shadow-float)] ring-1 ring-ink/5 backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-brand-600" />
                    <p className="text-sm font-semibold text-ink">{t.proofTitle}</p>
                  </div>
                  <div className="mt-3 border-t border-ink/5 pt-3">
                    <p className="text-xs text-slate-550">{t.proofLabel}</p>
                    <p className="mt-0.5 text-lg font-bold tracking-tight text-ink">
                      <span className="text-brand-600">+32%</span> {t.proofUnit}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
