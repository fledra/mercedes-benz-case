import type { App } from 'vue';

import { router } from './router';
import { vuetify } from './vuetify';
import { loadFonts } from './webfontloader';
import { Toast, ToastOptions } from './toastification';

export function registerPlugins(app: App) {
  loadFonts();

  app.use(router).use(vuetify).use(Toast, ToastOptions);
}
