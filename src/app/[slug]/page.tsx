import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { SERVICES } from "@content/pages/services-index";
import { DRAFT_SERVICES } from "@content/pages/drafts";

/**
 * All service pages render through this route. LIVE pages come from SERVICES;
 * DRAFT pages (08, 12, 21, 13) are reachable only by direct URL — noindex,
 * excluded from nav and sitemap, watermarked "DRAFT — not for publication".
 */

const ALL = { ...SERVICES, ...DRAFT_SERVICES };

export function generateStaticParams() {
  return Object.keys(ALL).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = ALL[slug];
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/${data.slug}` },
    ...(data.draft ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = ALL[slug];
  if (!data) notFound();
  return (
    <>
      {data.draft && (
        <div
          className="border-b-[1.5px] border-oxide bg-oxide/10 px-6 py-2.5 text-center font-mono text-[0.66rem] uppercase tracking-[0.22em] text-oxide"
          role="status"
        >
          Draft — not for publication
        </div>
      )}
      <ServicePage data={data} />
    </>
  );
}
