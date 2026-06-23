// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://stolarija-mika.hr',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: 'directory',
  },
});