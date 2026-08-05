"use client";

import { useState } from "react";

/**
 * Condition decoder form — free, no obligation. Phase 1 = layout + front-end
 * validation with a stubbed submit; wiring lands in Phase 2 with the contact
 * form handler.
 */
export function DecoderForm({ title }: { title: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/decoder", { method: "POST", body: new FormData(form) });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div>
        <label className="fl" htmlFor="condition">Condition wording *</label>
        <textarea
          id="condition"
          name="condition"
          required
          className="min-h-36"
          placeholder="Paste the condition of consent exactly as written…"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="fl" htmlFor="dc-name">Name *</label>
          <input id="dc-name" name="name" type="text" required autoComplete="name" />
        </div>
        <div>
          <label className="fl" htmlFor="dc-email">Email *</label>
          <input id="dc-email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <div>
        <label className="fl" htmlFor="dc-address">Site address</label>
        <input id="dc-address" name="address" type="text" placeholder="Street, suburb" />
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="dc-website">Website</label>
        <input id="dc-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <button type="submit" className="btn btn-solid" disabled={status === "sending"}>
          {title} →
        </button>
        {status === "sent" && (
          <p className="form-note mt-3">
            Received. Email delivery is not wired yet (staging stub) — a provider key and routing address are needed before launch.
          </p>
        )}
        {status === "error" && (
          <p className="form-note mt-3">Something went wrong — please call or email us directly.</p>
        )}
      </div>
    </form>
  );
}
