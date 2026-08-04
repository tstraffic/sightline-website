"use client";

import { useState } from "react";
import { CONTACT } from "@content/pages/contact";

/**
 * Contact form — full field list per 00-INSTRUCTIONS: name, company, email,
 * phone, project address, works description, required service (with Unsure),
 * target date, multi-file upload with accepted types/limits, privacy wording,
 * honeypot spam protection. Phase 1 = layout + front-end validation; the
 * submission handler, confirmation email and internal routing are Phase 2
 * (noted in DECISIONS.md).
 */
export function ContactForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "stub">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    if ((form.elements.namedItem("website") as HTMLInputElement)?.value) return; // honeypot
    setStatus("stub");
  }

  const field =
    "w-full border border-carbon/25 bg-paper px-3.5 py-3 font-mono text-[0.85rem] text-carbon placeholder:text-survey/70";
  const label = "mb-1.5 block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-survey";

  return (
    <form onSubmit={onSubmit} noValidate={false} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className={label} htmlFor="name">Name *</label>
        <input className={field} id="name" name="name" type="text" required autoComplete="name" />
      </div>
      <div>
        <label className={label} htmlFor="company">Company</label>
        <input className={field} id="company" name="company" type="text" autoComplete="organization" />
      </div>
      <div>
        <label className={label} htmlFor="email">Email *</label>
        <input className={field} id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div>
        <label className={label} htmlFor="phone">Phone *</label>
        <input className={field} id="phone" name="phone" type="tel" required autoComplete="tel" />
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="address">Project address *</label>
        <input className={field} id="address" name="address" type="text" required placeholder="Street, suburb, state" />
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="description">Works / project description *</label>
        <textarea className={`${field} min-h-32 resize-y`} id="description" name="description" required />
      </div>
      <div>
        <label className={label} htmlFor="service">Required service</label>
        <select className={field} id="service" name="service" defaultValue={CONTACT.services.at(-1)}>
          {CONTACT.services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label className={label} htmlFor="target">Target date</label>
        <input className={field} id="target" name="target" type="date" />
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="files">{CONTACT.files.label}</label>
        <label
          htmlFor="files"
          className="block cursor-pointer border-2 border-dashed border-oxide/60 bg-oxide/[0.04] px-5 py-8 text-center hover:bg-oxide/[0.08]"
        >
          <span className="block font-medium">Drop plans here or click to browse</span>
          <span className="mt-1 block font-mono text-[0.64rem] uppercase tracking-[0.12em] text-survey">
            {CONTACT.files.note}
          </span>
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
          <ul className="mt-2 flex flex-wrap gap-2">
            {files.map((f) => (
              <li key={f.name} className="border border-carbon/20 bg-paper px-2.5 py-1 font-mono text-[0.66rem]">
                {f.name}
              </li>
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
        <button
          type="submit"
          className="cursor-pointer bg-aubergine px-7 py-3.5 font-medium text-paper hover:bg-[color-mix(in_srgb,var(--color-aubergine),white_8%)]"
        >
          {CONTACT.submitLabel} →
        </button>
        {status === "stub" && (
          <p className="mt-3 border border-carbon/25 bg-dust/60 px-4 py-3 font-mono text-[0.72rem] text-carbon">
            Design preview — submission wiring, confirmation email and internal routing land in Phase 2.
          </p>
        )}
      </div>
    </form>
  );
}
