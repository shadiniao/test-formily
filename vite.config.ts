import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(),
    // TODO 按需
    vitePluginImp({
      libList: [
        {
          libName: '@formily/element-plus',
          libDirectory: 'esm',
          style(name) {
            return `@formily/element-plus/esm/${name}/style.js`
          },
        },
        {
          libName: 'element-plus',
          style(_) {
            return '';
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
