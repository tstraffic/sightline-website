import type { Metadata } from "next";
import { Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Ruler } from "@/components/Ruler";
import { PageTrail } from "@/components/PageTrail";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-hanken",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sightlinetraffic.com.au"),
  title: {
    default: "Sightline Traffic Engineers | Designed for approval. Built for construction.",
    template: "%s | Sightline Traffic Engineers",
  },
  description:
    "Independent traffic engineering for development approvals, parking and access, network performance and construction delivery across NSW and the ACT.",
  openGraph: {
    title: "Sightline Traffic Engineers | Designed for approval. Built for construction.",
    description:
      "Independent traffic engineering consultancy. Reports, assessments and drawings that help projects move from concept and consent through to construction.",
    siteName: "Sightline Traffic Engineers",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sightline Traffic Engineers | Designed for approval. Built for construction.",
    description:
      "Independent traffic engineering for development approvals, parking and access, network performance and construction delivery across NSW and the ACT.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${hanken.variable} ${plexMono.variable}`}>
      <body>
        {/* The whole site reads as one drawing sheet (Title Block system) */}
        <div className="sheet">
          <Ruler />
          <SiteHeader />
          <PageTrail />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
