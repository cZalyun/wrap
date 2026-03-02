/**
 * SEO configuration and helpers for Wrap Studios.
 *
 * SITE_BASE_URL must be updated when deploying to a custom domain.
 * Derived from astro.config.mjs: site + base.
 */

/** Fully-qualified production base URL — no trailing slash. */ // TODO: change when deploying to custom domain
export const SITE_BASE_URL = 'https://czalyun.github.io/wrap';

/** Site-root-relative path to the default share image (must be 1200 × 630 px JPEG/PNG). */
export const DEFAULT_OG_IMAGE_PATH = '/images/og-default.jpg';

/** Recommended dimensions for OG share images. */
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

/**
 * Converts a site-relative path to an absolute URL.
 * Already-absolute URLs are returned unchanged.
 *
 * @example
 *   absoluteUrl('/images/og-default.jpg')
 *   // → 'https://czaunpeterbence.github.io/wrap/images/og-default.jpg'
 */
export function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_BASE_URL}${clean}`;
}

/**
 * Resolves an OG image path to an absolute URL.
 *
 * SVG images are NOT supported by most link-preview scrapers (Messenger,
 * WhatsApp, Slack, LinkedIn, etc.), so they automatically fall back to the
 * site-wide default share image.
 *
 * To opt-in to a per-page image, supply a JPEG or PNG path via the `ogImage`
 * prop on BaseLayout.
 */
export function resolveOgImage(path?: string): string {
  const target = path ?? DEFAULT_OG_IMAGE_PATH;
  if (target.toLowerCase().endsWith('.svg')) return absoluteUrl(DEFAULT_OG_IMAGE_PATH);
  return absoluteUrl(target);
}

/**
 * Trims a description string to ≤ maxLen characters, appending "…" when truncated.
 * The recommended limit for meta descriptions is 155 characters.
 */
export function truncateDescription(text: string, maxLen = 155): string {
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen - 1).trimEnd() + '\u2026';
}

/**
 * Builds a rich description for a work/case-study detail page.
 * Format: "{Category} · {Year} — {subtitle}"
 * Total is clamped to 155 characters.
 */
export function buildWorkDescription(
  category: string,
  year: number,
  subtitle: string,
): string {
  const prefix = `${category} · ${year} — `;
  const remaining = 155 - prefix.length;
  const body = remaining > 0 ? subtitle.slice(0, remaining) : '';
  return prefix + body;
}
