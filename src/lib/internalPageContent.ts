import type { ServicePageData } from "@content/pages/types";
import type { LandingData } from "@content/pages/landings";
import type { SectorData } from "@content/pages/sectors";
import { CASE_STUDIES, type CaseStudy } from "@content/pages/projects";
import { PRACTICES } from "@content/pages/practices";
import type { SidecarRow } from "@/components/InternalPageModules";

const PRACTICE_CONTEXT: Record<string, { usedFor: string; inputs: string; output: string }> = {
  [PRACTICES.development.href]: {
    usedFor: "Development applications and authority responses",
    inputs: "Site, plans and development description",
    output: "Assessment and supporting technical report",
  },
  [PRACTICES.parking.href]: {
    usedFor: "Parking, access, loading and vehicle movement",
    inputs: "Architectural or civil plans and design vehicles",
    output: "Compliance review, drawings and design advice",
  },
  [PRACTICES.modelling.href]: {
    usedFor: "Intersection and network performance testing",
    inputs: "Project demand, surveys and network information",
    output: "Modelled scenarios and technical findings",
  },
  [PRACTICES.construction.href]: {
    usedFor: "Construction staging and temporary traffic arrangements",
    inputs: "Civil drawings, methodology and programme",
    output: "Controlled plans, schemes and management documents",
  },
  [PRACTICES.approvals.href]: {
    usedFor: "Road, council and stakeholder approval pathways",
    inputs: "Works scope, dates, plans and authority references",
    output: "Coordinated submissions and supporting documentation",
  },
};

export function serviceSidecar(data: ServicePageData): SidecarRow[] {
  const context = PRACTICE_CONTEXT[data.practice.href] ?? PRACTICE_CONTEXT[PRACTICES.development.href];
  return [
    { label: "Used for", value: context.usedFor },
    { label: "Typical inputs", value: context.inputs },
    { label: "Deliverable", value: data.title },
    { label: "Coverage", value: "NSW & ACT" },
  ];
}

export function landingSidecar(data: LandingData): SidecarRow[] {
  return [
    { label: "Practice register", value: `${data.services.length} current service pages` },
    { label: "Project stage", value: "Approval through construction delivery" },
    { label: "Typical inputs", value: "Site, plans and project requirements" },
    { label: "Coverage", value: "NSW & ACT" },
  ];
}

export function sectorSidecar(data: SectorData): SidecarRow[] {
  return [
    { label: "Typical starting point", value: data.routes[0]?.label ?? "Project review" },
    { label: "What to send", value: data.notes.map((item) => item.replace(/^\d+\.\s*/, "")).join(" · ") },
    { label: "Service routes", value: `${data.routes.length} relevant starting points` },
    { label: "Coverage", value: "NSW & ACT" },
  ];
}

export function projectsForService(data: ServicePageData): CaseStudy[] {
  const href = `/${data.slug}`;
  return CASE_STUDIES.filter((project) =>
    project.servicesDelivered.some((service) => service.href === href),
  );
}

export function projectsForPractice(href: string): CaseStudy[] {
  return CASE_STUDIES.filter((project) => project.division.href === href);
}

export function projectsForSector(slug: string): CaseStudy[] {
  return CASE_STUDIES.filter((project) => project.sector.href === `/sectors/${slug}`);
}

export function relatedProjects(currentSlug: string): CaseStudy[] {
  const current = CASE_STUDIES.find((project) => project.slug === currentSlug);
  if (!current) return [];

  return CASE_STUDIES.filter((project) =>
    project.slug !== currentSlug &&
    (project.sector.href === current.sector.href || project.division.href === current.division.href),
  ).slice(0, 3);
}
