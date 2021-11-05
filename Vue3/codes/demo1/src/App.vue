<template>
  <shop-car></shop-car>
</template>

<script>
export default {
  name: 'App',
}
</script>

<script setup>
import ShopCar from './components/ShopCar.vue'
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
