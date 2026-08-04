import type { Metadata } from "next";
import Link from "next/link";
import { ABOUT } from "@content/pages/about";
import { PEOPLE } from "@content/pages/team";
import { TitleBlockCta } from "@/components/TitleBlockCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sightline is an independent traffic and transport engineering practice delivering clear, considered and buildable solutions for government, development and infrastructure clients.",
};

/**
 * About (28) — the story: who Sightline is, standards, checking, how an
 * engagement runs. People detail lives on /team (Saadat: "About is the story,
 * Team is the people"). Credentials/registrations still gated on D6.
 */
export default function AboutPage() {
  return (
    <article>
      <div className="pagehead">
        <div className="dwgno">{ABOUT.eyebrow}</div>
        <h1>{ABOUT.h1}</h1>
        <p className="sub">{ABOUT.sub}</p>
      </div>

      <section className="section" aria-labelledby="story">
        <div className="sec-head">
          <span className="sec-num">SHT 01</span>
          <h2 id="story">Who we are</h2>
        </div>
        <div className="pad">
          {ABOUT.story.map((p) => (
            <p key={p.slice(0, 20)} className="mt-4 max-w-[65ch] text-[1.02rem] leading-relaxed first:mt-0">
              {p}
            </p>
          ))}
          <p className="mt-6 max-w-[65ch] border-l-2 border-oxide pl-4 text-[0.95rem] text-survey">
            {ABOUT.independence}
          </p>
        </div>
      </section>

      <section className="section split" aria-labelledby="standards">
        <div className="panel">
          <h2 id="standards" className="text-xl">{ABOUT.standardsHeading}</h2>
          <ul className="dashlist mt-4">
            {ABOUT.standards.map((s) => (
              <li key={s}>
                <p>{s}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="panel-side">
          <h2 className="text-xl">Checked before it is issued</h2>
          <p className="mt-4 max-w-[52ch] leading-relaxed text-survey">{ABOUT.checking}</p>
          <h2 className="mt-9 text-xl">{ABOUT.engagementHeading}</h2>
          <ol className="method mt-3">
            {ABOUT.engagement.map((step, i) => (
              <li key={step}>
                <span className="no">{String(i + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="people">
        <div className="sec-head">
          <span className="sec-num">SHT 02</span>
          <h2 id="people">{ABOUT.peopleHeading}</h2>
          <span className="sec-rev">One profile per hire</span>
        </div>
        <div className="pad !pb-4">
          <p className="max-w-[62ch] text-survey">{ABOUT.peopleLine}</p>
        </div>
        <div className="cellgrid cols-5">
          {PEOPLE.map((p) => (
            <Link key={p.name} href="/team" className="cell">
              <span className="cell-tag">{p.role.split("·")[0].trim()}</span>
              <h3>{p.name}</h3>
              <span className="go">Profile →</span>
            </Link>
          ))}
        </div>
        {/* TODO(verify:D6) — registrations/accreditations section lands here once confirmed */}
      </section>

      <TitleBlockCta
        label="About Sightline"
        heading="Meet us the useful way — on your project."
        notesLabel="Principle"
        notes={["The engineer who briefs you", "is the engineer who signs", "the report."]}
      />
    </article>
  );
}
