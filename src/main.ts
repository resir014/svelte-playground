import App from './App.svelte';

import 'tailwindcss/dist/tailwind.css';

declare global {
  interface Window {
    app: App;
  }
}

const app = new App({
  target: document.body,
});

window.app = app;

export default app;
