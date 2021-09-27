<template>
  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input type="text" placeholder="请输入姓氏" v-model="user.firstName"><br>
    名字：<input type="text" placeholder="请输入名字" v-model="user.lastName">
  </fieldset>

  <fieldset>
    <legend>计算属性和监视的演示</legend>
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName1"><br>
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName2"><br>
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName3"><br>
  </fieldset>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, watch, watchEffect } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const user = reactive({
      firstName: '东方',
      lastName: '不败'
    })

    // 通过计算属性的方式，实现第一个姓名的显示
    // 计算属性的函数中如果值传入一个回调函数，表示的是get

    // 返回的是一个Ref类型的对象
    const fullName1 = computed(() => {
      return user.firstName + '_' + user.lastName
    })
    
    const fullName2 = computed({
      get() {
        return user.firstName + '_' + user.lastName
      },
      set(val: string) {
        const names = val.split('_')
        user.firstName = names[0]
        user.lastName = names[1]
      }
    })

    const fullName3 = ref('')
    watch(user, ({firstName, lastName}) => {
      fullName3.value = firstName + '_' + lastName
    }, {
      immediate: true, // 默认会执行一次
      deep: true, // 深度监视
    })

    // watchEffect(() => {
    //   fullName3.value = user.firstName + '_' + user.lastName
    // })

    watchEffect(() => {
      const names = fullName3.value.split('_')
      user.firstName = names[0]
      user.lastName = names[1]
    })

    // 当我们使用watch监视非响应式数据的时候，代码可以改一下
    watch([() => user.firstName, () => user.lastName], () => {
      console.log('=====')
    })



    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    }
  }
})
</script>
<style scoped>

</style>