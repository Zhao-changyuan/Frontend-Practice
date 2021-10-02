<template>
<h4 :style="{color}">GrandSon孙子组件</h4>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, inject } from 'vue'

export default defineComponent({
  name: 'GrandSon',
  setup() {

    const color = inject('color')
    console.log(color)

    return {
      color,
    }
  }
})
</script>
<style scoped>

</style>