<template>
  <div>
    <h2>Watch demo</h2>
    
    <div>
      <div><button @click="a++">a={{a}}</button></div>
      <div><button @click="b++">b={{b}}</button></div>
    </div>
  </div>
</template>

<script>
export default { name: 'WatchDemo' }
</script>
<script setup>
import { ref, toRefs, reactive, watch, watchEffect } from 'vue'

const user = reactive({
  a: 1,
  b: 2,
})
const {a, b} = toRefs(user)

watchEffect(() => {
  console.log(user.a + '-----' + user.b)
})

watch(() => user.a, (val, oldVal) => {
  console.log(val, oldVal)
})
</script>
<style scoped>

</style>