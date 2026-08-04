import type { Metadata } from "next";
import { CONTACT } from "@content/pages/contact";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Request a fee proposal",
  description:
    "Send us the drawings. We'll tell you what you need. Site address, architectural or civil plans, and a description of the works is usually enough for us to scope it.",
};

/** Contact page (29) — heading + line from Rev 3, expanded form per 00-INSTRUCTIONS. */
export default function ContactPage() {
  return (
    <article>
      <header className="bg-aubergine text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-oxide">{CONTACT.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-balance text-3xl leading-tight md:text-4xl">{CONTACT.h1}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-dust">{CONTACT.sub}</p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <section aria-label="Enquiry form">
          <ContactForm />
        </section>

        {/* Technical-table treatment — real information only */}
        <aside>
          <h2 className="text-xl">{CONTACT.whatWeNeed.heading}</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-[0.92rem]">
              <thead>
                <tr>
                  {CONTACT.whatWeNeed.columns.map((c) => (
                    <th
                      key={c}
                      className="bg-dust px-4 py-2.5 text-left font-mono text-[0.6rem] uppercase tracking-[0.18em] text-survey"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CONTACT.whatWeNeed.rows.map((r) => (
                  <tr key={r[0]} className="border-b border-carbon/10 align-top">
                    <td className="px-4 py-3 font-medium">{r[0]}</td>
                    <td className="px-4 py-3 text-survey">{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* TODO(content): phone, email and office address for this panel once confirmed */}
        </aside>
      </div>
    </article>
  );
}
