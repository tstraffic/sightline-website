import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { PracticeLanding } from "@/components/PracticeLanding";
import { SERVICES } from "@content/pages/services-index";
import { DRAFT_SERVICES } from "@content/pages/drafts";
import { PRACTICE_LANDINGS } from "@content/pages/landings";

/**
 * Top-level route for practice landings and service pages.
 * LIVE services come from SERVICES; DRAFT services (08, 12, 21, 13) are
 * reachable only by direct URL — noindex, out of nav and sitemap, watermarked.
 */

const ALL_SERVICES = { ...SERVICES, ...DRAFT_SERVICES };

export function generateStaticParams() {
  return [...Object.keys(PRACTICE_LANDINGS), ...Object.keys(ALL_SERVICES)].map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const landing = PRACTICE_LANDINGS[slug];
  if (landing) {
    return {
      title: landing.eyebrow.split("·").pop()?.trim() ?? landing.h1,
      description: landing.intro[0],
      alternates: { canonical: `/${slug}` },
    };
  }

  const data = ALL_SERVICES[slug];
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

  const landing = PRACTICE_LANDINGS[slug];
  if (landing) return <PracticeLanding data={landing} />;

  const data = ALL_SERVICES[slug];
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
