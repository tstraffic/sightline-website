import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { TGS_TCP } from "@content/pages/tgs-traffic-control-plans";

export const metadata: Metadata = {
  title: TGS_TCP.metaTitle,
  description: TGS_TCP.metaDescription,
};

export default function Page() {
  return <ServicePage data={TGS_TCP} />;
}
