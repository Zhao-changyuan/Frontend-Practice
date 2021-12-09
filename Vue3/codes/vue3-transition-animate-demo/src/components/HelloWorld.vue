<template>
  <div>
    <input type="number" v-model.number="state.number" step="20">
    <p>{{ animatedNumber }}</p>
  </div>
</template>

<script lang="ts" setup>
import {reactive, computed, watch} from 'vue'

const state = reactive({
  number: 0,
  tweenedNumber: 0,
})

const animatedNumber = computed(() => {
  return state.tweenedNumber.toFixed(0)
})

watch(() => state.number, (newValue) => {
  gsap.to(state, { duration: 0.5, tweenedNumber: newValue })
})

</script>
<style lang="less" scoped>

</style>