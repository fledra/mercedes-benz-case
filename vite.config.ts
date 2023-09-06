import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
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
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    VueRouter({
      dts: 'src/types/generated/router.d.ts',
      routesFolder: 'src/pages',
      extensions: ['.vue'],
      importMode: 'async',
    }),
    vue({
      template: {
        transformAssetUrls,
      },
    }),
    vuetify({
      autoImport: true,
    }),
    Components({
      version: 3,
      directoryAsNamespace: true,
      dts: 'src/types/generated/components.d.ts',
      dirs: ['src/components', 'src/layouts'],
    }),
    AutoImport({
      vueTemplate: true,
      dts: 'src/types/generated/auto-imports.d.ts',
      dirs: ['src/stores'],
      imports: [
        VueRouterAutoImports,
        'vue',
        'pinia',
        'vee-validate',
        {
          'vue-toastification': ['useToast'],
        },
      ],
    }),
  ],
});
