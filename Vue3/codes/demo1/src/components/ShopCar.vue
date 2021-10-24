<template>
  <div>
    <div v-if="carlist.length === 0">请去购物</div>
    <table v-else>
      <caption>
        <h1>购物车</h1>
      </caption>
      <tr>
        <th></th>
        <th>编号</th>
        <th>商品名称</th>
        <th>商品价格</th>
        <th>购买数量</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item, index) in carlist" :key="item.id">
        <td><input type="checkbox" v-model="item.checked" /></td>
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td><small>￥</small>{{ item.price.toFixed(2) }}</td>
        <td>
          <button @click="onClkSubBtn(index)" :disabled="item.count <= 1">
            -
          </button>
          {{ item.count }}
          <button @click="onClkAddBtn(index)">+</button>
        </td>
        <td>
          <a href="#" @click.prevent="onClkDelLink(index)">删除</a>
        </td>
      </tr>
      <tr>
        <td colspan="3">总价</td>
        <td colspan="3"><small>￥</small>{{ totalPrice }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default { name: 'ShopCar' }
</script>
<script setup>
import { ref, reactive, computed } from 'vue'

const carlist = reactive([
  {
    id: 1,
    name: '《细说PHP》',
    price: 10,
    count: 1,
    checked: true,
  },
  {
    id: 2,
    name: '《细说网页制作》',
    price: 10,
    count: 1,
    checked: true,
  },
  {
    id: 3,
    name: '《细说JavaSciprt》',
    price: 10,
    count: 1,
    checked: true,
  },
  {
    id: 4,
    name: '《细说DOM和BOM》',
    price: 10,
    count: 1,
    checked: true,
  },
  {
    id: 5,
    name: '《细说Ajax JQuery》',
    price: 10,
    count: 1,
    checked: true,
  },
])

function onClkSubBtn(index) {
  carlist[index].count--
}

function onClkAddBtn(index) {
  carlist[index].count++
}

const totalPrice = computed(() => {
  return carlist
    .reduce((total, cur) => {
      if (!cur.checked) return total

      return total + cur.count * cur.price
    }, 0)
    .toFixed(2)
})

function onClkDelLink(index) {
  carlist.splice(index, 1)
}
</script>
<style scoped>
table {
  width: 600px;
  border: 1px solid #8888;
  border-collapse: collapse;
}

th {
  background-color: #ccc;
}

td,
th {
  border: 1px solid #8888;
  padding: 10px;
}
</style>
