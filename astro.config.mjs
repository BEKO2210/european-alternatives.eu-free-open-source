import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://BEKO2210.github.io',
  base: '/european-alternatives.eu-free-open-source',
  trailingSlash: 'always',
  integrations: [tailwind(), icon()],
  output: 'static',
});
