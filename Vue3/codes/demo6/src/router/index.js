import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/setup',
    name: 'Setup',
    component: () => import('../views/Setup.vue')
  },
  {
    path: '/comapi',
    name: 'ComApi',
    component: () => import('../views/ComApi.vue')
  },
  {
    path: '/computed',
    name: 'ComputedDemo',
    component: () => import('../views/ComputedDemo.vue')
  },
  {
    path: '/watch',
    name: 'WatchDemo',
    component: () => import('../views/WatchDemo.vue')
  },
  {
    path: '/lifehook',
    name: 'LifeHook',
    component: () => import('../views/LifeHook.vue')
  },
  {
    path: '/proin',
    name: 'RootApp',
    component: () => import('../views/RootApp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
