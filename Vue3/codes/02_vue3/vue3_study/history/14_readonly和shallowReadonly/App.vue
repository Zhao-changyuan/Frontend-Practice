<template>
<div>
  <h2>readonly和shallowReadonly</h2>
  <h3>state: {{state}}</h3>
  <hr>
  <button @click="update">更新数据</button>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, readonly, shallowReadonly } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {

    const state = reactive({
      name: '佐助',
      age:20,
      car: {
        name: '奔驰',
        color: 'yellow'
      }
    })

    // readonly 只读的数据 是深度只读
    // const state2 = readonly(state)
    const state2 = shallowReadonly(state)
    const update = () => {
      // console.log('update')
      // state2.name += '==='
      state2.car.name += '==='
    }

    return {
      state,
      update,
      state2,
    }
  }
})
</script>
<style scoped>

</style>