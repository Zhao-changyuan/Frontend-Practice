<template>
  <div ref="containerRef" class="path-editor">
    
  </div>
</template>

<script>
export default { name: 'PathEditor' }
</script>
<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { Graph, Node, Edge, EdgeView } from '@antv/x6'

const containerRef = ref(null)
const graph = ref(null)

let edge = null
let node = null

/**
 * 初始化
 */
const init = (pos) => {
  if (!graph.value) return

  node = graph.value.addNode({
    shape: 'circle',
    width: 10,
    height: 10,
    ...pos,
    attrs: {
      body: {
        strokeWidth: 1,
        stroke: '#5F95FF',
        fill: '#eff4ff',
      },
    },
  })

  edge = graph.value.addEdge({
    source: node,
    target: pos,
    attrs: {
      line: {
        targetMarker: null,
        stroke: '#a2b1c3',
        strokeWidth: 2,
      },
    },
  })
}

/**
 * 添加路径点
 */
const addVertices = (pos) => {
  if (edge) {
    edge.appendVertex(pos)
  }
}

/**
 * 鼠标移动
 */
const onMouseMove = (e) => {
  if (edge && graph.value) {
    const pos = graph.value.clientToLocal(e.clientX, e.clientY)
    edge.setTarget(pos)
  }
}

/**
 * 打印
 */
const print = () => {
  if (edge && graph.value) {
    const view = graph.value.findViewByCell(edge)
    console.log(view.path.serialize())
  }
}

/**
 * 结束
 */
const finish = (closed) => {
  if (node && edge) {
    const vertices = edge.getVertices()
    if (closed) {
      if (vertices.length >= 2) {
        const center = node.getBBox().center
        edge.setSource(center)
        edge.setTarget(center)
        graph.value.removeNode(node)
        node = null
        print()
      } else {
        graph.value.removeCell([node, edge])
        node = null
        edge = null
      }
    } else {
      if (vertices.length >= 1) {
        const center = node.getBBox().center
        edge.setSource(center)
        edge.setTarget(vertices[vertices.length - 1])
        graph.value.removeNode(node)
        node = null
        print()
      } else {
        graph.value.removeCell([node, edge])
        node = null
        edge = null
      }
    }

    containerRef.value.removeEventListener('mousemove', onMouseMove)
  }
}

onMounted(() => {
  graph.value = new Graph({
    container: containerRef.value,
    grid: true,
  })

  graph.value.on('blank:click', ({x, y}) => {
    init({x, y})
    containerRef.value.addEventListener('mousemove', onMouseMove)
  })

  graph.value.on('edge:click', ({x, y}) => {
    console.log('edge:click')
    const nodes = graph.value.getNodesFromPoint(x, y)
    if (nodes.length && nodes[0] === node) {
      finish(true)
    } else {
      addVertices({ x, y })
    }
  })

  graph.value.on('edge:contextmenu', () => {
    finish(false)
  })
})

onUnmounted(() => {
  if (graph.value) {
    graph.value.dispose()
  }
})

</script>
<style lang="scss" scoped>
.path-editor {
  height: 100%;
  background-color: skyblue;
}
</style>