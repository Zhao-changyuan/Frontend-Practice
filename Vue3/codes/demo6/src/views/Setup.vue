<template>
  <div>
    <h3>Setup</h3>
    <SubComp @myadd="add" one="111" two="222" three="333">
      <h2>8888888</h2>
    </SubComp>
  </div>
</template>

<script>
export default { name: 'Setup' }
</script>
<script setup>
import { ref, reactive } from 'vue'
import SubComp from '../components/SubComp.vue';

function add(msg) {
  console.log(msg)
}

</script>
<style scoped>

</style>