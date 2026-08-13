import type { Metadata } from "next";
import Link from "next/link";
import { SECTORS_LANDING } from "@content/pages/landings";
import { SECTOR_TILES } from "@content/pages/sectors";
import { TitleBlockCta } from "@/components/TitleBlockCta";
import { ProcessStrip, STANDARD_PROJECT_STEPS, TechnicalPageHead } from "@/components/InternalPageModules";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "Same engineering. Different problem to solve. Civil contractors, developers and architects, government and council, utilities, and events.",
};

export default function SectorsPage() {
  return (
    <article>
      <TechnicalPageHead
        eyebrow={SECTORS_LANDING.eyebrow}
        title={SECTORS_LANDING.h1}
        sub={SECTORS_LANDING.intro}
        sidecarLabel="Client groups"
        rows={[
          { label: "01", value: "Civil contractors" },
          { label: "02", value: "Developers and architects" },
          { label: "03", value: "Government, council and infrastructure" },
          { label: "04—05", value: "Utilities and events" },
        ]}
        note="The engineering principles stay consistent; the project question and delivery pressure change."
        action={{ label: "Discuss the project", href: "/contact" }}
      />

      <section className="section" aria-label="Sector pages">
        <div className="cellgrid cols-5">
          {SECTOR_TILES.map((t) => (
            <Link key={t.href} href={t.href} className="cell">
              <span className="cell-tag">Sector</span>
              <h3>{t.label}</h3>
              <p>{t.line}</p>
              <span className="go">Read the page →</span>
            </Link>
          ))}
        </div>
      </section>

      <ProcessStrip heading="A consistent way to define the right input" steps={[...STANDARD_PROJECT_STEPS]} />

      <TitleBlockCta
        label="Sectors"
        heading="Send us the drawings. We'll tell you what you need."
        notes={["1. Site address", "2. Plans, if they exist", "3. A description of the works"]}
      />
    </article>
  );
}
