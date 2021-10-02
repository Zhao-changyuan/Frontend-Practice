<template>
  <h2>App父级组件：Suspense的使用</h2>

  <Suspense>
    <template #default>
      <!-- 异步组件 -->
      <!-- <AsyncComp /> -->
      <AsyncAddress />
    </template>

    <template #fallback>
      <h2>Loading...</h2>
    </template>
  </Suspense>
  
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, ref, reactive } from 'vue'

// Vue2的动态引入组件的写法：（vue3中这些重谢不行）
// const AsyncComp = () => import('./components/AsyncComp.vue')

// vue3中的动态引入组件的写法
// const AsyncComp = defineAsyncComponent(() => import('./components/AsyncComp.vue'))
import AsyncComp from './components/AsyncComp.vue'
import AsyncAddress from './components/AsyncAddress.vue'
export default defineComponent({
  name: 'App',
  components: {AsyncAddress},
  setup() {

    return {

    }
  }
})
</script>
<style scoped>

</style>