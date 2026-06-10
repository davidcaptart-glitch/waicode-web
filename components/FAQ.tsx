import { getTranslations, type Locale } from "@/lib/i18n";
import { Eyebrow } from "./Buttons";
import FAQAccordion from "./FAQAccordion";
import Reveal from "./Reveal";

export default function FAQ({ locale = "es" }: { locale?: Locale }) {
  const t = getTranslations(locale).faq;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section id="faq" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Eyebrow>{t.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            {t.h2Part1}
            <span className="text-brand-600">{t.h2Part2}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-slate-550">
            {t.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-12 rounded-3xl bg-ink/[0.02] px-6 ring-1 ring-ink/5 sm:px-8">
            <FAQAccordion items={t.items} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
