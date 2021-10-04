<template>
<div>
  Films
</div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'Films',
  setup(props) {
    const route = useRoute()
    console.log(route.params)
    

    return {

    }
  }
}
</script>
<style scoped>

</style>