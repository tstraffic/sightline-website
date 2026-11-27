import { formReply } from "@/lib/formResponse";

/** Stubbed capability-statement request handler - same email-delivery needs
 *  as /api/enquiry. Once wired, this should email the current capability
 *  statement PDF (or notify the team to send it personally). */
export async function POST(req: Request) {
  const form = await req.formData();
  if (form.get("website")) return formReply(req, { ok: true }, "capability"); // honeypot
  console.log("[capability stub]", [...form.keys()].join(", "));
  return formReply(req, { ok: true, stub: true }, "capability");
}
