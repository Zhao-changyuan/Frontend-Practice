<template>
  <div>
    <h2>自定义hook函数操作</h2>
    <h2>x:{{x}}, y:{{y}}</h2>
    <h3 v-if="loading">正在加载中...</h3>
    <h3 v-else-if="errorMsg">错误信息：{{errorMsg}}</h3>
    <ul v-else>
      <li>id:{{data.id}}</li>
      <li>address: {{data.address}}</li>
      <li>distance: {{data.distance}}</li>
    </ul>

    <hr>
    <!-- 数组数据 -->
    <ul v-for="item in data" :key="item.id">
      <li>id:{{item.id}}</li>
      <li>title:{{item.title}}</li>
      <li>price:{{item.price}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive,watch } from 'vue'
import useMousePosition from './hooks/useMousePosition'
import useRequest from './hooks/useRequest'

// 定义接口，约束对象的类型
interface IAddressData {
  id:number,
  address: string,
  distance: string,
}

interface IProductData {
  id:number,
  title: string,
  price: number,
}

export default defineComponent({
  name: 'App',
  setup() {
    const {x, y} = useMousePosition()
    // const {loading, data, errorMsg} = useRequest<IAddressData>('/data/address.json')
    const {loading, data, errorMsg} = useRequest<IProductData[]>('/data/products.json')

    watch(data, () => {
      if (data.value) {
        console.log(data.value.length)
      }
    })
    

    return {
      x,
      y,
      loading,
      data,
      errorMsg
    }
  }
})
</script>
<style scoped>

</style>