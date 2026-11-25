import { defineConfig } from 'astro/config';

const env = process.env;

function toAbsoluteUrl(value) {
  if (!value) return undefined;
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

// Explicit values always win. Otherwise detect common hosting providers.
// Platforms that host at the domain root use "/"; GitHub Pages project
// sites receive their repository subpath from the Pages workflow.
const detectedSite =
  env.ASTRO_SITE ||
  env.URL ||
  toAbsoluteUrl(env.VERCEL_PROJECT_PRODUCTION_URL) ||
  toAbsoluteUrl(env.VERCEL_URL) ||
  env.CF_PAGES_URL ||
  env.RENDER_EXTERNAL_URL;

const isGitHubPages = env.GITHUB_PAGES === 'true';
const base = env.ASTRO_BASE_PATH ?? (isGitHubPages ? '/edubooks' : '/');

export default defineConfig({
  site: detectedSite || 'https://gpldroid.github.io',
  base,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    assets: '_astro'
  }
});
