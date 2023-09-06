import type { App } from 'vue';
import { loadFonts } from './webfontloader';
import { pinia } from './pinia';
import { router } from './router';

export function registerPlugins(app: App) {
  loadFonts();
  app.use(pinia).use(router);
}
