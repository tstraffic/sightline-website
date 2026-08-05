/**
 * Practice definitions — single source for labels and URLs.
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
  },
  parking: {
    label: "Parking, access and swept paths",
    href: "/parking-access-swept-paths",
  },
  modelling: {
    label: "Traffic modelling and network assessment",
    href: "/traffic-modelling-network-assessment",
  },
  construction: {
    label: "Construction traffic engineering",
    href: "/construction-traffic-engineering",
  },
  approvals: {
    label: "Approvals and delivery support",
    href: "/approvals",
  },
} as const;
