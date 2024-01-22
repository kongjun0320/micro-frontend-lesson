import './assets/main.css';
import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import App from './App.vue';
import routes from './router';

let app, history;

function render(props) {
  app = createApp(App);

  history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/vue' : '/');
  const router = createRouter({
    history,
    routes,
  });

  app.use(router);
  const container = props.container;
  app.mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export function bootstrap() {}
export function mount(props) {
  render(props);
}
export function unmount() {
  app.unmount();
  history.destroy();
}
