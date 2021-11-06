<template>
  <div>
    <h3>helloworld组件</h3>
    <div>dnum: {{store.state.dnum}}</div>
  </div>
</template>

<script>
export default { name: 'HelloWorld' }
</script>
<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const props = defineProps({
  count: {
    type: Number,
    default: 0
  }
})

</script>
<style scoped>

</style>