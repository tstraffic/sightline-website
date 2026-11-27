/**
 * Practice definitions - single source for labels and URLs.
 *
 * Copy Pass 1 (Saadat, 5 Aug 2026) restructured the hierarchy so engineering
 * leads and approvals support: development traffic → parking/access/swept
 * paths → modelling/network → construction traffic, with approvals demoted
 * beneath the four practices. Old practice URLs 301-redirect (next.config.ts);
 * individual service-page URLs are unchanged.
 */
export const PRACTICES = {
  development: {
    label: "Development traffic engineering",
    href: "/development-traffic-engineering",
    /** Browser/search title: service + place, under 48 characters before the suffix (D4). */
    metaTitle: "Development Traffic Engineering Sydney & NSW",
  },
  parking: {
    label: "Parking, access and swept paths",
    href: "/parking-access-swept-paths",
    metaTitle: "Parking, Access & Swept Path Analysis Sydney",
  },
  modelling: {
    label: "Traffic modelling and network assessment",
    href: "/traffic-modelling-network-assessment",
    metaTitle: "Traffic Modelling & Network Assessment NSW",
  },
  construction: {
    label: "Construction traffic engineering",
    href: "/construction-traffic-engineering",
    metaTitle: "Construction Traffic Engineering Sydney & NSW",
  },
  approvals: {
    label: "Approvals and delivery support",
    href: "/approvals",
    metaTitle: "Traffic Approvals & Delivery Support NSW",
  },
} as const;
