import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SITE_URL, WHATSAPP_NUMBER } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const TITLE = "WAI Code — Soluciones tecnológicas a medida para empresas";
const DESCRIPTION =
  "Analizo procesos, automatizo tareas y desarrollo software a medida: automatización de procesos, inteligencia artificial para empresas, desarrollo SaaS y herramientas digitales que hacen crecer tu negocio.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — WAI Code",
  },
  description: DESCRIPTION,
  keywords: [
    "soluciones tecnológicas a medida",
    "software a medida",
    "automatización de procesos",
    "inteligencia artificial para empresas",
    "desarrollo SaaS",
    "herramientas digitales",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "WAI Code",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "WAI Code — Soluciones tecnológicas a medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: "WAI Code",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo-mark.png`,
      image: `${SITE_URL}/images/og.png`,
      description: DESCRIPTION,
      telephone: WHATSAPP_NUMBER,
      areaServed: "ES",
      founder: {
        "@type": "Person",
        name: "David",
        jobTitle: "Fundador y desarrollador de soluciones tecnológicas",
      },
      knowsAbout: [
        "Soluciones tecnológicas a medida",
        "Software a medida",
        "Automatización de procesos",
        "Inteligencia artificial para empresas",
        "Desarrollo SaaS",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "WAI Code",
      inLanguage: "es-ES",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        {children}
      </body>
    </html>
  );
}
