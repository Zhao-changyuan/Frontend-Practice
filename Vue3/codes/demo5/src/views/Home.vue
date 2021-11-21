<template>
  <div class="home">
    <h2>单页模板中应用</h2>
    <h2>{{count}} {{mypow}}</h2>
    <button @click="count--">-</button>
    <button @click="count++">+</button>

    <hr>
    <h2>使用全局状态管理</h2>
    <h2>num: {{$store.state.num}}</h2>
    <h2>vuexpow num: {{vuexpow}}</h2>
    <h2>vnum: {{store.getters.vxnum}}</h2>
    <button @click="store.state.num--">-</button>
    <button @click="store.state.num++">+</button>

    <hr>
    <h2>使用Mutations来修改状态</h2>
    <h2>dnum: {{store.state.dnum}}</h2>
    <button @click="sub1">-</button>
    <button @click="add1">+</button>

    <hr>
    <h2>使用Mutations来修改状态，带一个参数</h2>
    <h2>dnum: {{store.state.dnum}}</h2>
    <button @click="sub2">-2</button>
    <button @click="add2">+2</button>

    <hr>
    <h2>使用Mutations来修改状态，带多个个参数</h2>
    <h2>dnum: {{store.state.dnum}}</h2>
    <button @click="sub3">-3</button>
    <button @click="add3">+3</button>

    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
export default { name: 'Home' }
</script>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

const count = ref(2)

const mypow = computed(() => {
  return count.value * count.value
})

const vuexpow = computed(() => {
  return store.state.num * store.state.num;
})

function add1() {
  store.commit('add')
}

function sub1() {
  store.commit('sub')
}

function add2() {
  store.commit('add2', 2)
}

function sub2() {
  store.commit('sub2', 2)
}

function add3() {
  store.commit('add3', {
    count: 2,
    num: 1,
  })
}

function sub3() {
  store.commit('sub3', {
    count: 2,
    num: 1,
  })
}

</script>
