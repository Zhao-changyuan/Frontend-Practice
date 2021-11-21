<template>
  <div>
    SubComp
    <slot>9999999999999</slot>
  </div>
</template>

<script>
export default { 
  name: 'SubComp',
  props: {
    one: {
      type: String,
    },
    two: {
      type: String,
    }
  },
  setup(props, { attrs, slots, parent, root, emit, refs }) {
    emit('myadd', '向父类传数据')
  },
}
</script>
<style scoped>

</style>