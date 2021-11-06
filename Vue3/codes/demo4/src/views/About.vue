<template>
  <div>
    关于我们
  </div>
</template>

<script>
export default { name: 'About' }
</script>
<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log('About mounted')
})

onUnmounted(() => {
  console.log('About unmounted')
})
</script>
<style scoped>

</style>