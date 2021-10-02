<template>
<li @mouseenter="mouseHandler(true)" @mouseleave="mouseHandler(false)">
  <label>
    <input type="checkbox" v-model="isComplete">
    <span>{{ todo.title }}</span>
  </label>
  <button class="btn btn-danger" @click="delTodo">删除</button>
</li>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from 'vue'
import {Todo} from '../types/todo'

export default defineComponent({
  name: 'Item',
  props: {
    todo: {
      type: Object as () => Todo, // 函数返回的是Todo类型
      required: true,
    },
    deleteTodo: {
      type: Function,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    updateTodo: {
      type: Function,
      required: true,
    }
  },
  setup(props, {emit}) {
    const isComplete = computed({
      get() {
        return props.todo.isCompleted
      },
      set(val) {
        props.updateTodo(props.todo, val)
      }
    })

    const mouseHandler = (flag: boolean) => {
      if (flag) {
        console.log('111')
      }
    }

    // 删除数据的方法
    const delTodo = () => {
      // 
      if (window.confirm('确定要删除吗？')) {
        props.deleteTodo(props.index)
      }
    }


    return {
      isComplete,
      mouseHandler,
      delTodo,
    }
  }
})
</script>
<style lang="scss" scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;

  &:hover {
    background-color: pink;
    color: green;

    button {
      display: inline-block;
    }
  }

  label {
    float: left;
    cursor: pointer;
  }
}

li label, li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>