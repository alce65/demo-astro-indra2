// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	output: "static",
  site: "https://alce65.github.io",
  base: "/demo-astro-indra2",
  outDir: "./docs",
  build: {
    assets: "assets", // Cambia _astro por assets para GitHub Pages
  },
	integrations: [mdx(), sitemap()],
});
