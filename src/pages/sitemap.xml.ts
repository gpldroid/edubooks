import type { APIRoute } from 'astro';
import { books } from '../data/catalog';

const siteUrl = new URL(import.meta.env.BASE_URL, 'https://gpldroid.github.io').href;
const staticPaths = ['', 'books/', 'about/', 'faq/', 'privacy/', 'terms/'];

function escapeXml(value: string): string {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
}

export const GET: APIRoute = () => {
  const publishedBookPaths = books
    .filter((book) => book.status === 'published')
    .map((book) => `books/${encodeURIComponent(book.slug)}/`);
  const urls = [...staticPaths, ...publishedBookPaths]
    .map((path) => new URL(path, siteUrl).href);

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`).join('\n')}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600'
    }
  });
};
