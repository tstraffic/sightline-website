import { NextResponse } from "next/server";

/**
 * Stubbed enquiry handler (Phase 2). Accepts the contact-form POST (multipart
 * FormData incl. file uploads) and acknowledges it.
 *
 * Needed for real delivery before launch (DECISIONS.md):
 *  - an email provider (e.g. Resend API key) + verified sending domain
 *  - internal notification/routing address (e.g. plans@sightlinetraffic.com.au)
 *  - confirmation email template to the enquirer
 *  - file storage or attachment forwarding for uploaded plans (size limits!)
 *  - server-side validation + rate limiting to back up the honeypot
 */
export async function POST(req: Request) {
  const form = await req.formData();
  if (form.get("website")) return NextResponse.json({ ok: true }); // honeypot: pretend success
  // Stub: log field names only (never log file contents or personal data in prod)
  console.log("[enquiry stub]", [...form.keys()].join(", "));
  return NextResponse.json({ ok: true, stub: true });
}
