import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Information on how personal data is handled at waicode.es, in accordance with the GDPR.",
  alternates: { canonical: "/en/privacidad" },
};

export default function PrivacyPolicyEN() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-slate-550">Last updated: June 2026</p>

        <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-slate-550">

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              1. Data controller
            </h2>
            <p className="mt-3">
              WAI Code, operated by{" "}
              <strong className="font-semibold text-ink">
                David Franco Ruiz
              </strong>{" "}
              (Tax ID NIF: 47830220H), based in Spain, hereinafter &ldquo;the
              Controller&rdquo;.
            </p>
            <p className="mt-2">Contact: WhatsApp +34 610 09 75 62</p>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              2. Data collected
            </h2>
            <p className="mt-3">
              The website{" "}
              <strong className="font-semibold text-ink">waicode.es</strong>{" "}
              has no contact forms, registration systems or traffic analytics
              tools. Therefore,{" "}
              <strong className="font-semibold text-ink">
                no personal data is directly collected
              </strong>{" "}
              through the Website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              3. Contact via WhatsApp
            </h2>
            <p className="mt-3">
              The only available contact channel is WhatsApp (+34 610 09 75 62).
              If you choose to start a conversation, the data you provide
              (phone number, name, messages) will be processed for the purpose
              of handling your enquiry.
            </p>
            <p className="mt-3">
              Such processing is also subject to the{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700"
              >
                WhatsApp / Meta Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              4. Legal basis for processing
            </h2>
            <p className="mt-3">
              Processing of data arising from WhatsApp contact is based on the
              data subject&rsquo;s consent when initiating communication (Art. 6.1.a
              GDPR) and on the Controller&rsquo;s legitimate interest in handling
              professional enquiries (Art. 6.1.f GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              5. Data retention
            </h2>
            <p className="mt-3">
              Contact data will be retained for as long as necessary to manage
              the enquiry or professional relationship, and until the data
              subject requests its deletion.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              6. Third-party disclosure
            </h2>
            <p className="mt-3">
              Data will not be disclosed to third parties, except as required
              by law. WhatsApp / Meta acts as a data processor for the
              management of communications, subject to its own privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              7. Data subject rights
            </h2>
            <p className="mt-3">
              You may exercise your rights of access, rectification, erasure,
              portability, restriction and objection by sending a message via
              WhatsApp (+34 610 09 75 62) with the subject &ldquo;GDPR Rights&rdquo;.
            </p>
            <p className="mt-3">
              You also have the right to lodge a complaint with the Spanish
              Data Protection Agency (
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700"
              >
                www.aepd.es
              </a>
              ) if you consider that the processing of your data infringes
              current regulations.
            </p>
          </section>

        </div>
      </main>
      <Footer locale="en" />
    </>
  );
}
