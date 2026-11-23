import type { APIRoute } from 'astro';
import { books } from '../data/catalog';

const siteOrigin = 'https://gpldroid.github.io';
const siteBase = new URL(import.meta.env.BASE_URL, siteOrigin);
const staticPaths = ['', 'books/', 'about/', 'faq/', 'privacy/', 'terms/', 'contact/'] as const;

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function normalizePath(path: string): string {
  return path.replace(/^\/+/, '').replace(/\/{2,}/g, '/');
}

export const GET: APIRoute = () => {
  const publishedBookPaths = books
    .filter((book) => book.status === 'published')
    .map((book) => `books/${encodeURIComponent(book.slug)}/`);

  const uniquePaths = [...new Set([...staticPaths, ...publishedBookPaths].map(normalizePath))];
  const urls = uniquePaths.map((path) => new URL(path, siteBase).href);
  const entries = urls.map((url) => `  <url>\n    <loc>${escapeXml(url)}</loc>\n  </url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600'
    }
  });
};
