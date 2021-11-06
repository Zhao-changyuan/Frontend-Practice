<template>
  <div>
    MyPage {{id}}
  </div>
</template>

<script>
export default { name: 'MyPage' }
</script>
<script setup>
import { ref, computed, reactive, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = computed(() => {
  return route.params.id
})

onMounted(() => {
  console.log('MyPage mounted')
})

onUnmounted(() => {
  console.log('MyPage unmounted')
})

</script>
<style scoped>

</style>