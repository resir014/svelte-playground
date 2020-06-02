import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    answer: 42,
  },
});

// @ts-ignore
window.app = app;

export default app;
