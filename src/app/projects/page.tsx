import type { Metadata } from "next";
import Link from "next/link";
import { TitleBlockCta } from "@/components/TitleBlockCta";
import { visibleCaseStudies } from "@content/pages/projects";

/** Register body: published (and, in dev only, sample) entries — else the honest empty state. */
function Register() {
  const entries = visibleCaseStudies(process.env.NODE_ENV === "production");
  if (entries.length === 0) {
    return (
      <div className="pad">
        <p className="fine">
          NO ENTRIES PUBLISHED YET — PERMISSIONS IN PROGRESS. IN THE MEANTIME, THE SERVICE
          PAGES DESCRIBE EXACTLY WHAT WE DELIVER.
        </p>
      </div>
    );
  }
  return (
    <div className="tablewrap">
      <table className="register">
        <thead>
          <tr>
            <th>Client type</th>
            <th>Project</th>
            <th className="hide-m">Problem</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((c) => (
            <tr key={c.slug}>
              <td className="dwg">{c.clientType}</td>
              <td className="ttl">
                <Link href={`/projects/${c.slug}`}>{c.title}</Link>
              </td>
              <td className="des hide-m">{c.problem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected Sightline projects — case studies naming the practice and services used. Content is added as client permissions are confirmed.",
};

/**
 * Projects index — honest empty state until client permissions are confirmed
 * (00-INSTRUCTIONS: build the template now, content follows; no invented case
 * studies under any circumstances). The full case-study template ships in
 * Phase 3.
 */
export default function ProjectsPage() {
  return (
    <article>
      <div className="pagehead">
        <div className="dwgno">Projects · Case-study register</div>
        <h1>The work speaks in drawings, not adjectives.</h1>
        <p className="sub">
          Case studies are being prepared and will appear here as client permissions are
          confirmed — each one naming the problem, the constraints, the services delivered and
          the outcome.
        </p>
      </div>

      <section className="section" aria-label="Case-study register">
        <div className="sec-head">
          <span className="sec-num">SHT 01</span>
          <h2>Case-study register</h2>
          <span className="sec-rev">Awaiting client permissions</span>
        </div>
        <Register />
      </section>

      <TitleBlockCta
        label="Your project"
        heading="Send us the drawings. We'll tell you what you need."
        notes={["1. Site address", "2. Plans, if they exist", "3. A description of the works"]}
      />
    </article>
  );
}
