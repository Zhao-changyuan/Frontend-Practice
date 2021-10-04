
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

// 1. 定义路由组件.
// 也可以从其他文件导入
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const News = () => import('../components/News.vue')
const NotFound = () => import('../components/NotFound.vue')
const Article = () => import('../components/Article.vue')
const Films = () => import('../components/Films.vue')
const User = () => import('../components/User.vue')
const Hengban = () => import('../components/Hengban.vue')
const Shuban = () => import('../components/Shuban.vue')
const Page = () => import('../components/Page.vue')
const ShopMain = () => import('../components/ShopMain.vue')
const ShopTop = () => import('../components/ShopTop.vue')
const ShopFooter = () => import('../components/ShopFooter.vue')


// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  {
    path: '/news/:id',
    component: News
  },
  {
    path: '/article/:id(\\d+)',
    component: Article,
  },
  {
    // + 表示至少有一个参数
    // * 是可以没有，也可以任意多个
    // ? 有或者没有，不可以重复
    path: '/films/:id?',
    component: Films,
  },

  {
    path: "/user",
    component: User,
    children: [
      {
        path: "hengban",
        component: Hengban,
      },
      {
        path: 'shuban',
        component: Shuban,
      }
    ]
  },

  {
    path: '/page',
    component: Page,
  },

  {
    path: '/shop',
    alias: ['/laochenshop', '/shuaige'],
    components: {
      default: ShopMain,
      ShopTop,
      ShopFooter,
    }
  },

  {
    path: '/mall',
    // redirect: (to) => ({path: '/shop'})
    redirect: '/shop'
  },

  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  }
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

router.beforeEach((to, from, next) => {

  console.log(to)
  next()
})

export default router