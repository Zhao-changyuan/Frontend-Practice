<template>
  <h3>AsyncComp 自己组件</h3>
  <h3>{{msg}}</h3>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  name: 'AsyncComp',
  setup() {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          msg: 'what are you no sha lei'
        })
      }, 2000)
    })

    // return {}
  }
})
</script>
<style scoped>

</style>