<template>
  <div>
    <h2>个人中心页面</h2>
    <div class="body">
      <nav class="menu">
        <ul>
          <li><router-link to="/user/order">我的订单</router-link></li>
          <li><router-link to="/user/setting">个人设置</router-link></li>
          <li><router-link to="/user/page/1">单页1</router-link></li>
          <li><router-link to="/user/page/2">单页2</router-link></li>
        </ul>

        <ul>
          <li v-for="(item) in articles" :key="item.id">
            <router-link :to="'/user/page/' + item.id">{{item.title}}</router-link>
          </li>
        </ul>

          <li><router-link to="/user/article?name=11&age=12">文章1</router-link></li>
          <li><router-link :to="{ path: '/user/article', query: {name: 'hello', age: 100} }">文章2</router-link></li>
          <button @click="$router.push({ path: '/user/article', query: { name: 1, age: 2 } })">文章三</button>

      </nav>
      <article class="content">
        <router-view></router-view>
      </article>
    </div>
  </div>
  
</template>

<script>
export default { name: 'User' }
</script>
<script setup>
import { ref, reactive, onMounted, onUnmounted, onActivated } from 'vue'
import { useRouter, onBeforeRouteLeave } from 'vue-router'


const router = useRouter()
const articles = reactive([
  {id: 10, title:'文章标题10'},
  {id: 11, title:'文章标题11'},
  {id: 12, title:'文章标题12'},
  {id: 13, title:'文章标题13'},
  {id: 14, title:'文章标题14'},
  {id: 15, title:'文章标题15'},
])
const path = ref('/user')

onMounted(() => {
  console.log('User mounted')
})

onUnmounted(() => {
  console.log('User unmounted')
})

onActivated(() => {
  router.push(path.value)
})

onBeforeRouteLeave((to, from) => {
  path.value = from.fullPath
})

</script>
<style lang="scss" scoped>

.body {
  display: flex;

  .menu {
    width: 150px;
    background-color: silver;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }

      &.active {
        color: red;
      }
    }
  }

  .content {
    flex: 1 1 auto;;
  }
}
</style>