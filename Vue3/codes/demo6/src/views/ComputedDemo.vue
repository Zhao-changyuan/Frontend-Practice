
<template>
  <div>
    <h2>计算属性</h2>
    <div>
      <div>firstname: <input type="text" v-model="firstname"></div>
      <div>lastname: <input type="text" v-model="lastname"></div>
      <div>fullname: {{fullname}}</div>
      <div>age: <input type="text" v-model="age"></div>
      <div>{{age}}岁，{{show}}</div>
    </div>
  </div>
</template>

<script>
import {ref, reactive, toRefs, computed} from 'vue'

export default { 
  name: 'ComputedDemo',
  setup(props) {
    const user = reactive({
      firstname: 'lmonkey',
      lastname: 'com',
      age: 20
    })

    let fullname = computed(() => {
      return user.firstname + '_' + user.lastname
    })

    let show = computed(() => {
      if (user.age <= 20) {
        return '还年轻'
      }
      if(user.age < 40) {
        return '小青年'
      }
      
      return '岁数不小了'
    })

    return {
      ...toRefs(user),
      fullname,
      show,
    }
  }
}
</script>

<style scoped>

</style>