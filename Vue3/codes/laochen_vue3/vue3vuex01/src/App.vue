<template>
  <div v-for="(item, index) in heroList" :key="index">{{item.cname}}===> {{item.title}}</div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import { reactive, provide } from 'vue';
import store from './store'
import axios from 'axios'

const heroList = reactive([])

provide('store', store)

let api = '/user/userInfo'
// fetch(api).then(res => res.json()).then(result => {
//   store.setDzList(result.result)
// })
axios.get(api).then(response => {
  const {data} = response
  console.log(data)
})

axios.get('/account?username=zhangsan').then(response => {
  const {data} = response
  console.log(data)
})

// axios.get('/api/web201605/js/herolist.json').then(response => {
//   console.log(response)
//   heroList.length = 0
//   heroList.push(...response.data)
// })
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
