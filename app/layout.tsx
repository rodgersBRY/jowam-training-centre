import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { site } from "@/lib/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, organizationSchema } from "@/components/seo/JsonLd";
import { Umami } from "@/components/analytics/Umami";
import "./globals.css";

// Self-hosted variable fonts via next/font, font-display: swap, preloaded.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  // Google Search Console ownership — set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  // to the token Google gives you (the "HTML tag" verification method).
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable}`}>
      <body>
        <JsonLd data={organizationSchema()} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Umami />
      </body>
    </html>
  );
}
