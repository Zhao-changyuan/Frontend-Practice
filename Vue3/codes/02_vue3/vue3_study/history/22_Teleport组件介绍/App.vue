<template>
<h2>父级组件</h2>

<ModalButton />
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import ModalButton from './components/ModalButton.vue'

export default defineComponent({
  name: 'App',
  components: {ModalButton},
  setup() {

    return {

    }
  }
})
</script>
<style scoped>

</style>