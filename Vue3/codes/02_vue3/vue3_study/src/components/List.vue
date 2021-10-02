<template>
<div class="todo-main">
  <Item v-for="(item, index) in todos" :index="index" :key="item.id" :todo="item" :deleteTodo="deleteTodo" :updateTodo="updateTodo" />
</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import Item from './Item.vue'

export default defineComponent({
  name: 'List',
  components: {Item},
  props: ['todos', 'deleteTodo', 'updateTodo'],
  setup() {

    return {

    }
  }
})
</script>
<style scoped>
.todo-main {
  margin-top: 10px;
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>