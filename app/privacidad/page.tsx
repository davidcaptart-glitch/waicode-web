import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Información sobre el tratamiento de datos personales en waicode.es, conforme al RGPD y la LOPDGDD.",
  alternates: { canonical: "/privacidad" },
};

export default function Privacidad() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Política de Privacidad
        </h1>
        <p className="mt-3 text-sm text-slate-550">
          Última actualización: junio de 2026
        </p>

        <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-slate-550">

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              1. Responsable del tratamiento
            </h2>
            <p className="mt-3">
              WAI Code, operado por{" "}
              <strong className="font-semibold text-ink">
                David Franco Ruiz
              </strong>{" "}
              (NIF: 47830220H), con domicilio en España, en adelante &ldquo;el
              Responsable&rdquo;.
            </p>
            <p className="mt-2">
              Contacto: WhatsApp +34 610 09 75 62
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              2. Datos que se recogen
            </h2>
            <p className="mt-3">
              El Sitio Web{" "}
              <strong className="font-semibold text-ink">waicode.es</strong> no
              dispone de formularios de contacto, sistemas de registro ni
              herramientas de análisis de tráfico. Por tanto,{" "}
              <strong className="font-semibold text-ink">
                no se recopila ningún dato personal de forma directa
              </strong>{" "}
              a través del Sitio Web.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              3. Contacto por WhatsApp
            </h2>
            <p className="mt-3">
              El único canal de contacto habilitado es WhatsApp (+34 610 09 75 62).
              Si decides iniciar una conversación, los datos que proporciones
              (número de teléfono, nombre, mensajes) serán tratados con la
              finalidad de gestionar tu consulta.
            </p>
            <p className="mt-3">
              Dicho tratamiento está sujeto también a la{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700"
              >
                Política de Privacidad de WhatsApp / Meta
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              4. Base legal del tratamiento
            </h2>
            <p className="mt-3">
              El tratamiento de los datos derivados del contacto a través de
              WhatsApp está basado en el consentimiento del interesado al iniciar
              la comunicación (art. 6.1.a RGPD) y en el interés legítimo del
              Responsable para atender consultas profesionales (art. 6.1.f RGPD).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              5. Conservación de los datos
            </h2>
            <p className="mt-3">
              Los datos de contacto se conservarán durante el tiempo necesario
              para gestionar la consulta o la relación profesional, y hasta que
              el interesado solicite su supresión.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              6. Comunicación a terceros
            </h2>
            <p className="mt-3">
              No se cederán datos a terceros, salvo obligación legal. WhatsApp /
              Meta actúa como encargado del tratamiento para la gestión de las
              comunicaciones, sujeto a su propia política de privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              7. Derechos del interesado
            </h2>
            <p className="mt-3">
              Puedes ejercer tus derechos de acceso, rectificación, supresión,
              portabilidad, limitación y oposición enviando un mensaje a través de
              WhatsApp (+34 610 09 75 62) con el asunto &ldquo;Derechos RGPD&rdquo;.
            </p>
            <p className="mt-3">
              Asimismo, tienes derecho a presentar una reclamación ante la
              Agencia Española de Protección de Datos (
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700"
              >
                www.aepd.es
              </a>
              ) si consideras que el tratamiento de tus datos vulnera la
              normativa vigente.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
