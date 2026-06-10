import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

const TITLE = "WAI Code — Custom Software, Automation & AI for Businesses";
const DESCRIPTION =
  "Custom software, automation and AI for businesses. I build the exact technology solution you need: custom applications, SaaS and digital tools tailored to your company.";

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: "%s — WAI Code",
  },
  description: DESCRIPTION,
  keywords: [
    "custom software development",
    "business automation",
    "artificial intelligence for business",
    "SaaS development",
    "digital tools",
    "custom technology solutions",
  ],
  alternates: {
    canonical: "/en",
    languages: {
      es: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/en`,
    siteName: "WAI Code",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "WAI Code — Custom Software, Automation & AI",
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
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
