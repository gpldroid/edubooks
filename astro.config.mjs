import { defineConfig } from 'astro/config';

// Keep the GitHub Pages project URL as the fallback.
// Netlify supplies NETLIFY=true and URL during its builds, so the same
// repository can be deployed at the Netlify domain root without breaking Pages.
const isNetlify = process.env.NETLIFY === 'true';

export default defineConfig({
  site: process.env.URL || 'https://gpldroid.github.io',
  base: isNetlify ? '/' : '/edubooks',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    assets: '_astro'
  }
});
