<template>
  <div class="opt-wrap">
    <button @click="visible = !visible">切换X6Demo显示</button>
  </div>
  <div class="wrap">
    <!-- <X6Demo v-if="visible"></X6Demo> -->
    <!-- <ValidateConnection></ValidateConnection> -->
    <!-- <Tree></Tree> -->
    <!-- <Org></Org> -->
    <!-- <OrgChart></OrgChart> -->
    <!-- <PathEditor></PathEditor> -->
    <ApproveFlowChart></ApproveFlowChart>
  </div>
</template>

<script>
export default { name: 'App' }
</script>

<script setup>
import X6Demo from './components/X6Demo/index.vue';
import ValidateConnection from './components/ValidateConnection.vue';
import Tree from './components/Tree.vue'
import Org from './components/Org.vue';
import OrgChart from './components/OrgChart.vue';
import PathEditor from './components/PathEditor.vue';
import ApproveFlowChart from './components/ApproveFlowChart/index.vue'
import {ref} from 'vue'

const visible = ref(true)

</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;

  .opt-wrap {
    padding-bottom: 10px;
  }

  .wrap {
    flex: 1 1 auto;
  }
}
</style>
