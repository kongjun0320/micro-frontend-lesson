import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import findEnterprise from '@/views/findEnterprise.vue'
import enterpriseDetail from '@/views/enterpriseDetail.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'findEnterprise',
      component: findEnterprise,
      meta: {
        title: '',
        keepAlive:false
      }
    },
    {
      path: '/enterpriseDetail',
      name: 'enterpriseDetail',
      component: enterpriseDetail,
      meta: {
        title: '',
        keepAlive:false
      }
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
