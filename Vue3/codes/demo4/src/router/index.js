
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const Home = () => import('@/views/Home.vue')
const About = () => import('@/views/About.vue')
const User = () => import('@/views/User.vue')
const MyOrder = () => import('@/views/MyOrder.vue')
const MySetting = () => import('@/views/MySetting.vue')
const MyPage = () => import('@/views/MyPage.vue')
const MyArticle = () => import('@/views/MyArticle.vue')
  
const routes = [
  {
    path: '/',
    name: 'Homeroot',
    component: Home,
    meta: {
      title: '111111'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: { name: 'Homeroot' },
    meta: {
      title: '2222'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '333333'
    }
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: {
      title: '4444',
    },
    children: [
      {
        path: '',
        component: MyOrder,
      },
      {
        path: 'order',
        component: MyOrder,
      },
      {
        path: 'setting',
        component: MySetting
      },
      {
        path: 'page/:id',
        component: MyPage,
        alias: ['p/:id'],
        meta: {
          title: '5555'
        }
      },
      {
        path: 'article',
        component: MyArticle
      }
    ]
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from) => {
  document.title = to.meta.title
})

router.afterEach((to, from) => {
  // console.log(to.fullPath, from.fullPath)
})

export default router