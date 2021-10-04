<template>
<svg class="svg-icon" aria-hidden="true">
  <use :xlink:href="iconName"></use>
</svg>
</template>

<script>
import { defineComponent, ref, reactive, computed } from 'vue'

export default defineComponent({
  name: 'App',
  props: {
    name: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    
    const iconName = computed(() => {
      return `#${props.name}`
    })

    return {
      iconName
    }
  }
})
</script>
<style lang="less" scoped>
.svg-icon {
  width: 0.3rem;
  height: 0.3rem;
}
</style>