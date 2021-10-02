<template>
<div class="todo-container">
  <div class="todo-wrap">
    <Header :addTodo="addTodo" />
    <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo" />
    <Footer :todos="todos" :checkAll="checkAll" :clearAllCompletedTodos="clearAllCompletedTodos" />
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, toRefs, reactive, watch } from 'vue'
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from '@/components/Footer.vue'
import { readTodos,saveTodos } from './utils/localStorageUtils'

// 引入接口
import {Todo} from './types/todo'


export default defineComponent({
  name: 'App',
  components: {Header, Footer, List},
  setup() {
    // 数据应该用数组来存储，数组中的每个数据都是一个对象，对象中应该有三个属性（id title isCompleted）
    // 把数据暂且定义在App.vue父级组件

    // const state = reactive<{ todos: Todo[] }>({
    //   todos: [
    //     {id: 1, title: '奔驰', isCompleted: false},
    //     {id: 2, title: '宝马', isCompleted: true},
    //     {id: 3, title: '奥迪', isCompleted: false},
    //   ]
    // })

    const state = reactive<{ todos: Todo[] }>({
      todos: []
    })

    // 界面加载完毕后过了一会再读取数据
    onMounted(() => {
      setTimeout(() => {
        state.todos = readTodos()
      }, 1000)
    })

    // 添加数据的方法
    const addTodo = (todo: Todo) => {
      state.todos.unshift(todo)
    }

    // 删除数据的方法
    const deleteTodo = (index: number) => {
      state.todos.splice(index, 1)
    }

    // 修改todo.isCompleted
    const updateTodo = (todo: Todo, isCompleted: boolean) => {
      todo.isCompleted = isCompleted
      console.log(todo)
    }

    // 全选/全不选 方法
    const checkAll = (isCompleted: boolean) => {
      state.todos.forEach(todo => {
        todo.isCompleted = isCompleted
      })
    }

    // 清理所有选中的数据
    const clearAllCompletedTodos = () => {
      state.todos = state.todos.filter(todo => !todo.isCompleted)
    }

    // 监视操作：如果todo数组的数据变化了，直接存储到浏览器的缓存中
    // watch(() => state.todos, (value) => {
    //   saveTodos(value)
    // }, {deep: true})
    watch(() => state.todos, saveTodos, {deep: true})


    return {
      ...toRefs(state),
      addTodo,
      deleteTodo,
      updateTodo,
      checkAll,
      clearAllCompletedTodos,
    }
  }
})
</script>
<style lang="scss" scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;

  .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
}
</style>