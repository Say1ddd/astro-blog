// @ts-check

import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  // Enable Vue to support Vue components.
  integrations: [
    vue({
      devtools: true,
    }),
    UnoCSS(),
  ],
})
