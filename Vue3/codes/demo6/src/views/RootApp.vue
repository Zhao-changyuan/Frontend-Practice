<template>
  <div>
    <h1>这是根组件</h1>
    <div>title: {{title}}</div>
    <TwoComp></TwoComp>
  </div>
</template>

<script>
export default { name: 'RootApp' }
</script>
<script setup>
import { ref, reactive, provide, readonly } from 'vue'
import TwoComp from '../components/TwoComp.vue';

const title = ref('这是根组件提供的数据')
function update() {
  title.value = '123'
}

provide('title', readonly(title))
provide('update', update)



</script>
<style scoped>

</style>