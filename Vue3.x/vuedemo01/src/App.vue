<template>
<h2>Vue实现TodoList</h2>
<div class="todolist">
  <input type="text" v-model="todo" @keyup.enter="addData">
  <hr>
  <h4>正在进行</h4>
  <ul>
    <li v-for="(item, index) in list" :key="index" v-show="!item.checked">
      <span><input type="checkbox" v-model="item.checked">{{item.title}}</span>
      <button @click="deleteData(index)">删除</button>
    </li>
  </ul>
  <h4>已完成</h4>
  <ul>
    <li v-for="(item, index) in list" :key="index" v-show="item.checked">
      <span><input type="checkbox" v-model="item.checked">{{item.title}}</span>
      <button @click="deleteData(index)">删除</button>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello, vue3',
      todo: '',
      list: []
    };
  },
  methods: {
    addData() {
      if (!this.todo.trim()) return

      this.list.push({
        title: this.todo,
        checked: false
      })
      this.todo = ''
    },
    deleteData(index) {
      console.log(index)
      this.list.splice(index, 1)
    }
  },
}
</script>
<style lang="scss">
h2 {
  text-align: center;
}

li {
  display: flex;
  justify-content: space-between;
  list-style: none;
}

.todolist {
  width: 500px;
  border: 1px solid #eee;
  margin: 0 auto;
  padding: 20px;
}
</style>