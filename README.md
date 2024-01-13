# Mercedes Benz Frontend Case

Vue 3 app for the Mercedes Benz Frontend case.

Demo accessible at <https://mercedes-benz-case-fledra.vercel.app>

## Features

- [Vue 3](https://vuejs.org) with Typescript, [Vite](https://vitejs.dev), [pnpm](https://pnpm.io/)
- Components based on [Vuetify 3](https://vuetifyjs.com/en/)
- File based routing via [unplugin-vue-router](https://www.npmjs.com/package/unplugin-vue-router)
- Components auto importing via [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components)
- API auto importing via [unplugin-auto-import](https://www.npmjs.com/package/unplugin-auto-import)
- Fonts load first via [webfontloader](https://www.npmjs.com/package/webfontloader)
- Validation via [Vee Validate](https://www.npmjs.com/package/vee-validate) & [Zod](https://www.npmjs.com/package/zod)
- Alerts/Toasts via [vue-toastification](https://github.com/Maronato/vue-toastification/tree/next)

## Mock API

API used throughout this project is mocked using [mockapi.io](https://mockapi.io)

Data returned by the API is generated using [this](https://gist.github.com/barandasdemir/292d8acf135f14ec0e8cc06f37d25a14) script. It is used once to generate all resources before consuming them in the project.

### Available Endpoints

API used in this project can be accessed at <https://64f612f42b07270f705e1a0b.mockapi.io/api/cars>

```text
   GET  /cars
   GET  /cars/:id
  POST  /cars
   PUT  /cars/:id
DELETE  /cars/:id
```

### Resource Types

```ts
interface CarColor {
  name: string;
  hex: string;
}

interface Car {
  id: string | number;
  carid: string;
  instock: boolean;
  hp: number;
  price: number;
  color: CarColor;
  colorOptions: CarColor[];
}
```

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org)

```sh
pnpm lint
```

### Format with [Prettier](https://prettier.io)

```sh
pnpm format
```
