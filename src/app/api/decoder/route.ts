import { formReply } from "@/lib/formResponse";

/** Stubbed condition-decoder handler (Phase 2) - same delivery needs as
 *  /api/enquiry; routes to the engineer on duty for the same-business-day
 *  reply once email delivery is wired. */
export async function POST(req: Request) {
  const form = await req.formData();
  if (form.get("website")) return formReply(req, { ok: true }, "decoder"); // honeypot
  console.log("[decoder stub]", [...form.keys()].join(", "));
  return formReply(req, { ok: true, stub: true }, "decoder");
}
