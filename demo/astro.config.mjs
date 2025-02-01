// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://mirko93.github.io',
  base: '/',
  output: "static",
  devToolbar: {
    enabled: false
  }
});