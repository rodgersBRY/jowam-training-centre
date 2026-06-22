import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jowam Coffee Training Centre",
    template: "%s | Jowam Coffee Training Centre",
  },
  description:
    "Flexible barista training in Nairobi, Kenya — daytime classes, evening online theory, and Saturday hands-on practicals.",
  keywords: [
    "barista training Kenya",
    "coffee academy Nairobi",
    "barista course Kenya",
    "coffee training school Nairobi",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Jowam Coffee Training Centre",
    description:
      "Flexible barista training in Nairobi, Kenya — daytime classes, evening online theory, and Saturday hands-on practicals.",
    address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
  };

  return (
    <html lang="en" className={jakarta.variable}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
