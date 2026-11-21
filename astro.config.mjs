import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gpldroid.github.io',
  base: '/edubooks',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});