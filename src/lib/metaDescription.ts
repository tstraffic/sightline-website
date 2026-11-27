/**
 * Meta descriptions are capped at 160 characters (punch list D4). A longer
 * source string is cut at the last sentence end that fits, else the last word
 * boundary, so nothing ends mid-word.
 */
export function metaDescription(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const head = clean.slice(0, max);
  const sentence = Math.max(head.lastIndexOf(". "), head.lastIndexOf("? "), head.lastIndexOf("! "));
  if (sentence > max * 0.5) return head.slice(0, sentence + 1);
  const word = head.lastIndexOf(" ");
  return `${head.slice(0, word > 0 ? word : max).replace(/[,;:\-\s]+$/, "")}.`;
}
