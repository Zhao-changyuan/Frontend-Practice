<template>
<div class="todo-header">
  <input type="text" v-model="title" placeholder="请输入您的任务名称，按回车确认" @keyup.enter="add">
</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  name: 'Header',
  props: {
    addTodo: {
      type: Function,
      required: true,
    }
  },
  setup(props) {


    const title = ref('')

    // 回车的时间的回调函数，用来添加数据
    const add = () => {
      const text = title.value.trim()
      if (!text) return

      const todo = {
        id: Date.now(),
        title: text,
        isCompleted: false,
      }
      props.addTodo(todo)
      // 清空文本框
      title.value = ''
    }

    return {
      add,
      title
    }
  }
})
</script>
<style lang="scss" scoped>
.todo-header {
  input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;

    &:focus {
      outline: none;
      border-color: rgba(82, 168, 236, .8);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, .6);
    }
  }
}

</style>