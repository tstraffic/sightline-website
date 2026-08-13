import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TitleBlockCta } from "@/components/TitleBlockCta";
import { TechnicalPageHead } from "@/components/InternalPageModules";
import { visibleCaseStudies } from "@content/pages/projects";

const projects = visibleCaseStudies(true);

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected Sightline construction traffic engineering projects, including traffic staging plans, detour plans, traffic guidance schemes and barrier cross sections.",
};

export default function ProjectsPage() {
  return (
    <article>
      <TechnicalPageHead
        eyebrow="Projects · Selected drawing packages"
        title="The work speaks in drawings, not adjectives."
        sub="A selection of traffic staging, detour, traffic guidance and barrier drawings — each paired with the sector, service division and a concise account of what the package shows."
        sidecarLabel="Project evidence register"
        rows={[
          { label: "Drawing sets", value: `${projects.length} authorised project packages` },
          { label: "Material", value: "Traffic staging, detours, TGS and barrier sections" },
          { label: "Project information", value: "Limited to what is visible in the authorised drawings" },
          { label: "Coverage", value: "NSW" },
        ]}
        note="No client outcome or approval result is inferred from the drawing material."
        action={{ label: "Discuss a similar project", href: "/contact" }}
        className="projects-pagehead"
      />

      <section className="section" aria-labelledby="selected-projects">
        <div className="sec-head">
          <span className="sec-num">SHT 01</span>
          <h2 id="selected-projects">Selected work</h2>
          <span className="sec-rev">5 authorised drawing sets</span>
        </div>

        <div className="project-register">
          {projects.map((project, index) => (
            <article className="project-register-item" key={project.slug}>
              <Link className="project-register-preview" href={`/projects/${project.slug}`}>
                <Image
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 58vw"
                  className="project-register-image"
                />
                <span className="project-register-sheet">PRJ {String(index + 1).padStart(2, "0")}</span>
                {project.images.length > 1 && (
                  <span className="project-register-count">{project.images.length} sheets</span>
                )}
              </Link>

              <div className="project-register-copy">
                <div className="project-tags">
                  <Link href={project.sector.href}>{project.sector.label}</Link>
                  <Link href={project.division.href}>{project.division.label}</Link>
                </div>
                <h2>
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </h2>
                <p>{project.summary}</p>
                <div className="project-register-meta">
                  <span>{project.location}</span>
                  <span>{project.drawingStatus}</span>
                </div>
                <Link href={`/projects/${project.slug}`} className="project-register-link">
                  View project drawings →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <TitleBlockCta
        label="Your project"
        heading="Send us the drawings. We'll tell you what you need."
        notes={["1. Site address", "2. Plans, if they exist", "3. A description of the works"]}
      />
    </article>
  );
}
