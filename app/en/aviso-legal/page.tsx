import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Legal Notice",
  description:
    "Legal information about WAI Code and the terms of use for waicode.es.",
  alternates: { canonical: "/en/aviso-legal" },
};

export default function LegalNoticeEN() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Legal Notice
        </h1>
        <p className="mt-3 text-sm text-slate-550">Last updated: June 2026</p>

        <div className="prose-legal mt-10 space-y-10 text-[15px] leading-relaxed text-slate-550">

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              1. Owner details
            </h2>
            <p className="mt-3">
              In accordance with Article 10 of Law 34/2002 of 11 July on
              Information Society Services and Electronic Commerce (LSSI-CE),
              the following identifying details are provided:
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <strong className="font-semibold text-ink">Owner:</strong>{" "}
                David Franco Ruiz
              </li>
              <li>
                <strong className="font-semibold text-ink">Tax ID (NIF):</strong>{" "}
                47830220H
              </li>
              <li>
                <strong className="font-semibold text-ink">Address:</strong>{" "}
                Spain
              </li>
              <li>
                <strong className="font-semibold text-ink">Contact:</strong>{" "}
                WhatsApp +34 610 09 75 62
              </li>
              <li>
                <strong className="font-semibold text-ink">Activity:</strong>{" "}
                Custom software development, business process automation and
                artificial intelligence for companies
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              2. Purpose
            </h2>
            <p className="mt-3">
              This Legal Notice governs access, navigation and use of the
              website{" "}
              <strong className="font-semibold text-ink">waicode.es</strong>{" "}
              (hereinafter, &ldquo;the Website&rdquo;). Accessing and using the Website
              implies full acceptance of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              3. Intellectual and industrial property
            </h2>
            <p className="mt-3">
              All Website content — including texts, images, graphic design,
              logos, source code and videos — is the property of the Owner or
              their legitimate rights holders, and is protected by Spanish and
              international intellectual and industrial property law.
            </p>
            <p className="mt-3">
              Reproduction, distribution, modification, public communication or
              any other total or partial exploitation of the content without
              prior written authorisation from the Owner is expressly
              prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              4. Disclaimer of liability
            </h2>
            <p className="mt-3">
              The Owner does not guarantee continuous, uninterrupted
              availability of the Website, nor assumes liability for any
              damages arising from lack of availability, access or continuity
              of operation.
            </p>
            <p className="mt-3">
              The Owner is not responsible for the content of third-party
              websites that the Website may link to. The inclusion of external
              links does not imply approval of or responsibility for the linked
              content.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold tracking-tight text-ink">
              5. Applicable law and jurisdiction
            </h2>
            <p className="mt-3">
              This Legal Notice is governed in its entirety by current Spanish
              law. For any dispute arising from access to or use of the
              Website, the parties submit to the competent Courts and Tribunals
              in accordance with applicable regulations.
            </p>
          </section>

        </div>
      </main>
      <Footer locale="en" />
    </>
  );
}
