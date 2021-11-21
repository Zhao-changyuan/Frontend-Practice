<template>
  <div class="about">
    <h3>count: {{data.count}}</h3>
    <h3>double: {{ double }}</h3>
    <div>
      <button @click="add">+1</button>
    </div>
  </div>
</template>

<script>
export default {name: 'About'}
</script>
<script setup>
import {ref, reactive, computed} from 'vue'

const data = reactive({
  count: 2,
})

const double = computed(() => {
  return data.count * 2
})

function add() {
  data.count++
}

</script>
