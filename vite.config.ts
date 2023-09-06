import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import VueRouter from 'unplugin-vue-router/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 1337,
  },
  plugins: [
    VueRouter({
      dts: 'src/types/generated/router.d.ts',
      routesFolder: 'src/pages',
      extensions: ['.vue'],
      importMode: 'async',
    }),
    vue(),
    Components({
      version: 3,
      directoryAsNamespace: true,
      dts: 'src/types/generated/components.d.ts',
      dirs: ['src/components'],
      resolvers: [],
    }),
    AutoImport({
      dts: 'src/types/generated/auto-imports.d.ts',
      dirs: ['src/stores'],
      imports: [VueRouterAutoImports, 'vue', 'pinia'],
      vueTemplate: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
