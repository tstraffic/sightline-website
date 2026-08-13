import { PRACTICES } from "@content/pages/practices";

/**
 * Main navigation. Engineering Services dropdown order per Copy Pass 1:
 * development → parking/access → modelling → construction → approvals.
 *
 * Draft-gated items carry `draft: true`; `footerOnly` items are reachable but
 * kept out of the header (see DECISIONS.md).
 */
export type NavItem = {
  label: string;
  href: string;
  draft?: boolean;
  /** Reachable page that stays out of the header nav (e.g. /team). */
  footerOnly?: boolean;
  children?: { label: string; href: string }[];
};

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Engineering services",
    href: PRACTICES.development.href,
    children: [
      { label: PRACTICES.development.label, href: PRACTICES.development.href },
      { label: "Parking and vehicle access", href: PRACTICES.parking.href },
      { label: PRACTICES.modelling.label, href: PRACTICES.modelling.href },
      { label: PRACTICES.construction.label, href: PRACTICES.construction.href },
      { label: PRACTICES.approvals.label, href: PRACTICES.approvals.href },
    ],
  },
  { label: "Sectors", href: "/sectors" },
  { label: "Projects", href: "/projects" },
  {
    label: "About us",
    href: "/about",
    children: [
      { label: "About the practice", href: "/about" },
      { label: "Team", href: "/team" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const CTA = {
  primary: { label: "Request a fee proposal", href: "/contact" },
  secondary: { label: "View our services", href: PRACTICES.development.href },
  contactLine: "Send us the drawings. We'll tell you what you need.",
} as const;
