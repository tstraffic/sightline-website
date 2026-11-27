import { SITE } from "@content/site";

/**
 * ProfessionalService structured data for the homepage (punch list D6).
 * `sameAs` (LinkedIn, Google Business Profile) is added under D22 once the
 * listings exist. Validate with Google's Rich Results Test after deploy.
 */
export function BusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/brand/Sightline_Logo_Horizontal_Primary.svg`,
    image: `${SITE.url}/opengraph-image`,
    telephone: SITE.phoneE164,
    email: SITE.email,
    description:
      "Independent traffic engineering for development approvals, parking and access, network performance and construction delivery across NSW and the ACT.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suite 413, 388 George St",
      addressLocality: "Sydney",
      addressRegion: "NSW",
      postalCode: "2000",
      addressCountry: "AU",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "New South Wales" },
      { "@type": "AdministrativeArea", name: "Australian Capital Territory" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}
