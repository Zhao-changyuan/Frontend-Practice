<template>
<div>
  <h2>CustomRef的使用</h2>
  <input type="text" v-model="keyword">
  <p>{{keyword}}</p>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, customRef } from 'vue'

/**
 * value传入的数据，将来数据的类型不确定
 */
function useDebounceRef<T> (value: T, delay = 200) {
  let timeOutId: number

  return customRef((track, trigger) => {
    return {
      get() {
        // 告诉vue追踪数据
        track()
        return value;
      },
      set(newValue: T) {
        // 清理定时器
        clearTimeout(timeOutId)
        // 开启定时器
        timeOutId = setTimeout(() => {
          value = newValue
          // 告诉vue更新界面
          trigger()
        }, delay)
      },
    }
  })
}

export default defineComponent({
  name: 'App',
  setup() {
    // const keyword = ref('abc')

    const keyword = useDebounceRef('abc', 500)



    return {
      keyword,
    }
  }
})
</script>
<style scoped>

</style>