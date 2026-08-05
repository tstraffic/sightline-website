"use client";

import { useRef, useState } from "react";

/** "Request our capability statement" — popup form. Trigger renders as the
 *  title-block text link (default) or a hero button. Posts to the stubbed
 *  /api/capability handler until email delivery is wired. */
export function CapabilityRequestModal({ variant = "link" }: { variant?: "link" | "button" }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/capability", { method: "POST", body: new FormData(form) });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {variant === "button" ? (
        <button type="button" className="btn btn-ghost" onClick={() => ref.current?.showModal()}>
          Capability statement
        </button>
      ) : (
        <button type="button" className="tb-caplink" onClick={() => ref.current?.showModal()}>
          Request our capability statement →
        </button>
      )}
      <dialog ref={ref} className="modal" aria-label="Request our capability statement">
        <div className="modal-head">
          <span>Capability statement</span>
          <button type="button" className="modal-close" onClick={() => ref.current?.close()}>
            Close ✕
          </button>
        </div>
        <div className="modal-body">
          <p className="modal-sub">
            Tell us where to send it and the capability statement comes to your inbox — services,
            standards, the register of people, and how an engagement runs.
          </p>
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="fl" htmlFor="cap-name">Name *</label>
                <input id="cap-name" name="name" type="text" required autoComplete="name" />
              </div>
              <div>
                <label className="fl" htmlFor="cap-company">Company</label>
                <input id="cap-company" name="company" type="text" autoComplete="organization" />
              </div>
            </div>
            <div>
              <label className="fl" htmlFor="cap-email">Email *</label>
              <input id="cap-email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="hidden" aria-hidden="true">
              <label htmlFor="cap-website">Website</label>
              <input id="cap-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div>
              <button type="submit" className="btn btn-brass" disabled={status === "sending"}>
                Send me the capability statement →
              </button>
              {status === "sent" && (
                <p className="form-note mt-3">
                  Received. Email delivery is not wired yet (staging stub) — a provider key is needed before launch.
                </p>
              )}
              {status === "error" && (
                <p className="form-note mt-3">Something went wrong — please email us directly.</p>
              )}
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
