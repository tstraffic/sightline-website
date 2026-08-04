import type { Metadata } from "next";
import Link from "next/link";
import { WORK_ZONE } from "@content/pages/work-zone-engineering";
import { TitleBlockCta } from "@/components/TitleBlockCta";

export const metadata: Metadata = {
  title: "Work Zone Engineering",
  description:
    "TGS, staging sets, TMPs, barrier design and site audits for works on live road networks — prepared to TCAWS, AS 1742.3 and the Austroads Guide to Temporary Traffic Management.",
};

/** Practice landing template — drawing-register treatment for the service list. */
export default function WorkZonePage() {
  return (
    <article>
      <div className="pagehead">
        <div className="dwgno">{WORK_ZONE.eyebrow}</div>
        <h1>{WORK_ZONE.h1}</h1>
        {WORK_ZONE.intro.map((p) => (
          <p key={p.slice(0, 24)} className="sub">
            {p}
          </p>
        ))}
      </div>

      <section className="section" aria-labelledby="reg">
        <div className="sec-head">
          <span className="sec-num">SHT 01</span>
          <h2 id="reg">Practice register — what we issue</h2>
          <span className="sec-rev">Pages 01–07</span>
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
              {WORK_ZONE.services.map((s) => (
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

      <TitleBlockCta
        label="Work zone engineering"
        heading="Send us the drawings. We'll tell you what you need."
        notes={["1. Site address", "2. Civil or architectural plans", "3. A description of the works"]}
      />
    </article>
  );
}
