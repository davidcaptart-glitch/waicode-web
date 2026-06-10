import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Información sobre el uso de cookies en waicode.es. Este sitio no instala cookies de seguimiento ni publicidad.",
  alternates: { canonical: "/cookies" },
};

export default function Cookies() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Política de Cookies
        </h1>
        <p className="mt-3 text-sm text-slate-550">
          Última actualización: junio de 2026
        </p>

        <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-slate-550">

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              1. ¿Qué son las cookies?
            </h2>
            <p className="mt-3">
              Las cookies son pequeños archivos de texto que los sitios web
              almacenan en el dispositivo del usuario con el fin de guardar
              preferencias de navegación, sesiones o información estadística.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              2. ¿Utiliza este sitio web cookies?
            </h2>
            <p className="mt-3">
              El Sitio Web{" "}
              <strong className="font-semibold text-ink">waicode.es</strong> no
              instala cookies propias de seguimiento, analítica ni publicidad.
            </p>
            <p className="mt-3">
              Las únicas cookies que pueden estar presentes son{" "}
              <strong className="font-semibold text-ink">
                cookies técnicas o de sesión
              </strong>{" "}
              generadas por el propio navegador o por la infraestructura de
              alojamiento, necesarias para el correcto funcionamiento del Sitio
              Web. Estas cookies son estrictamente necesarias y no requieren
              consentimiento del usuario conforme al artículo 22.2 de la
              LSSI-CE.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              3. Tipología de cookies
            </h2>
            <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-ink/8">
              <table className="w-full text-sm">
                <thead className="bg-ink/[0.03]">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-ink">
                      Tipo
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-ink">
                      Finalidad
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-ink">
                      Gestión
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/5">
                  <tr>
                    <td className="px-4 py-3">Técnicas / sesión</td>
                    <td className="px-4 py-3">
                      Funcionamiento básico del servidor
                    </td>
                    <td className="px-4 py-3">Propias del navegador</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              4. Cookies de terceros
            </h2>
            <p className="mt-3">
              El Sitio Web no carga scripts de terceros que instalen cookies en
              tu dispositivo. Las fuentes tipográficas se sirven localmente desde
              el servidor propio, y los vídeos son archivos propios (no embeds de
              YouTube ni plataformas externas).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              5. Gestión y desactivación de cookies
            </h2>
            <p className="mt-3">
              Puedes configurar o desactivar las cookies desde los ajustes de tu
              navegador. Ten en cuenta que desactivar las cookies técnicas puede
              afectar al funcionamiento de algunos sitios web.
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <strong className="font-semibold text-ink">Chrome:</strong>{" "}
                Configuración › Privacidad y seguridad › Cookies y otros datos de
                sitios
              </li>
              <li>
                <strong className="font-semibold text-ink">Firefox:</strong>{" "}
                Opciones › Privacidad y seguridad › Cookies y datos del sitio
              </li>
              <li>
                <strong className="font-semibold text-ink">Safari:</strong>{" "}
                Preferencias › Privacidad
              </li>
              <li>
                <strong className="font-semibold text-ink">Edge:</strong>{" "}
                Configuración › Privacidad, búsqueda y servicios › Cookies
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              6. Más información
            </h2>
            <p className="mt-3">
              Para cualquier consulta sobre el uso de cookies puedes escribirnos
              por WhatsApp (+34 610 097 562). También puedes obtener más
              información en la Agencia Española de Protección de Datos (
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700"
              >
                www.aepd.es
              </a>
              ).
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
