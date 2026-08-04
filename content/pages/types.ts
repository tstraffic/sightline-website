/**
 * Typed page-copy schema — the "editable CMS fields" requirement from
 * 00-INSTRUCTIONS. Components render this data; they never contain copy.
 */

export type Faq = { q: string; a: string };

export type PageSection =
  | { kind: "paragraph"; text: string }
  | { kind: "bullets"; heading?: string; items: { lead?: string; text: string }[] }
  | { kind: "numbered"; heading?: string; steps: string[] }
  | { kind: "table"; heading?: string; columns: [string, string]; rows: [string, string][] };

export type ServicePageData = {
  /** Page number in the build list, e.g. "07" — used for status labels. */
  pageNo: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  practice: { label: string; href: string };
  /** Problem-first opening line (H1 support) — from Rev 3, keep list applies. */
  opener: string;
  intro: string;
  sections: PageSection[];
  faqs: Faq[];
  /** Closing internal-link line back to the practice page (ships without its label). */
  closingLine?: string;
  related?: { label: string; href: string }[];
  draft?: boolean;
};
