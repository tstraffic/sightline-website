import Link from "next/link";
import type { LandingData } from "@content/pages/landings";
import { TitleBlockCta } from "./TitleBlockCta";

/** Practice/section landing template — intro + drawing-register of services. */
export function PracticeLanding({ data }: { data: LandingData }) {
  return (
    <article>
      <div className="pagehead">
        <div className="dwgno">{data.eyebrow}</div>
        <h1>{data.h1}</h1>
        {data.intro.map((p) => (
          <p key={p.slice(0, 24)} className="sub">
            {p}
          </p>
        ))}
      </div>

      <section className="section" aria-labelledby="reg">
        <div className="sec-head">
          <span className="sec-num">SHT 01</span>
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

      <TitleBlockCta
        label={data.h1.length > 40 ? "Start here" : data.h1}
        heading="Send us the drawings. We'll tell you what you need."
        notes={["1. Site address", "2. Plans, if they exist", "3. A description of the works"]}
      />
    </article>
  );
}
