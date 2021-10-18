<template>
  <div>
    
  </div>
</template>

<script>
export default { name: 'ValidateConnection' }
</script>
<script setup>
import { ref, reactive } from 'vue'
import { Graph, Edge, Shape, NodeView } from '@antv/x6';

// 定义节点
class MyShape extends Shape.Rect {

  // 获取入口锚点
  getInPorts() {
    return this.getPortsByGroup('in')
  }

  // 获取出口锚点
  getOutPorts() {
    return this.getPortsByGroup('out')
  }

  /**
   * 获取已使用的入口锚点
   */
  getUsedInPorts(graph) {
    // graph.getIncomingEdges(...) 获取连接到节点/边的输入边，即边中终点为指定节点/边的边。
    const incomingEdges = graph.getIncomingEdges(this) || []
    return incomingEdges.map((edge) => {
      const portId = edge.getTargetPortId()
      return this.getPort(portId)
    })
  }
}

</script>
<style scoped>

</style>