<template>
  <div>
    <hr>
    <h2>这是第二层组件</h2>
    <ThreeComp></ThreeComp>
  </div>
</template>

<script>
export default { name: 'TwoComp' }
</script>
<script setup>
import { ref, reactive } from 'vue'
import ThreeComp from './ThreeComp.vue';

</script>
<style scoped>

</style>