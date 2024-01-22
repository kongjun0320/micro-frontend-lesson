import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/main/Login.vue';
import ChildHomeView from '@/views/child/ChildHome.vue';
import ChildJobView from '@/views/child/ChildJob.vue';
import ChildEnterpriseView from '@/views/child/ChildEnterprise.vue';
import ChildAboutView from '@/views/child/ChildAbout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main/childHome',
      name: 'childHome',
      component: ChildHomeView,
    },
    {
      path: '/main/childJob',
      name: 'childJob',
      component: ChildJobView,
    },
    {
      path: '/main/childEnterprise',
      name: 'childEnterprise',
      component: ChildEnterpriseView,
    },
    {
      path: '/main/childAbout',
      name: 'childAbout',
      component: ChildAboutView,
    },
    {
      path: '/main/login',
      name: 'login',
      component: LoginView,
    },
  ],
});

export default router;
