import Vue from 'vue';
import VueRouter from 'vue-router';
// import HomeView from '../views/HomeView.vue'

const findJob = (r) =>
  require.ensure([], () => r(require('@/views/findJob')), 'findJob');
const jobDetail = (r) =>
  require.ensure([], () => r(require('@/views/jobDetail')), 'jobDetail');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'findJob',
    component: findJob,
  },
  {
    path: '/jobDetail',
    name: 'jobDetail',
    component: jobDetail,
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = new VueRouter({
  mode: 'history',
  base: window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL,
  routes,
});

export default router;
