<template>
<h3>Son子级组件</h3>
<GrandSon />
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import GrandSon from './GrandSon.vue'

export default defineComponent({
  name: 'Son',
  components: {GrandSon},
  setup() {

    return {

    }
  }
})
</script>
<style scoped>

</style>