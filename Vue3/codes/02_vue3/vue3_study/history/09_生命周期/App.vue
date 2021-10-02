<template>
  <h2>父级最贱</h2>
  <button @click="isShow = !isShow">切换显示</button>
  <hr>
  <Child v-if="isShow" />
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import Child from '../components/Child.vue'

export default defineComponent({
  name: 'App',
  components: { Child },
  setup() {
    const isShow = ref(false)

    return {
      isShow,
    }
  }
})
</script>
<style scoped>

</style>