// import { markRaw } from 'vue';
import { createVuetify, type ThemeDefinition } from 'vuetify';
import { VDataTableServer } from 'vuetify/labs/VDataTable';
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';

import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#006699',
    secondary: '#122a36',
    background: '#050c0f',
    surface: '#122a36',
    error: '#a50f0f',
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export const vuetify = createVuetify({
  components: {
    VDataTableServer,
    VSkeletonLoader,
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: darkTheme,
    },
  },
});
