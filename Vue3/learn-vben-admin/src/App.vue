<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />

  <div>
    <span class="iconify" data-icon="system-uicons:browser-alt" data-inline="false"></span>
    <span class="iconify" data-icon="carbon:calendar-settings" data-inline="false"></span>
    <span class="iconify" data-icon="mdi-light:hamburger" data-inline="false"></span>
    <span class="iconify" data-icon="la:arrow-circle-up-solid" data-inline="false"></span>
    <span class="iconify" data-icon="uim:vuejs" data-inline="false"></span>
    <span class="iconify" data-icon="noto:beaming-face-with-smiling-eyes" data-inline="false"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
