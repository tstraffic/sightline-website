"use client";

import { useState } from "react";
import { CONTACT } from "@content/pages/contact";

/**
 * Contact form — full field list per 00-INSTRUCTIONS: name, company, email,
 * phone, project address, works description, required service (with Unsure),
 * target date, multi-file upload with accepted types/limits, privacy wording,
 * honeypot spam protection. Phase 1 = layout + front-end validation; the
 * submission handler, confirmation email and internal routing are Phase 2.
 */
export function ContactForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", { method: "POST", body: new FormData(form) });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className="fl" htmlFor="name">Name *</label>
        <input id="name" name="name" type="text" required autoComplete="name" />
      </div>
      <div>
        <label className="fl" htmlFor="company">Company</label>
        <input id="company" name="company" type="text" autoComplete="organization" />
      </div>
      <div>
        <label className="fl" htmlFor="email">Email *</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div>
        <label className="fl" htmlFor="phone">Phone *</label>
        <input id="phone" name="phone" type="tel" required autoComplete="tel" />
      </div>
      <div className="sm:col-span-2">
        <label className="fl" htmlFor="address">Project address *</label>
        <input id="address" name="address" type="text" required placeholder="Street, suburb, state" />
      </div>
      <div className="sm:col-span-2">
        <label className="fl" htmlFor="description">Works / project description *</label>
        <textarea className="min-h-32" id="description" name="description" required />
      </div>
      <div>
        <label className="fl" htmlFor="service">Required service</label>
        <select id="service" name="service" defaultValue={CONTACT.services.at(-1)}>
          {CONTACT.services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="fl" htmlFor="target">Target date</label>
        <input id="target" name="target" type="date" />
      </div>
      <div className="sm:col-span-2">
        <span className="fl">{CONTACT.files.label}</span>
        <label htmlFor="files" className="dropzone">
          <b>Drop plans here or click to browse</b>
          <span>{CONTACT.files.note}</span>
        </label>
        <input
          id="files"
          name="files"
          type="file"
          multiple
          accept={CONTACT.files.accept}
          className="sr-only"
          onChange={(e) => setFiles(Array.from(e.currentTarget.files ?? []))}
        />
        {files.length > 0 && (
          <ul className="mt-1 flex flex-wrap gap-1">
            {files.map((f) => (
              <li key={f.name} className="file-chip">{f.name}</li>
            ))}
          </ul>
        )}
      </div>

      {/* honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <p className="text-[0.82rem] leading-relaxed text-survey sm:col-span-2">{CONTACT.privacy}</p>

      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-brass" disabled={status === "sending"}>
          {CONTACT.submitLabel} →
        </button>
        {status === "sent" && (
          <p className="form-note mt-3">
            Received. Email delivery is not wired yet (staging stub) — a provider key and routing address are needed before launch.
          </p>
        )}
        {status === "error" && (
          <p className="form-note mt-3">Something went wrong sending the enquiry — please call or email us directly.</p>
        )}
      </div>
    </form>
  );
}
