import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://BEKO2210.github.io',
  base: '/european-alternatives.eu-free-open-source',
  trailingSlash: 'always',
  integrations: [tailwind()],
  output: 'static',
});
