export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string) {
  if (!path || /^https?:\/\//.test(path)) return path;
  if (!path.startsWith("/")) return `${BASE_PATH}/${path}`;
  if (!BASE_PATH) return path;
  return path.startsWith(`${BASE_PATH}/`) ? path : `${BASE_PATH}${path}`;
}

export function withoutBasePath(path: string) {
  if (!path || /^https?:\/\//.test(path) || !BASE_PATH) return path;
  return path === BASE_PATH
    ? "/"
    : path.startsWith(`${BASE_PATH}/`)
      ? path.slice(BASE_PATH.length)
      : path;
}

export function toAbsoluteUrl(path: string) {
  if (!path) return SITE_URL;
  if (/^https?:\/\//.test(path)) return path;
  const normalizedPath = withoutBasePath(path);
  const pathname = normalizedPath.startsWith("/") ? normalizedPath : `/${normalizedPath}`;
  return `${SITE_URL}${pathname}`;
}

/**
 * Base URL for the site. Used for canonical URLs, OpenGraph, sitemap, and structured data.
 * Set NEXT_PUBLIC_SITE_URL in production when using a different domain.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://rjsunsol.com";
