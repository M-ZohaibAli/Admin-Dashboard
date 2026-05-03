// ─────────────────────────────────────────────
// Utility helpers
// ─────────────────────────────────────────────

/**
 * Merge Tailwind class strings conditionally.
 * Drop-in replacement for clsx + twMerge without extra deps.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Format a number with thousands separators */
export function formatNumber(n: number): string {
  return new Intl.NumberFormat("en-US").format(n);
}

/** Format a date string to a readable short form */
export function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(dateStr));
}
