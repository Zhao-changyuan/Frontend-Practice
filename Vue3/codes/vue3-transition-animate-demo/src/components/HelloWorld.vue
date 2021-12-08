<template>
  <div>
    <transition name="no-mode-fade" mode="out-in">
      <button v-if="on" key="on" @click="on = false">on</button>
      <button v-else="on" key="off" @click="on = true">off</button>
    </transition>
  </div>
</template>

<script lang="ts" setup>

import {ref} from 'vue'

const on = ref(false)

</script>
<style scoped>

.no-mode-fade-enter-active,
.no-mode-fade-leave-active {
  transition: opacity .5s;
}

.no-mode-fade-enter-from,
.no-mode-fade-leave-to {
  opacity: 0;
}

button {
  background: #05ae7f;
  border-radius: 4px;
  display: inline-block;
  border: none;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>