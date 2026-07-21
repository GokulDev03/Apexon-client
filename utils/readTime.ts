/** Estimate reading time in minutes from a plain-text word count. */
export function estimateReadTime(content: string, wordsPerMinute = 200): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / wordsPerMinute));
}
