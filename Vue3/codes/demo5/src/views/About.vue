<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>num: {{$store.state.num}}</div>
    <div>
      <button @click="cnum">Actions</button>
    </div>

    <div>dnum: {{$store.state.dnum}}</div>
    <h3>购物车总价：{{store.getters.totalprice}}</h3>
    <div>
      <button @click="addGood">添加一个商品</button>
      <button @click="price = 50">pirce = 50</button>
      <span>大与{{price}}的商品：</span>
      <ul>
        <li v-for="(item, index) in goodsself" :key="index">{{item.name}} - {{item.price}}</li>
      </ul>
      <span>总价：{{store.getters.goodsgtTotalPrice}}</span>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import {computed, ref} from 'vue'

const store = useStore()
const price = ref(20)

const goodsgt = computed(() => {
  return store.getters.goodsgt
})

const goodsself = computed(() => {
  return store.getters.goodsself(price.value)
})

function addGood() {
  const good = {
    name: '代码大全' + (Math.random() * 10).toFixed(0),
    price: (Math.random() * 100).toFixed(0)
  }

  console.log('good', good)

  store.commit('addGood', good)
}

function cnum() {
  store.dispatch('demo')
}
</script>
