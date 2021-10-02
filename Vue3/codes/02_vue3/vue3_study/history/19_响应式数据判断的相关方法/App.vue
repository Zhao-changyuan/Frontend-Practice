<template>
<h2>响应式数据的判断</h2>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, readonly, isRef, isReactive, isReadonly, isProxy } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {

    const state = ref({})
    console.log(isRef(ref({})))
    console.log(isReactive(reactive({})))
    console.log(isReadonly(readonly({})))

    console.log(isProxy(state.value))


    return {

    }
  }
})
</script>
<style scoped>

</style>