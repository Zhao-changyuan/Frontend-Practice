<template>
<div>
  <h3>AsyncAddress组件</h3>
  <h5>data: {{data}}</h5>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'AsyncAddress',
  async setup() {

    const result = await axios.get('/data/address.json')
    return {
      data: result.data,
    }
  }
})
</script>
<style scoped>

</style>