import type { MetadataRoute } from "next";
import { SERVICES } from "@content/pages/services-index";
import { SECTORS } from "@content/pages/sectors";
import { PRACTICE_LANDINGS } from "@content/pages/landings";
import { visibleCaseStudies } from "@content/pages/projects";
import { SITE } from "@content/site";

/** Sitemap - live pages only, on the www host (D1, D3). Drafts (08, 12, 13,
 *  21), the capability-statement cover and the thank-you page are excluded. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const statics = [
    "",
    ...Object.keys(PRACTICE_LANDINGS).map((s) => `/${s}`),
    "/approvals",
    "/sectors",
    "/projects",
    "/about",
    "/team",
    "/contact",
  ];
  const services = Object.keys(SERVICES).map((s) => `/${s}`);
  const sectors = Object.keys(SECTORS).map((s) => `/sectors/${s}`);
  const projects = visibleCaseStudies(true).map((p) => `/projects/${p.slug}`);
  return [...statics, ...services, ...sectors, ...projects].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("sectors") || path.includes("projects") ? 0.6 : 0.8,
  }));
}
