import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Información legal sobre el titular de WAI Code y las condiciones de uso del sitio web waicode.es.",
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegal() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Aviso Legal
        </h1>
        <p className="mt-3 text-sm text-slate-550">
          Última actualización: junio de 2026
        </p>

        <div className="prose-legal mt-10 space-y-10 text-[15px] leading-relaxed text-slate-550">

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              1. Datos del titular
            </h2>
            <p className="mt-3">
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio,
              de Servicios de la Sociedad de la Información y del Comercio
              Electrónico (LSSI-CE), se facilitan los siguientes datos
              identificativos:
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <strong className="font-semibold text-ink">Titular:</strong>{" "}
                [NOMBRE Y APELLIDOS]
              </li>
              <li>
                <strong className="font-semibold text-ink">NIF:</strong>{" "}
                [NIF/DNI]
              </li>
              <li>
                <strong className="font-semibold text-ink">Domicilio:</strong>{" "}
                España
              </li>
              <li>
                <strong className="font-semibold text-ink">Contacto:</strong>{" "}
                WhatsApp +34 610 097 562
              </li>
              <li>
                <strong className="font-semibold text-ink">Actividad:</strong>{" "}
                Desarrollo de software a medida, automatización de procesos e
                inteligencia artificial para empresas
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              2. Objeto
            </h2>
            <p className="mt-3">
              El presente Aviso Legal regula el acceso, navegación y uso del
              sitio web{" "}
              <strong className="font-semibold text-ink">waicode.es</strong> (en
              adelante, "el Sitio Web"). El acceso y uso del Sitio Web implica la
              aceptación plena de las presentes condiciones.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              3. Propiedad intelectual e industrial
            </h2>
            <p className="mt-3">
              Todos los contenidos del Sitio Web — incluyendo textos, imágenes,
              diseño gráfico, logotipos, código fuente y vídeos — son propiedad
              del Titular o de sus legítimos titulares, y están protegidos por la
              normativa española e internacional de propiedad intelectual e
              industrial.
            </p>
            <p className="mt-3">
              Queda expresamente prohibida la reproducción, distribución,
              modificación, comunicación pública o cualquier otra forma de
              explotación total o parcial de los contenidos sin autorización
              previa y por escrito del Titular.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              4. Exclusión de responsabilidad
            </h2>
            <p className="mt-3">
              El Titular no garantiza la disponibilidad continua e ininterrumpida
              del Sitio Web, ni se hace responsable de los posibles daños
              derivados de la falta de disponibilidad, acceso o continuidad de su
              funcionamiento.
            </p>
            <p className="mt-3">
              El Titular no se responsabiliza de los contenidos de sitios web de
              terceros a los que el Sitio Web pueda enlazar. La inclusión de
              enlaces externos no implica aprobación ni responsabilidad sobre los
              contenidos enlazados.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              5. Legislación aplicable y jurisdicción
            </h2>
            <p className="mt-3">
              El presente Aviso Legal se rige íntegramente por la legislación
              española vigente. Para cualquier controversia derivada del acceso o
              uso del Sitio Web, las partes se someten a los Juzgados y Tribunales
              competentes de conformidad con la normativa aplicable.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
