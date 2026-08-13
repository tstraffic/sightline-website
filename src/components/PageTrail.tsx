"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRACTICES } from "@content/pages/practices";

type TrailItem = { label: string; href: string };

const LABELS: Record<string, string> = {
  "/about": "About the practice",
  "/team": "Team",
  "/contact": "Contact",
  "/projects": "Projects",
  "/sectors": "Sectors",
  "/approvals": "Approvals and delivery support",
  "/capability-statement": "Capability statement",
  "/development-traffic-engineering": PRACTICES.development.label,
  "/parking-access-swept-paths": PRACTICES.parking.label,
  "/traffic-modelling-network-assessment": PRACTICES.modelling.label,
  "/construction-traffic-engineering": PRACTICES.construction.label,
  "/traffic-impact-statement": "Traffic impact statement",
  "/traffic-impact-assessment": "Traffic impact assessment",
  "/as2890-parking-compliance": "AS 2890 parking compliance",
  "/carpark-demand-assessment": "Car park demand assessment",
  "/vehicle-access-assessment": "Vehicle access assessment",
  "/swept-path-analysis": "Swept-path analysis",
  "/driveway-design": "Driveway design",
  "/sight-line-assessment": "Sight-line assessment",
  "/parking-traffic-surveys": "Parking and traffic surveys",
  "/traffic-modelling": "Traffic modelling",
  "/sidra-intersection-analysis": "SIDRA intersection analysis",
  "/traffic-management-plans": "Traffic management plans",
  "/tgs-traffic-control-plans": "Traffic guidance schemes",
  "/traffic-staging-plans": "Traffic staging plans",
  "/complex-multi-stage-tmp": "Complex and multi-stage TMPs",
  "/temporary-barrier-design": "Temporary barrier design",
  "/site-audits": "Site audits",
  "/road-occupancy-licence": "Road occupancy licence",
  "/council-permits": "Council permits",
  "/sta-police-approvals": "STA and police approvals",
  "/community-engagement": "Community engagement",
};

const PARKING_ROUTES = new Set([
  "/as2890-parking-compliance",
  "/carpark-demand-assessment",
  "/vehicle-access-assessment",
  "/swept-path-analysis",
  "/driveway-design",
  "/sight-line-assessment",
  "/parking-traffic-surveys",
]);

const MODELLING_ROUTES = new Set([
  "/traffic-modelling",
  "/sidra-intersection-analysis",
]);

const CONSTRUCTION_ROUTES = new Set([
  "/traffic-management-plans",
  "/tgs-traffic-control-plans",
  "/traffic-staging-plans",
  "/complex-multi-stage-tmp",
  "/temporary-barrier-design",
  "/site-audits",
]);

const APPROVAL_ROUTES = new Set([
  "/road-occupancy-licence",
  "/council-permits",
  "/sta-police-approvals",
  "/community-engagement",
]);

function titleFromPath(pathname: string) {
  if (LABELS[pathname]) return LABELS[pathname];

  const segment = pathname.split("/").filter(Boolean).at(-1) ?? "Page";
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function parentFor(pathname: string): TrailItem {
  if (pathname === "/team") return { label: "About us", href: "/about" };
  if (pathname.startsWith("/projects/")) return { label: "Projects", href: "/projects" };
  if (pathname.startsWith("/sectors/")) return { label: "Sectors", href: "/sectors" };
  if (PARKING_ROUTES.has(pathname)) return { label: "Parking, access and swept paths", href: PRACTICES.parking.href };
  if (MODELLING_ROUTES.has(pathname)) return { label: "Traffic modelling and network assessment", href: PRACTICES.modelling.href };
  if (CONSTRUCTION_ROUTES.has(pathname)) return { label: "Construction traffic engineering", href: PRACTICES.construction.href };
  if (APPROVAL_ROUTES.has(pathname)) return { label: "Approvals and delivery support", href: PRACTICES.approvals.href };
  if (pathname === "/traffic-impact-statement" || pathname === "/traffic-impact-assessment") {
    return { label: "Development traffic engineering", href: PRACTICES.development.href };
  }
  return { label: "Home", href: "/" };
}

export function PageTrail() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const parent = parentFor(pathname);
  const current = titleFromPath(pathname);
  const parentIsHome = parent.href === "/";

  return (
    <nav className="page-trail" aria-label="Page navigation">
      <Link className="page-back" href={parent.href}>
        <span aria-hidden="true">←</span> Back
      </Link>
      <ol className="page-crumbs" aria-label="Breadcrumb">
        <li className="page-crumb-home">
          {parentIsHome ? <span>Home</span> : <Link href="/">Home</Link>}
        </li>
        {!parentIsHome && (
          <li>
            <Link href={parent.href}>{parent.label}</Link>
          </li>
        )}
        <li className="page-crumb-current" aria-current="page">{current}</li>
      </ol>
    </nav>
  );
}
