import { Eyebrow } from "./Buttons";
import FAQAccordion, { type FAQItem } from "./FAQAccordion";
import Reveal from "./Reveal";

const FAQ_ITEMS: FAQItem[] = [
  {
    q: "¿Cuánto cuesta desarrollar software a medida?",
    a: "El coste varía según la complejidad del proyecto, las funcionalidades requeridas y el plazo de entrega. Un MVP funcional puede estar listo desde unos pocos miles de euros, mientras que una plataforma SaaS completa requiere una inversión mayor. La primera conversación es gratuita y sin compromiso: analizo tu caso y te doy una estimación realista.",
  },
  {
    q: "¿Cuánto tiempo tarda en desarrollarse una aplicación?",
    a: "Depende del alcance. Una herramienta interna o una automatización de procesos puede estar lista en 2-4 semanas. Un SaaS completo o una plataforma con múltiples módulos puede llevar entre 3 y 6 meses. Trabajo con entregas iterativas para que puedas ver resultados reales desde las primeras semanas.",
  },
  {
    q: "¿En qué se diferencia el software a medida del software estándar?",
    a: "El software estándar obliga a tu empresa a adaptarse a la herramienta. El software a medida se construye exactamente para tu proceso, tu equipo y tus necesidades. El resultado es mayor eficiencia, menos fricción y sin pagar por funciones que nunca usarás.",
  },
  {
    q: "¿Con qué tipo de empresas trabajas?",
    a: "Trabajo principalmente con pymes, startups en crecimiento y emprendedores con un problema de negocio concreto que la tecnología puede resolver. Trabajo en remoto, por lo que colaboro con empresas de toda España y de cualquier país hispanohablante sin limitación geográfica. Si tienes un reto específico y quieres abordarlo con una solución propia, podemos hablar.",
  },
  {
    q: "¿Trabajas con empresas fuera de España?",
    a: "Sí. Trabajo 100% en remoto, así que no hay ninguna limitación geográfica. La mayor parte de mis clientes son españoles, pero también trabajo habitualmente con empresas de México, Argentina, Colombia y otros países de habla hispana. El idioma y la zona horaria son lo único relevante, y el español lo tenemos cubierto.",
  },
  {
    q: "¿Puedo pedir cambios o mejoras durante el desarrollo?",
    a: "Sí. Trabajo de forma iterativa y en contacto constante con el cliente. Los cambios son parte del proceso, especialmente en las primeras fases. El objetivo es que el resultado final sea exactamente lo que necesitas, no lo que se acordó meses antes sin contexto real.",
  },
  {
    q: "¿Qué tecnologías utilizas para desarrollar?",
    a: "Principalmente Next.js, TypeScript, Node.js y PostgreSQL para el desarrollo de aplicaciones web. Para automatizaciones e inteligencia artificial trabajo con las APIs de OpenAI y Anthropic (Claude), entre otras. Elijo las tecnologías según el caso concreto, no al revés.",
  },
  {
    q: "¿Trabajas con proyectos de inteligencia artificial?",
    a: "Sí. Integro IA en procesos de negocio existentes: automatización de tareas repetitivas, asistentes internos, análisis de datos, generación de contenido estructurado y clasificación de información. No aplico IA por moda: la uso cuando tiene sentido real y genera un retorno claro.",
  },
  {
    q: "¿Cómo empezamos a trabajar juntos?",
    a: "Lo más sencillo es enviarme un mensaje por WhatsApp explicando qué necesitas. Sin formularios ni procesos complicados. Me explicas el problema, analizo si puedo ayudarte y acordamos los próximos pasos. Sin compromiso.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

export default function FAQ() {
  return (
    <section id="faq" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      {/* FAQPage JSON-LD — server-rendered, visible a Googlebot en el HTML inicial */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />

      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Eyebrow>Preguntas frecuentes</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Dudas habituales sobre{" "}
            <span className="text-brand-600">
              software a medida y automatización.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-slate-550">
            Si tienes alguna otra pregunta, escríbeme directamente por WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-12 rounded-3xl bg-ink/[0.02] px-6 ring-1 ring-ink/5 sm:px-8">
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
