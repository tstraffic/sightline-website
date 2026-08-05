import type { MetadataRoute } from "next";
import { SERVICES } from "@content/pages/services-index";
import { SECTORS } from "@content/pages/sectors";
import { PRACTICE_LANDINGS } from "@content/pages/landings";

/** Sitemap — live pages only. Drafts (08, 12, 13, 21) and the dev-only
 *  sample case study are excluded by construction. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sightlinetraffic.com.au";
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
  return [...statics, ...services, ...sectors].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("sectors") ? 0.6 : 0.8,
  }));
}
