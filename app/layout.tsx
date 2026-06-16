import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.home-styloschool.cl",
  ),
  title: {
    default: "Uniformes Escolares - Styloschool",
    template: "%s | Styloschool",
  },
  description: SITE.description,
  keywords: [
    "styloschool",
    "uniformes escolares",
    "uniformes colegio las condes",
    "Las Condes",
    "Santiago",
  ],
  icons: { icon: "/img/Stylos icon.png" },
  openGraph: {
    title: "Styloschool - Uniformes escolares",
    description: SITE.description,
    images: ["/img/Stylos icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={nunito.variable} style={{ colorScheme: "light" }}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
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
