<template>
  <div>
    <div id="v-model-multiple-checkboxes">
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
      <br />
      <span>Checked names: {{ checkedNames }}</span>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, watch } from 'vue'

export default {
  setup() {
    let tags = reactive([])
    let checkedNames = reactive([])

    watch(checkedNames, (newVal, oldVal) => {
      console.log(newVal)
    })

    return {
      tags,
      checkedNames,
    }
  },
}
</script>
<style lang="scss" scoped></style>
