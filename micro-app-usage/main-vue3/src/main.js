import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import microApp from '@micro-zoe/micro-app';

import App from './App.vue';
import router from './router';

import './assets/main.css';
// import 'element-plus/dist/index.scss';
import 'element-plus/theme-chalk/src/index.scss';
import './publicPath';

import { jobType as jobTypeArr } from '@/assets/js/dictData';

window.jobTypeArr = jobTypeArr;

microApp.start({
  // 关闭虚拟路由系统
  'disable-memory-router': true,
  preFetchApps: [
    {
      name: 'childHome',
      url: 'http://localhost:3000/childHome',
      level: 3,
    },
    {
      name: 'childJob',
      url: 'http://localhost:8080',
      level: 3,
    },
    {
      name: 'childEnterprise',
      url: 'http://localhost:3002/child/findEnterprise',
      level: 3,
      iframe: true,
    },
    {
      name: 'childAbout',
      url: 'http://localhost:3003',
      level: 3,
    },
  ],
  lifeCycles: {
    created() {
      // console.log('created', this);
    },
    beforemount() {
      // console.log('beforemount', this);
    },
    mounted() {
      // console.log('mounted', this);
      // const loading = document.querySelector('#appLoading');
      // console.log('在基座应用中监听子应用元素 loading', loading);
    },
    unmount() {
      // console.log('unmount', this);
    },
    error() {
      // console.log('error', this);
    },
  },
});

microApp.router.setBaseAppRouter(router);

const app = createApp(App);

app.use(ElementPlus);
app.use(createPinia());
app.use(router);

app.mount('#app');
