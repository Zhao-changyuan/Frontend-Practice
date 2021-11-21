<template>
  <div>
    <h1>常用API的应用</h1>
    <div>
      原生的：{{num}}
    </div>
    <div>
      调用方法：<button @click="myfun">btn</button>
    </div>
    <hr>
    <div>
      响应式 ref ：{{num2}}
      <div>
        调用方法：<button @click="myfun2(55)">btn</button>
      </div>
    </div>
    <hr>
    <div>
      <h3>reactive</h3>
      <div>user：{{name}}-{{age}}</div>
      num2: <input type="text" v-model="num2">
      <div>
        name: <input type="text" v-model="name"><br>
        age: <input type="text" v-model="age">
      </div>
      <div>
        <span>user.num2: {{num2}}</span>
        <button @click="myfun3">修改num2</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'

export default { 
  name: 'ComApi',
  setup(props) {
    let num = 1
    let myfun = () => {
      num++;
      console.log(num)
    }

    let num2 = ref(33)
    let myfun2 = (n) => {
      num2.value = n
    }

    let user = reactive({
      name: 'lmonkey',
      age: 28,
      sex: '男',
      num2,
    })
    let myfun3 = () => {
      user.num2 = 1000
    }
    console.log(user)

    return {
      num,
      myfun,
      // num2,
      myfun2,
      ...toRefs(user),
      myfun3,
    }
  }
}
</script>

<style scoped>

</style>