import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import Script from "next/script";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE } from "@/lib/site";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const viewport: Viewport = {
  colorScheme: "only light",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? SITE.url),
  title: {
    default: "Uniformes Escolares - Styloschool",
    template: "%s | Styloschool",
  },
  description: SITE.description,
  keywords: [
    "styloschool",
    "uniformes escolares",
    "uniformes colegio las condes",
    "uniformes Las Condes",
    "uniformes Santiago",
    "Las Condes",
    "Santiago",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: { icon: "/img/Stylos icon.png" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: SITE.url,
    siteName: SITE.name,
    title: "Styloschool - Uniformes escolares",
    description: SITE.description,
    images: [
      {
        url: "/img/Stylos icon.png",
        alt: "Styloschool - Uniformes escolares",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Styloschool - Uniformes escolares",
    description: SITE.description,
    images: ["/img/Stylos icon.png"],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phones[0],
  image: `${SITE.url}/img/Stylos%20icon.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Apoquindo 6415, Local 111 - piso 4",
    addressLocality: "Las Condes",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  sameAs: [SITE.social.facebook, SITE.social.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={nunito.variable}
      style={{ colorScheme: "only light" }}
    >
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppButton />
        <Script
          src="https://kit.fontawesome.com/56e753ffcd.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
