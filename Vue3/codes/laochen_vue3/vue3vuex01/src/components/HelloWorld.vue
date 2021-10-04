

<template>
  <div>
    <h1>{{store?.state.msg}}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, reactive } from 'vue'
import {IStore} from '../types'

defineProps<{ msg: string }>()

const count = ref(0)

const store = inject<IStore>('store')

console.log('store', store)
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
