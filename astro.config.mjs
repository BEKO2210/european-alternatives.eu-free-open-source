import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://BEKO2210.github.io',
  base: '/european-alternatives.eu-free-open-source',
  trailingSlash: 'always',
  integrations: [tailwind(), icon(), sitemap()],
  output: 'static',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
