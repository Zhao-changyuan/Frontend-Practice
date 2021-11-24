<template>
  <div>
    <h3>生命周期钩子</h3>
    <h4>she</h4>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, onUnmounted } from 'vue'

export default { 
  name: 'LifeHook',
  setup(props) {
    console.log('setup')

    onBeforeMount(() => {
      console.log('onBeforeMount')
    })

    onMounted(() => {
      console.log('onMounted')
    })
  },
}
</script>
<style scoped>

</style>