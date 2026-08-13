import Link from "next/link";
import type { LandingData } from "@content/pages/landings";
import { TitleBlockCta } from "./TitleBlockCta";
import {
  ProcessStrip,
  ProjectEvidence,
  STANDARD_PROJECT_STEPS,
  TechnicalPageHead,
} from "./InternalPageModules";
import { landingSidecar, projectsForPractice } from "@/lib/internalPageContent";

/** Practice/section landing template — intro + drawing-register of services. */
export function PracticeLanding({ data, href }: { data: LandingData; href: string }) {
  const projectEvidence = projectsForPractice(href)[0];

  return (
    <article>
      <TechnicalPageHead
        eyebrow={data.eyebrow}
        title={data.h1}
        sub={data.intro}
        sidecarLabel="Practice at a glance"
        rows={landingSidecar(data)}
        note="The required deliverables are confirmed against the project, consent authority and delivery stage."
        action={{ label: "Request a fee proposal", href: "/contact" }}
      />

      {data.scope && data.scope.length > 0 && (
        <section className="section" aria-labelledby="scope">
          <div className="sec-head">
            <span className="sec-num">SHT 01</span>
            <h2 id="scope">{data.scopeHeading ?? "Also within this practice"}</h2>
          </div>
          <div className="pad">
            <ul className="dashlist max-w-[68ch]">
              {data.scope.map((s) => (
                <li key={s}>
                  <p>{s}</p>
                </li>
              ))}
            </ul>
            <p className="fine mt-5">
              Scoped on request — tell us what the condition or authority is asking for.
            </p>
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="reg">
        <div className="sec-head">
          <span className="sec-num">{data.scope && data.scope.length > 0 ? "SHT 02" : "SHT 01"}</span>
          <h2 id="reg">{data.registerTitle}</h2>
          <span className="sec-rev">{data.registerRev}</span>
        </div>
        <div className="tablewrap">
          <table className="register">
            <thead>
              <tr>
                <th>Ref</th>
                <th>Deliverable</th>
                <th className="hide-m">The problem it answers</th>
              </tr>
            </thead>
            <tbody>
              {data.services.map((s) => (
                <tr key={s.ref}>
                  <td className="dwg">{s.ref}</td>
                  <td className="ttl">
                    <Link href={s.href}>{s.title}</Link>
                  </td>
                  <td className="des hide-m">{s.line}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {projectEvidence && (
        <ProjectEvidence
          project={projectEvidence}
          heading="Technical documentation shown in its project context."
        />
      )}

      <ProcessStrip heading="From project question to controlled issue" steps={[...STANDARD_PROJECT_STEPS]} />

      <TitleBlockCta
        label={data.h1.length > 40 ? "Start here" : data.h1}
        heading="Send us the drawings. We'll tell you what you need."
        notes={["1. Site address", "2. Plans, if they exist", "3. A description of the works"]}
      />
    </article>
  );
}
