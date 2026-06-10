import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SITE_URL, WHATSAPP_NUMBER, LINKEDIN_URL, GITHUB_URL } from "@/lib/site";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const TITLE = "WAI Code — Software a medida, Automatización e IA para Empresas";
const DESCRIPTION =
  "Software a medida, automatización e IA para empresas. Construyo la solución tecnológica exacta que necesitas: aplicaciones, SaaS y herramientas digitales a medida.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — WAI Code",
  },
  description: DESCRIPTION,
  keywords: [
    "software a medida",
    "automatización de procesos",
    "inteligencia artificial para empresas",
    "desarrollo SaaS",
    "herramientas digitales",
    "soluciones tecnológicas a medida",
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
        alt: "WAI Code — Software a medida, Automatización e IA",
        type: "image/png",
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

const SOCIAL_SAME_AS = [LINKEDIN_URL, GITHUB_URL].filter(Boolean) as string[];

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
      address: {
        "@type": "PostalAddress",
        addressCountry: "ES",
      },
      areaServed: [
        { "@type": "Country", name: "España" },
        { "@type": "Country", name: "México" },
        { "@type": "Country", name: "Argentina" },
        { "@type": "Country", name: "Colombia" },
        { "@type": "Country", name: "Chile" },
        { "@type": "Country", name: "Perú" },
      ],
      availableLanguage: { "@type": "Language", name: "Spanish", alternateName: "es" },
      founder: {
        "@id": `${SITE_URL}/#david`,
      },
      knowsAbout: [
        "Software a medida",
        "Automatización de procesos empresariales",
        "Inteligencia artificial para empresas",
        "Desarrollo SaaS",
        "Herramientas digitales a medida",
        "Plataformas tecnológicas",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de desarrollo tecnológico",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Software a medida",
              description:
                "Aplicaciones personalizadas para resolver problemas específicos de negocio",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Automatización de procesos",
              description:
                "Eliminamos tareas repetitivas y optimizamos procesos clave del negocio",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Plataformas SaaS",
              description:
                "Productos escalables, multitenant y preparados para crecer con tu negocio",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "IA aplicada al negocio",
              description:
                "Integración de inteligencia artificial para multiplicar resultados empresariales",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Herramientas internas",
              description:
                "Sistemas privados para equipos que centralizan la operativa y mejoran la eficiencia",
            },
          },
        ],
      },
      ...(SOCIAL_SAME_AS.length > 0 ? { sameAs: SOCIAL_SAME_AS } : {}),
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#david`,
      name: "David",
      jobTitle: "Desarrollador de software a medida e inteligencia artificial",
      description:
        "Fundador de WAI Code. Especializado en software a medida, automatización de procesos e inteligencia artificial aplicada a empresas. Trabaja en remoto con clientes de toda España y países hispanohablantes.",
      worksFor: { "@id": `${SITE_URL}/#organization` },
      knowsLanguage: { "@type": "Language", name: "Spanish", alternateName: "es" },
      image: `${SITE_URL}/images/david-founder.png`,
      url: SITE_URL,
      ...(SOCIAL_SAME_AS.length > 0 ? { sameAs: SOCIAL_SAME_AS } : {}),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "WAI Code",
      inLanguage: "es-ES",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
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
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        {children}
      </body>
    </html>
  );
}
