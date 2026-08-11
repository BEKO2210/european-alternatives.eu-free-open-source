import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://BEKO2210.github.io',
  base: '/european-alternatives.eu-free-open-source',
  trailingSlash: 'always',
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
