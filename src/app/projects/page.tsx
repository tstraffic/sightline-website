import type { Metadata } from "next";
import { TitleBlockCta } from "@/components/TitleBlockCta";

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
        <div className="pad">
          <p className="fine">
            NO ENTRIES PUBLISHED YET — PERMISSIONS IN PROGRESS. IN THE MEANTIME, THE SERVICE
            PAGES DESCRIBE EXACTLY WHAT WE DELIVER.
          </p>
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
