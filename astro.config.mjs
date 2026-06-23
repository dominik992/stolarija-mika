// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dominik992.github.io',
  base: '/stolarija-mika/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: 'directory',
  },
});