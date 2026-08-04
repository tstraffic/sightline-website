import type { Metadata } from "next";
import { CONTACT } from "@content/pages/contact";
import { ContactForm } from "@/components/ContactForm";
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
      <div className="pagehead">
        <div className="dwgno">{CONTACT.eyebrow}</div>
        <h1>{CONTACT.h1}</h1>
        <p className="sub">{CONTACT.sub}</p>
      </div>

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
    </article>
  );
}
