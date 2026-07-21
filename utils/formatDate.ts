export function formatDate(isoDate: string, locale = "en-US"): string {
  return new Date(isoDate).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
