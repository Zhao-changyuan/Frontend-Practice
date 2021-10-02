<template>
<div>
  <h2>子级组件</h2>
  <h4>msg: {{msg}}</h4>
  <button @click="update">更新数据</button>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

export default defineComponent({
  name: 'Child',
  // vu2.x中的生命周期钩子
  beforeCreate() {
    console.log('2.x beforeCreate...')
  },
  created() {
    console.log('2.x created...')
  },
  beforeMount() {
    console.log('2.x beforeMount...')
  },
  mounted() {
    console.log('2.x mounted...')
  },
  beforeUpdate() {
    console.log('2.x beforeUpdate...')

  },
  updated() {
    console.log('2.x updated...')

  },
  beforeUnmount() {
    console.log('2.x beforeUnmount...')

  },
  unmounted() {
    console.log('2.x unmounted...')

  },
  setup() {
    const msg = ref('abc')
    const update = () => {
      msg.value += "==="
    }
    console.log('vue3 setup...')

    onBeforeMount(() => {
      console.log('vue3 onBeforeMount...')
    })
    onMounted(() => {
      console.log('vue3 onMounted...')
    })
    onBeforeUpdate(() => {
      console.log('vue3 onBeforeUpdate...')
    })
    onUpdated(() => {
      console.log('vue3 onUpdated...')
    })
    onBeforeUnmount(() => {
      console.log('vue3 onBeforeUnmount...')
    })
    onUnmounted(() => {
      console.log('vue3 onUnmounted...')
    })

    return {
      msg, 
      update
    }
  }
})
</script>
<style scoped>

</style>