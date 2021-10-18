<template>
  <div class="container" ref="containerRef">
    
  </div>
</template>

<script>
export default { name: 'Tree' }
</script>
<script setup>
import { ref, reactive, onMounted } from 'vue'
import {Graph, Node, Edge, Shape} from '@antv/x6'

const graph = ref(null)
const containerRef = ref(null)

// 定义节点
class TreeNode extends Node {
  collapsed = false

  postprocess() {
    this.toggleCollapse(false)
  }

  isCollapsed() {
    return this.collapsed
  }

  toggleButtonVisibility(visible) {
    this.attr('buttonGroup', {
      display: visible ? 'block' : 'none'
    })
  }

  toggleCollapse(collapsed) {
    const target = collapsed == null ? !this.collapsed : collapsed
    if (!target) {
      this.attr('buttonSign', {
        d: 'M 1 5 9 5 M 5 1 5 9',
        strokeWidth: 1.6
      })
    } else {
      this.attr('buttonSign', {
        d: 'M 2 5 8 5',
        strokeWidth: 1.8
      })
    }

    this.collapsed = target
  }

}

TreeNode.config({
  zIndex: 2,
  markup: [
    {
      tagName: 'g',
      selector: 'buttonGroup',
      children: [
        {
          tagName: 'rect',
          selector: 'button',
          attrs: {
            'pointer-events': 'visiblePainted'
          }
        },
        {
          tagName: 'path', 
          selector: 'buttonSign',
          attrs: {
            fill: 'none',
            'pointer-events': 'none'
          }
        }
      ]
    },
    {
      tagName: 'rect',
      selector: 'body'
    },
    {
      tagName: 'text',
      selector: 'label'
    }
  ],
  attrs: {
    body: {
      refWidth: '100%',
      refHeight: '100%',
      strokeWidth: 1,
      fill: '#FFF',
      stroke: '#a0a0a0'
    },
    label: {
      // 换行
      textWrap: {
        ellipsis: true, // 添加省略号
        width: -10 // 减少相应宽度
      },
      textAnchor: 'middle',
      textVerticalAnchor: 'middle',
      refX: '50%',
      refY: '50%',
      fontSize: 12,
    },
    buttonGroup: {
      refX: '100%',
      refY: '50%'
    },
    button: {
      fill: '#4c65DD',
      stroke: 'none',
      x: -10,
      y: -10,
      height: 20,
      width: 30,
      rx: 10,
      ry: 10,
      cursor: 'pointer',
      event: 'node:collapse',
    },
    buttonSign: {
      refX: 5,
      refY: -5,
      stroke: '#FFF',
      strokeWidth: 1.6
    }
  }
})

// 定义边
class TreeEdge extends Shape.Edge {
  isHidden() {
    const node = this.getTargetNode()

    return !node || !node.isVisible()
  }
}

TreeEdge.config({
  zIndex: 1,
  attrs: {
    line:{
      stroke: '#a0a0a0',
      strokeWidth: 1,
      targetMarker: null
    }
  }
})

// 注册
Node.registry.register('tree-node', TreeNode, true)
Edge.registry.register('tree-edge', TreeEdge, true)

onMounted(() => {
  graph.value = new Graph({
    container: containerRef.value,
    grid: true,
    async: true,
    frozen: true,
    scroller: true,
    interacting: false, // 禁止节点/边 交互
    sorting: 'approx',
    background: {
      color: '#f5f5f5',
    },
    connecting: {
      anchor: 'orth', // 正交点
      connector: 'rounded',
      connectionPoint: 'boundary',
      router: {
        name: 'er',
        args: {
          offset: 24,
          direction: 'H'
        }
      }
    }
  })

  // 添加事件
  graph.value.on('node:collapse', ({node}) => {
    node.toggleCollapse()
    const collapsed = node.isCollapsed()

    const run = (pre) => {
      // getSuccessors() 获取所有后续节点
      const succ = graph.value.getSuccessors(pre, { distance: 1 })
      console.log('succ', succ)
      if(succ) {
        succ.forEach((node) => {
          node.toggleVisible(!collapsed)
          if (!node.isCollapsed()) {
            run(node)
          }
        })
      }
    }

    run(node)
  })

  fetch('https://x6.antv.vision/zh/examples/data/mindmap.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)

      const start = new Date().getTime()
      const nodes = data.nodes.map(({ leaf, ...metadata }) => {
        const node = new TreeNode(metadata)
        if (leaf) {
          node.toggleButtonVisibility(leaf === false)
        }

        return node
      })
      const edges = data.edges.map((edge) => new TreeEdge({
        source: edge.source,
        target: edge.target
      }))

      graph.value.resetCells([...nodes, ...edges])

      graph.value.unfreeze({
        progress({ done }) {
          if (done) {
            const time = new Date().getTime() - start
            console.log(time)
            graph.value.unfreeze({
              batchSize: 50,
            })
            graph.value.zoomToFit({ padding: 24 })
          }
        }
      })
    })
})


</script>
<style scoped>
.container {
  height: 100%;
  /* background-color: skyblue; */
}
</style>