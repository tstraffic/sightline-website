import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { visibleCaseStudies } from "@content/pages/projects";
import { ProjectGallery } from "@/components/ProjectGallery";
import { TitleBlockCta } from "@/components/TitleBlockCta";
import { RelatedProjectGrid, TechnicalPageHead } from "@/components/InternalPageModules";
import { relatedProjects } from "@/lib/internalPageContent";

const projects = visibleCaseStudies(true);

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary.slice(0, 155),
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const related = relatedProjects(slug);

  return (
    <article>
      <TechnicalPageHead
        eyebrow={`Projects · ${project.sector.label}`}
        title={project.title}
        sub={project.location}
        sidecarLabel="Project register"
        rows={[
          { label: "Drawing status", value: project.drawingStatus },
          { label: "Deliverables shown", value: project.deliverables.join(" · ") },
          { label: "Service division", value: project.division.label },
          { label: "Location", value: project.location },
        ]}
        note="Project descriptions are limited to what is visible in the authorised drawing package."
        action={{ label: "View the service division", href: project.division.href }}
        className="project-detail-head"
      />

      <section className="section" aria-labelledby="drawing-package">
        <div className="sec-head">
          <span className="sec-num">SHT 01</span>
          <h2 id="drawing-package">Drawing package</h2>
          <span className="sec-rev">{project.drawingStatus}</span>
        </div>

        <div className="project-detail-layout">
          <ProjectGallery title={project.title} images={project.images} />

          <aside className="project-brief">
            <span className="project-brief-label">Project brief</span>
            <h2>What the drawings show</h2>
            <p>{project.summary}</p>

            <h3>Our work included</h3>
            <ul className="dashlist">
              {project.workIncluded.map((item) => (
                <li key={item}><p>{item}</p></li>
              ))}
            </ul>

            <div className="project-brief-links">
              <span>Sector</span>
              <Link href={project.sector.href}>{project.sector.label} →</Link>
              <span>Service division</span>
              <Link href={project.division.href}>{project.division.label} →</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" aria-labelledby="project-register-details">
        <div className="sec-head">
          <span className="sec-num">SHT 02</span>
          <h2 id="project-register-details">Project register</h2>
          <span className="sec-rev">Selected work</span>
        </div>
        <div className="project-facts">
          <div>
            <span>Location</span>
            <b>{project.location}</b>
          </div>
          <div>
            <span>Drawing status</span>
            <b>{project.drawingStatus}</b>
          </div>
          <div>
            <span>Deliverables shown</span>
            <b>{project.deliverables.join(" · ")}</b>
          </div>
          <div>
            <span>Services</span>
            <div className="project-service-links">
              {project.servicesDelivered.map((service) => (
                <Link key={service.href} href={service.href}>{service.label} →</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedProjectGrid projects={related} />

      <TitleBlockCta
        label="Your project"
        heading="Send us the drawings. We'll tell you what you need."
        notes={["1. Site address", "2. Plans, if they exist", "3. A description of the works"]}
      />
    </article>
  );
}
