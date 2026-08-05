import type { Metadata } from "next";
import { Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Ruler } from "@/components/Ruler";
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
    default: "Sightline Traffic Engineers | Designed to standard.",
    template: "%s | Sightline Traffic Engineers",
  },
  description:
    "Independent traffic and transport engineering for civil, infrastructure and development projects across NSW and the ACT.",
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
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
