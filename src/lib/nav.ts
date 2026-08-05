/**
 * Main navigation per 00-INSTRUCTIONS: Home / Engineering Services (dropdown:
 * three practices) / Approvals / Sectors / Projects / About / Contact.
 *
 * Draft-gated items (About, page 28) carry `draft: true` and are excluded
 * from the rendered nav until their copy is approved — CLAUDE.md's draft rule
 * overrides the seven-item listing. See DECISIONS.md.
 */
export type NavItem = {
  label: string;
  href: string;
  draft?: boolean;
  /** Reachable page that stays out of the header nav (e.g. /team — linked from About + footer; Saadat, 4 Aug 2026: "About is the story, Team is the people in detail"). */
  footerOnly?: boolean;
  children?: { label: string; href: string }[];
};

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Engineering services",
    href: "/work-zone-engineering",
    // Order per Saadat (5 Aug 2026): dev → work zone → transport
    children: [
      { label: "Development & parking engineering", href: "/development-parking-engineering" },
      { label: "Work zone engineering", href: "/work-zone-engineering" },
      { label: "Transport & network engineering", href: "/transport-network-engineering" },
    ],
  },
  { label: "Approvals", href: "/approvals" },
  { label: "Sectors", href: "/sectors" },
  { label: "Projects", href: "/projects" },
  // Saadat (4 Aug 2026): "about us should be at the nav bar — they need to know
  // who we are." Built live from approved/published copy; credentials still gate on D6.
  { label: "About", href: "/about" },
  { label: "Team", href: "/team", footerOnly: true },
  { label: "Contact", href: "/contact" },
];

export const CTA = {
  primary: { label: "Request a fee proposal", href: "/contact" },
  secondary: { label: "View our services", href: "/work-zone-engineering" },
  contactLine: "Send us the drawings. We'll tell you what you need.",
} as const;
