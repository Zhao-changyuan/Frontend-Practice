<template>
  <div class="home">
    Home
  </div>
</template>

<script>
export default { name: 'Home' }
</script>
<script setup>
import { ref, reactive, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'

onMounted(() => {
  console.log('Home mounted')
})

onUnmounted(() => {
  console.log('Home unmounted')
})

onActivated(() => {
  console.log('Home Activated')
})

onDeactivated(() => {
  console.log('Home Deactivated')
})
</script>
<style scoped>
.home {
  background-color: sandybrown;
}
</style>