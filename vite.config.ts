import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import singleSpa from 'vite-plugin-single-spa'

// https://vite.dev/config/
export default defineConfig({
  base: '/future-dream/',
  plugins: [
    vue(),
    vueDevTools(),
    singleSpa({
      type: 'root',
      imo: false,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
