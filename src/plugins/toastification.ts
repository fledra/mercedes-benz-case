import { POSITION, type PluginOptions } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

export { default as Toast } from 'vue-toastification';

export const ToastOptions: PluginOptions = {
  timeout: 5000,
  position: POSITION.BOTTOM_CENTER,
  transition: 'Vue-Toastification__fade',
  closeButton: false,
  showCloseButtonOnHover: false,
  draggable: false,
};
