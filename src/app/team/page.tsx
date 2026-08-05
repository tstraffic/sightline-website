import type { Metadata } from "next";
import { PEOPLE, QUALIFICATION_REGISTER, TEAM_INTRO, HIRING } from "@content/pages/team";
import { TitleBlockCta } from "@/components/TitleBlockCta";
import { SITE } from "@content/site";

export const metadata: Metadata = {
  title: "Team — Drawn & Checked By",
  description:
    "Every Sightline report is prepared and signed by a named engineer, and every scheme by a named designer. Meet the register of people.",
};

/** /team — the people in detail (About is the story). Title Block treatment. */
export default function TeamPage() {
  return (
    <article>
      <div className="pagehead">
        <div className="dwgno">{TEAM_INTRO.eyebrow}</div>
        <h1>{TEAM_INTRO.heading}</h1>
        <p className="sub">{TEAM_INTRO.sub}</p>
      </div>

      <section className="section" aria-labelledby="people">
        <div className="sec-head">
          <span className="sec-num">SHT 02</span>
          <h2 id="people">The people</h2>
          <span className="sec-rev">One profile per hire</span>
        </div>
        {PEOPLE.map((p) => (
          <div key={p.name} className="split w-7-5" style={{ borderBottom: "1px solid var(--rule-soft)" }}>
            <div className="panel">
              <span className="cell-tag">{p.role}</span>
              <h3 className="mt-2 text-2xl">{p.name}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.creds.map((c) => (
                  <span key={c} className="file-chip !m-0">{c}</span>
                ))}
              </div>
              <p className="mt-4 max-w-[62ch] leading-relaxed text-survey">{p.bio}</p>
            </div>
            <div className="panel-side">
              {/* Photo slot — renders from /public/team/ once supplied */}
              <div
                className="mb-5 flex min-h-40 items-end justify-center border border-(--rule) bg-(--sheet-deep) p-3 font-mono text-[0.56rem] uppercase tracking-[0.2em] text-survey"
                role="img"
                aria-label={`${p.name} — photo to come`}
              >
                Photo — on site or at the board
              </div>
              {p.signs.map((s) => (
                <div key={s.label} className="spec-row">
                  <b>{s.label}</b>
                  <span>
                    <strong>{s.value}</strong>
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="section" aria-labelledby="quals">
        <div className="sec-head">
          <span className="sec-num">SHT 03</span>
          <h2 id="quals">Qualification register</h2>
          <span className="sec-rev">Certificates of currency on request</span>
        </div>
        <div className="tablewrap">
          <table className="register">
            <thead>
              <tr>
                <th>Ref</th>
                <th>Held by</th>
                <th className="hide-m">Qualification / registration</th>
                <th>Covers</th>
              </tr>
            </thead>
            <tbody>
              {QUALIFICATION_REGISTER.map((q) => (
                <tr key={q.ref}>
                  <td className="dwg">{q.ref}</td>
                  <td className="ttl">{q.who}</td>
                  <td className="des hide-m">{q.qual}</td>
                  <td className="des">{q.covers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" aria-labelledby="hiring">
        <div className="sec-head">
          <span className="sec-num">SHT 04</span>
          <h2 id="hiring">Open positions</h2>
          <span className="sec-rev">We hire for care</span>
        </div>
        <div className="split">
          <div className="panel">
            <h3 className="max-w-md text-balance text-xl">{HIRING.heading}</h3>
            <p className="mt-3 max-w-md leading-relaxed text-survey">{HIRING.body}</p>
            <a
              className="btn btn-brass mt-5"
              href={`mailto:${SITE.email}?subject=Joining%20the%20Sightline%20team`}
            >
              Introduce yourself →
            </a>
          </div>
          <div className="panel-side">
            {HIRING.details.map(([label, value]) => (
              <div key={label} className="spec-row">
                <b>{label}</b>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TitleBlockCta
        label="Work with us"
        heading="Meet us the useful way — on your project."
        notesLabel="Principle"
        notes={["The engineer who briefs you", "is the engineer who signs", "the report."]}
      />
    </article>
  );
}
