<template>
  <div>
    <hr>
    <h3>这是第三层组件</h3>
    <div>three title:{{title}}
      <button @click="update">update</button>
    </div>
  </div>
</template>

<script>
export default { name: 'ThreeComp' }
</script>
<script setup>
import { ref, reactive, inject } from 'vue'

const title = inject('title')
const update = inject('update')

</script>
<style scoped>

</style>