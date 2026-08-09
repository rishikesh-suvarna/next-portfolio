/**
 * Absolute origin for canonical URLs, OG images, robots.txt and the sitemap.
 *
 * Set NEXT_PUBLIC_SITE_URL to override. On Vercel it falls back to the stable
 * production domain (not the per-deployment URL, which would make canonicals
 * point at preview builds).
 */

const DEV_FALLBACK_URL = "http://localhost:3000";

function resolveSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;

  const raw =
    explicit ??
    (vercelProduction ? `https://${vercelProduction}` : DEV_FALLBACK_URL);

  try {
    return new URL(raw);
  } catch {
    throw new Error(
      `Invalid site URL: "${raw}". NEXT_PUBLIC_SITE_URL must be absolute, e.g. https://example.com`,
    );
  }
}

export const SITE_URL = resolveSiteUrl();
