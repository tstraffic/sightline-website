import { SITE } from "@content/site";
import { CTA } from "@/lib/nav";
import { FeeProposalModal } from "./FeeProposalModal";
import { CapabilityRequestModal } from "./CapabilityRequestModal";

/** Title-block CTA — the drawing sheet's title block as the closing conversion band. */
export function TitleBlockCta({
  label,
  heading,
  notes,
  notesLabel = "What to send",
}: {
  label: string;
  heading: string;
  notes: string[];
  notesLabel?: string;
}) {
  return (
    <section className="section titleblock">
      <div className="tb-grid">
        <div className="tb-cell">
          <b>{label}</b>
          <h2>{heading}</h2>
          {/* opens the enquiry form as a popup — no page change (Saadat) */}
          <FeeProposalModal label={CTA.primary.label} />
          <br />
          <CapabilityRequestModal />
        </div>
        <div className="tb-cell">
          <b>{notesLabel}</b>
          <div className="mono small">
            {notes.map((n, i) => (
              <span key={i}>
                {n}
                <br />
              </span>
            ))}
          </div>
        </div>
        <div className="tb-cell">
          {/* v3.2 APPROVED reversed lockup: paper wordmark + brass #C9A15A descriptor (5.71:1 on aubergine) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/Sightline_Logo_Horizontal_Reversed_BrassDescriptor.svg"
            alt="Sightline Traffic Engineers"
            width={163}
            height={40}
            className="mb-4 h-10 w-auto"
          />
          <b>Contact</b>
          <div className="mono">
            <a href={SITE.phoneHref}>{SITE.phone}</a>
            <br />
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <br />
            {SITE.address}
            <br />
            {SITE.hours}
            {SITE.abn && (
              <>
                <br />
                ABN {SITE.abn}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
