<template>
<div>
  <h2>ref的另一个作用：可以获取页面中的元素</h2>
  <input type="text" ref="inputRef">
</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from 'vue'

export default defineComponent({
  name: 'App',
setup() {
  // 默认是空的
  const inputRef = ref<HTMLElement | null>(null)

  onMounted(() => {
    inputRef.value && inputRef.value.focus()
  })

  return {
    inputRef,
  }
}
})
</script>
<style scoped>

</style>