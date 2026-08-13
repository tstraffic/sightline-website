import type { Metadata } from "next";
import { CONTACT } from "@content/pages/contact";
import { ContactForm } from "@/components/ContactForm";
import { ProcessStrip, TechnicalPageHead } from "@/components/InternalPageModules";
import { SITE } from "@content/site";

export const metadata: Metadata = {
  title: "Contact — Request a fee proposal",
  description:
    "Send us the drawings. We'll tell you what you need. Site address, architectural or civil plans, and a description of the works is usually enough for us to scope it.",
};

/** Contact page (29) — Title Block treatment; expanded form per 00-INSTRUCTIONS. */
export default function ContactPage() {
  return (
    <article>
      <TechnicalPageHead
        eyebrow={CONTACT.eyebrow}
        title={CONTACT.h1}
        sub={CONTACT.sub}
        sidecarLabel="What happens next"
        rows={[
          { label: "01 · Review", value: "We review the site, drawings and project requirements." },
          { label: "02 · Scope", value: "The required deliverables, programme and fee are confirmed in writing." },
          { label: "03 · Start", value: "Work begins once the scope and required project information are confirmed." },
          { label: "Coverage", value: "NSW & ACT" },
        ]}
        note="If the required service is unclear, describe the project and we will identify the likely starting point."
      />

      <section className="section split w-7-5" aria-label="Enquiry">
        <div className="panel">
          <ContactForm />
        </div>
        <aside className="panel-side">
          <h2 className="text-lg">{CONTACT.whatWeNeed.heading}</h2>
          <div className="mt-4">
            {CONTACT.whatWeNeed.rows.map((r) => (
              <div key={r[0]} className="spec-row">
                <b>{r[0]}</b>
                <span>{r[1]}</span>
              </div>
            ))}
          </div>
          <h2 className="mt-8 text-lg">Reach us directly</h2>
          <div className="mt-3 font-mono text-[0.8rem] leading-loose">
            <a href={SITE.phoneHref}>{SITE.phone}</a>
            <br />
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <br />
            {SITE.address}
            <br />
            {SITE.hours}
          </div>
        </aside>
      </section>

      <ProcessStrip
        label="ENQ 01—03"
        heading="A clear path from enquiry to project start"
        steps={[
          { title: "Send the essentials", text: "A site address, available plans and a short project description are enough to begin." },
          { title: "Receive a defined scope", text: "We confirm what is required, what will be delivered and the written fee." },
          { title: "Proceed with clarity", text: "The project starts with agreed inputs, responsibilities and issue requirements." },
        ]}
      />
    </article>
  );
}
