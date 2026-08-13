import type { Metadata } from "next";
import {
  HIRING,
  PEOPLE,
  QUALIFICATION_REGISTER,
  TEAM_APPROACH,
  TEAM_INTRO,
} from "@content/pages/team";
import { TitleBlockCta } from "@/components/TitleBlockCta";
import { SITE } from "@content/site";

export const metadata: Metadata = {
  title: "Our team",
  description:
    "Meet the Sightline team working across traffic engineering, transport planning, construction delivery and project coordination.",
};

/** /team — detailed people profiles; /about carries the wider practice story. */
export default function TeamPage() {
  return (
    <article>
      <div className="pagehead team-pagehead">
        <div className="dwgno">{TEAM_INTRO.eyebrow}</div>
        <h1>{TEAM_INTRO.heading}</h1>
        <p className="sub">{TEAM_INTRO.sub}</p>
        <p className="about-tagline">{TEAM_INTRO.tagline}</p>
      </div>

      <section className="section" aria-labelledby="team-approach">
        <div className="sec-head">
          <span className="sec-num">SHT 02</span>
          <h2 id="team-approach">How the team works</h2>
          <span className="sec-rev">Clear roles · direct access</span>
        </div>
        <div className="cellgrid cols-3 team-approach">
          {TEAM_APPROACH.map((item) => (
            <div className="cell" key={item.ref}>
              <span className="cell-tag">{item.ref}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="people">
        <div className="sec-head">
          <span className="sec-num">SHT 03</span>
          <h2 id="people">The people</h2>
          <span className="sec-rev">Named responsibility</span>
        </div>
        <div className="team-profiles">
          {PEOPLE.map((person, index) => (
            <article key={person.name} className="team-profile split w-7-5">
              <div className="panel team-profile-main">
                <div className="team-profile-ref">PERSON {String(index + 1).padStart(2, "0")}</div>
                <span className="cell-tag">{person.role}</span>
                <h3>{person.name}</h3>
                <div className="team-credentials" aria-label={`${person.name} credentials and experience`}>
                  {person.creds.map((credential) => (
                    <span key={credential} className="file-chip">{credential}</span>
                  ))}
                </div>
                <p>{person.bio}</p>
              </div>
              <div className="panel-side team-profile-side">
                <span className="cell-tag">Project contribution</span>
                <div className="team-profile-mark" aria-hidden="true">
                  {person.name.split(" ").map((part) => part[0]).join("")}
                </div>
                {person.signs.map((item) => (
                  <div key={item.label} className="spec-row">
                    <b>{item.label}</b>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="quals">
        <div className="sec-head">
          <span className="sec-num">SHT 04</span>
          <h2 id="quals">Professional register</h2>
          <span className="sec-rev">Supporting information on request</span>
        </div>
        <div className="tablewrap">
          <table className="register">
            <thead>
              <tr>
                <th>Ref</th>
                <th>Person / entity</th>
                <th className="hide-m">Qualification / information</th>
                <th>Project contribution</th>
              </tr>
            </thead>
            <tbody>
              {QUALIFICATION_REGISTER.map((item) => (
                <tr key={item.ref}>
                  <td className="dwg">{item.ref}</td>
                  <td className="ttl">{item.who}</td>
                  <td className="des hide-m">{item.qual}</td>
                  <td className="des">{item.covers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" aria-labelledby="hiring">
        <div className="sec-head">
          <span className="sec-num">SHT 05</span>
          <h2 id="hiring">Work with Sightline</h2>
          <span className="sec-rev">Expressions of interest</span>
        </div>
        <div className="split">
          <div className="panel">
            <h3 className="max-w-lg text-balance text-xl">{HIRING.heading}</h3>
            <p className="mt-3 max-w-xl leading-relaxed text-survey">{HIRING.body}</p>
            <a
              className="btn btn-oxide mt-5"
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
        label="Start a project"
        heading="Put the right people around the project."
        notesLabel="Working principle"
        notes={["Clear scope", "Named responsibility", "Controlled issue"]}
      />
    </article>
  );
}
