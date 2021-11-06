<template>
  <div>
    MyArticle
  </div>
</template>

<script>
export default { name: 'MyArticle' }
</script>
<script setup>
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()
console.log(route.query)

</script>
<style scoped>

</style>