<template>
<div>
  <h2>Child子级组件</h2>
  <h3>age: {{age}}</h3>
  <h3>length: {{length}}</h3>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, Ref, toRef } from 'vue'

function useGetLength(age: Ref) {
  return computed(() => {
    return age.value.toString().length
  })
}

export default defineComponent({
  name: 'Child',
  props: {
    age: {
      type: Number,
      required: true,
    }
  },
  setup(props) {

    const age1 = toRef(props, 'age')

    const length = useGetLength(age1)

    return {
      length,
    }
  }
})
</script>
<style scoped>

</style>