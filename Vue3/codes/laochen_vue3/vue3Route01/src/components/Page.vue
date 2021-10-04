<template>
<div>
  编程式导航
  <button @click="goPage">go首页</button>
  <button @click="replace">替换到首页</button>
  <router-link to="/page?query=123">路由更新</router-link>
</div>
</template>

<script>
import { ref, reactive } from 'vue'
import {useRouter} from 'vue-router'

export default {
  name: 'Page',
  setup(props) {
    const router = useRouter()

    const replace = () => {
      router.replace({
        path: '/'
      })
    }
    
    const goPage = () => {
      router.push({
        path: '/'
      })
    }

    return {
      goPage,
      replace,
    }
  },
  beforeRouteEnter (to, from) {
    console.log('路由进入组件')
    // next()
  },
  beforeRouteUpdate() {
    console.log('路由更新组件')
  },
  beforeRouteLeave (to, from) {
    console.log('路由离开组件')
  }
}
</script>
<style scoped>

</style>