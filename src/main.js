import App from './App.svelte';

import 'tailwindcss/dist/tailwind.css';

const app = new App({
  target: document.body,
  props: {
    answer: 42,
  },
});

// @ts-ignore
window.app = app;

export default app;
