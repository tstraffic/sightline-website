import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { SITE_AUDITS } from "@content/pages/site-audits";

export const metadata: Metadata = {
  title: SITE_AUDITS.metaTitle,
  description: SITE_AUDITS.metaDescription,
};

export default function Page() {
  return <ServicePage data={SITE_AUDITS} />;
}
