<template>
  <div>
    {{store.state.user.name}}
    <div>
      <button @click="changeName">改名字</button>
      <button @click="dosome">action dosome</button>
    </div>
    <div>fullname: {{store.getters['user/fullname']}}</div>
    <div>fullname2: {{store.getters['user/fullname2']}}</div>
    <div>fullname3: {{store.getters['user/fullname3']}}</div>
  </div>
</template>

<script>
export default { name: 'StoreModule' }
</script>
<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useStore } from 'vuex';

const store = useStore()

function changeName() {
  store.commit('user/setname', '白白')
}

function dosome() {
  store.dispatch('user/dosome')
}

onMounted(() => {
  console.log(store.getters['user/fullname'])
})
</script>
<style scoped>

</style>