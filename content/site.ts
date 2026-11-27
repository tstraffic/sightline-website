/**
 * Site-wide constants. Contact details carried from the LIVE site
 * (sightlinetraffic.com.au - client-published, provenance same as team.ts).
 */
export const SITE = {
  name: "Sightline Traffic Engineers",
  legalName: "Sightline Traffic Engineers Pty Ltd",
  /** Short name used in page-title suffixes ("… | Sightline"). */
  shortName: "Sightline",
  /** Canonical origin. The bare domain redirects here, so every absolute URL
   *  the site emits (canonical, sitemap, robots, og:url, schema) uses www. */
  url: "https://www.sightlinetraffic.com.au",
  /** Sole marketing tagline (brand v3.2 / Copy Pass 1). */
  tagline: "Designed for approval. Built for construction.",
  phone: "1800 008 782",
  phoneHref: "tel:1800008782",
  /** E.164 form for structured data. */
  phoneE164: "+611800008782",
  email: "plans@sightlinetraffic.com.au",
  address: "Suite 413, 388 George St, Sydney NSW 2000",
  hours: "Mon–Fri, 8am–5pm",
  abn: "16 699 960 668",
} as const;
