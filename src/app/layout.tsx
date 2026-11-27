import type { Metadata } from "next";
import { Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Ruler } from "@/components/Ruler";
import { PageTrail } from "@/components/PageTrail";
import { LinkTracking } from "@/components/LinkTracking";
import { SITE } from "@content/site";
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

/**
 * Site-wide metadata (punch list D1, D2, D4, D5).
 *  - metadataBase is the www origin, so every relative URL resolves there.
 *  - alternates.canonical "./" gives every page a canonical of its own path;
 *    pages that set their own canonical override it.
 *  - openGraph/twitter carry no title or description here on purpose: each
 *    page's own <title> and description flow into og:title / og:description.
 *    The share image comes from src/app/opengraph-image.tsx.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `Traffic Engineers Sydney & NSW | ${SITE.shortName}`,
    template: `%s | ${SITE.shortName}`,
  },
  description:
    "Independent traffic engineering for development approvals, parking and access, network performance and construction delivery across NSW and the ACT.",
  alternates: { canonical: "./" },
  openGraph: {
    url: "./",
    siteName: SITE.name,
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
        {/* Cookieless analytics (D7); the dashboard toggle on Vercel must be on. */}
        <Analytics />
        <LinkTracking />
      </body>
    </html>
  );
}
