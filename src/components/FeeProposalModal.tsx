"use client";

import { useRef } from "react";
import { ContactForm } from "./ContactForm";

/** Title-block CTA opens the enquiry form in a native <dialog> popup —
 *  visitors enquire on the spot instead of navigating to /contact. */
export function FeeProposalModal({ label }: { label: string }) {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button type="button" className="btn btn-brass" onClick={() => ref.current?.showModal()}>
        {label} →
      </button>
      <dialog ref={ref} className="modal" aria-label="Request a fee proposal">
        <div className="modal-head">
          <span>Request a fee proposal</span>
          <button type="button" className="modal-close" onClick={() => ref.current?.close()}>
            Close ✕
          </button>
        </div>
        <div className="modal-body">
          <p className="modal-sub">
            Send us the drawings. We&apos;ll tell you what you need — a written scope and fixed
            fee come back to you.
          </p>
          <ContactForm />
        </div>
      </dialog>
    </>
  );
}
