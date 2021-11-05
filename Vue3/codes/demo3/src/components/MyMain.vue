<template>
  <div>
    MyMain {{msg}}
    <p>title: {{title}}</p>
  </div>
</template>

<script>
export default { name: 'MyMain' }
</script>
<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  msg: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  article: {
    type: Array,
    default() {
      return []
    }
  }
})

</script>
<style scoped>

</style>