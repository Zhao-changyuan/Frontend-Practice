<template>
<div>
  新闻页面{{id}}
</div>
</template>

<script>

export default {
  name: 'News'
}

</script>

<script setup>
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const id = route.params.id
console.log(route)

</script>
<style scoped>

</style>