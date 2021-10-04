<template>
  <div class="home">
    <h1>数量：{{$store.state.count}}</h1>
    <button @click="increment">加以</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { useStore } from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    const store = useStore()

    function increment() {
      store.commit('SET_COUNT', store.state.count + 1)
    }

    return {
      increment,
    }
  },
}
</script>
