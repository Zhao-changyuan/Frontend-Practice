<template>
<div>
  <h2>toRefs的使用</h2>
  <!-- <h3>name: {{state.name}}</h3>
  <h3>age: {{state.age}}</h3> -->

  <h3>name: {{name}}</h3>
  <h3>age: {{age}}</h3>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue'

function useFeatureX() {
  const state = reactive({
      name: '自来也',
      age: 47
    })

  return {
    ...toRefs(state)
  }
}

export default defineComponent({
  name: 'App',
  setup() {
    

    // toRefs可以报一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref
    const {name, age} = useFeatureX()

    // 定时器，更新数据（如果数据变化， 界面也会随之变化）
    setInterval(() => {
      // state.name += "==="
      name.value +="==="
    }, 2000)

    return {
      name,
      age,
    }
  }
})
</script>
<style scoped>

</style>