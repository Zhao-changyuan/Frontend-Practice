<template>
  <h1>404, 找不到页面</h1>
</template>

<script setup>

import {useRoute} from 'vue-router'

const route = useRoute()
console.log(route)

</script>