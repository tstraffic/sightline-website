import type { Metadata } from "next";
import Link from "next/link";
import { ABOUT } from "@content/pages/about";
import { TitleBlockCta } from "@/components/TitleBlockCta";

export const metadata: Metadata = {
  title: "About the practice",
  description:
    "Sightline is a specialist traffic and transport engineering practice shaped by experience across approvals, project delivery, construction and implementation.",
};

export default function AboutPage() {
  return (
    <article>
      <div className="pagehead">
        <div className="dwgno">{ABOUT.eyebrow}</div>
        <h1>{ABOUT.h1}</h1>
        <p className="sub">{ABOUT.sub}</p>
        <p className="about-tagline">{ABOUT.tagline}</p>
      </div>

      <section className="section" aria-labelledby="who-we-are">
        <div className="sec-head">
          <span className="sec-num">SHT 01</span>
          <h2 id="who-we-are">Who we are</h2>
        </div>
        <div className="pad about-copy">
          {ABOUT.whoWeAre.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="about-result">
            <p>{ABOUT.resultLead}</p>
            <strong>{ABOUT.result}</strong>
          </div>
          <p>{ABOUT.smallPractice}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="experience">
        <div className="sec-head">
          <span className="sec-num">EXP 01—03</span>
          <h2 id="experience">{ABOUT.experienceHeading}</h2>
        </div>
        <div className="cellgrid cols-3 about-experience">
          {ABOUT.experience.map((item, index) => (
            <div className="cell" key={item.title}>
              <span className="cell-tag">Experience {String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section split w-7-5" aria-labelledby="client-meaning">
        <div className="panel">
          <h2 id="client-meaning" className="text-xl">{ABOUT.clientHeading}</h2>
          <p className="mt-4 text-[1.02rem]">{ABOUT.clientIntro}</p>
          <ul className="about-questions mt-5">
            {ABOUT.clientQuestions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </div>
        <div className="panel-side about-outcome">
          <span className="cell-tag">Project objective</span>
          <p>{ABOUT.clientOutcome}</p>
        </div>
      </section>

      <section className="section split" aria-labelledby="standards">
        <div className="panel">
          <h2 id="standards" className="text-xl">{ABOUT.standardsHeading}</h2>
          <p className="mt-4 max-w-[58ch] leading-relaxed">{ABOUT.standardsIntro}</p>
          <ul className="dashlist mt-4">
            {ABOUT.standards.map((standard) => (
              <li key={standard}><p>{standard}</p></li>
            ))}
          </ul>
          <p className="about-note mt-6">{ABOUT.standardsClose}</p>
        </div>

        <div className="panel-side">
          <h2 className="text-xl">{ABOUT.reviewHeading}</h2>
          <p className="mt-4 leading-relaxed">{ABOUT.reviewIntro}</p>
          <p className="mt-3 text-survey">{ABOUT.reviewQualifier}</p>
          <div className="about-review mt-5">
            {ABOUT.reviewStages.map((stage) => (
              <div className="spec-row" key={stage.label}>
                <b>{stage.label}</b>
                <span>{stage.text}</span>
              </div>
            ))}
          </div>
          <p className="about-note mt-6">{ABOUT.reviewClose}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="engagement">
        <div className="sec-head">
          <span className="sec-num">PROC 01—05</span>
          <h2 id="engagement">{ABOUT.engagementHeading}</h2>
        </div>
        <div className="pad">
          <ol className="method about-method">
            {ABOUT.engagement.map((step, index) => (
              <li key={step.title}>
                <span className="no">{String(index + 1).padStart(2, "0")}</span>
                <p><strong>{step.title}</strong><br />{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="people">
        <div className="sec-head">
          <span className="sec-num">SHT 02</span>
          <h2 id="people">{ABOUT.peopleHeading}</h2>
          <span className="sec-rev">Practice leadership</span>
        </div>
        <div className="pad !pb-4">
          <p className="max-w-[75ch] text-survey">{ABOUT.peopleIntro}</p>
        </div>
        <div className="cellgrid cols-3 about-people">
          {ABOUT.people.map((person) => (
            <div className="cell" key={person.name}>
              <span className="cell-tag">{person.role}</span>
              <h3>{person.name}</h3>
              <p className="about-focus">{person.focus}</p>
              <p>{person.background}</p>
            </div>
          ))}
        </div>
        <div className="pad about-team-link">
          <Link href="/team">Meet the team →</Link>
        </div>
      </section>

      <section className="section split w-7-5" aria-labelledby="independence">
        <div className="panel">
          <h2 id="independence" className="text-xl">{ABOUT.independenceHeading}</h2>
          <div className="about-copy mt-4">
            {ABOUT.independence.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="panel-side about-principle">
          <span className="cell-tag">{ABOUT.principleHeading}</span>
          {ABOUT.principle.map((line) => (
            <strong key={line}>{line}</strong>
          ))}
          <p>{ABOUT.tagline}</p>
        </div>
      </section>

      <div className="about-pre-cta">
        <p>{ABOUT.ctaBody}</p>
      </div>
      <TitleBlockCta
        label="Start here"
        heading={ABOUT.ctaHeading}
        notesLabel="What to send"
        notes={["Site address", "Drawings where available", "Project requirements"]}
      />
    </article>
  );
}
