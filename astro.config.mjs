import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import astro18next from '@astro-i18next';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astro18next()],
  output: "server",
  adapter: netlify()
});