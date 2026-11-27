import { formReply } from "@/lib/formResponse";

/**
 * Stubbed enquiry handler (Phase 2). Accepts the contact-form POST (multipart
 * FormData incl. file uploads) and acknowledges it.
 *
 * Needed for real delivery before launch (DECISIONS.md, punch list D20):
 *  - an email provider (e.g. Resend API key) + verified sending domain
 *  - internal notification/routing address (plans@sightlinetraffic.com.au)
 *  - confirmation email template to the enquirer
 *  - file storage or attachment forwarding for uploaded plans (size limits!)
 *  - server-side validation + rate limiting to back up the honeypot
 *  - an alert when a send fails (the site promises same-business-day replies)
 */
export async function POST(req: Request) {
  const form = await req.formData();
  if (form.get("website")) return formReply(req, { ok: true }, "enquiry"); // honeypot: pretend success
  // Stub: log field names only (never log file contents or personal data in prod)
  console.log("[enquiry stub]", [...form.keys()].join(", "));
  return formReply(req, { ok: true, stub: true }, "enquiry");
}
