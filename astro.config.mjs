import { defineConfig } from 'astro/config';

// GitHub Pages project-site configuration.
// Keep the site origin separate from the repository base path.
export default defineConfig({
  site: 'https://gpldroid.github.io',
  base: '/edubooks',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    assets: '_astro'
  }
});
