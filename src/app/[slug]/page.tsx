import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { SERVICES } from "@content/pages/services-index";

/** All live service pages render through this route from the registry —
 *  URLs exactly per 03-build-list.md. */

export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = SERVICES[slug];
  if (!data) return {};
  return { title: data.metaTitle, description: data.metaDescription };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = SERVICES[slug];
  if (!data) notFound();
  return <ServicePage data={data} />;
}
