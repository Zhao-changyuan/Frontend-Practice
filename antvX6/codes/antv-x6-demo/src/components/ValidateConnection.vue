<template>
  <div ref="containerRef" class="container">
    
  </div>
</template>

<script>
export default { name: 'ValidateConnection' }
</script>
<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { Graph, Edge, Shape, NodeView } from '@antv/x6';

const containerRef = ref(null)
const graph = ref(null)

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

  // 获取新的入口锚点
  getNewInPorts(length) {
    return Array.from({ length }, () => {
      return {
        group: 'in'
      }
    })
  }

  /**
   * 更新入口锚点
   */
  updateInPorts(graph) {
    const minNumberOfPorts = 2
    const ports =this.getInPorts()
    const usedPorts = this.getUsedInPorts(graph)
    const newPorts = this.getNewInPorts(Math.max(minNumberOfPorts - usedPorts.length, 1))

    if (ports.length === minNumberOfPorts && ports.length - usedPorts.length > 0) {
      // noop
    } else if (ports.length === usedPorts.length) {
      console.log('1')
      this.addPorts(newPorts)
    } else if (ports.length + 1 > usedPorts.length) {
      console.log('2')
      this.prop(
        ['ports', 'items'],
        this.getOutPorts().concat(usedPorts).concat(newPorts),
        {
          rewrite: true
        }
      )
    }

    return this
  }
}

MyShape.config({
  attrs: {
    root: {
      magnet: false,
    },
    body: {
      fill: '#F5f5f5',
      stroke: '#d9d9d9',
      strokeWidth: 1
    }
  },
  ports: {
    items: [
      { group: 'out' }
    ],
    groups: {
      in: {
        position: {
          name: 'top'
        },
        attrs: {
          portBody: {
            magnet: 'passive',
            r: 6,
            stroke: '#ffa940',
            fill: '#FFF',
            strokeWidth: 2
          }
        }
      },
      out: {
        position: {
          name: 'bottom',
        },
        attrs: {
          portBody: {
            magnet: true,
            r: 6,
            fill: '#fff',
            stroke: '#3199FF',
            strokeWidth: 2
          }
        }
      }
    }
  },
  portMarkup: [
    {
      tagName: 'circle',
      selector: 'portBody'
    }
  ]
})

// 高亮
const magnetAvailabilityHighlighter = {
  name: 'stroke',
  args: {
    fill: '#fff',
    stroke: '#47c769'
  }
}

/**
 * 更新
 */
function update(view) {
  const cell  = view.cell
  if (cell instanceof MyShape) {
    cell.getInPorts().forEach((port) => {
      const portNode = view.findPortElem(port.id, 'portBody')
      view.unhighlight(portNode, {
        highlight: magnetAvailabilityHighlighter
      })
    })
    cell.updateInPorts(graph.value)
  }
}

onMounted(() => {
  graph.value = new Graph({
    grid: true,
    container: containerRef.value,
    highlighting: {
      magnetAvailable: magnetAvailabilityHighlighter,
      magnetAdsorbed: {
        name: 'stroke',
        args: {
          attrs: {
            fill: '#fff',
            stroke: '#31d0c6'
          }
        }
      }
    },
    // connecting 全局的的连线规则
    connecting: {
      snap: true,
      allowBlank: false,
      allowLoop: false, // 是否允许创建循环连线，即边的起始点和终止节点为同一节点
      highlight: true,
      connector: 'rounded',
      connectionPoint: 'boundary',
      router: {
        name: 'er',
        args: {
          direction: 'V'
        }
      },
      createEdge() {
        return new Shape.Edge({
          attrs: {
            line: {
              stroke: '#a0a0a0',
              strokeWidth: 1,
              targetMarker: {
                name: 'classic',
                size: 7
              }
            }
          }
        })
      },
      validateConnection({ sourceView, targetView, targetMagnet }) {
        if (!targetMagnet) {
          return false
        }

        // 直接判断SVGElement元素属性
        if (targetMagnet.getAttribute('port-group') !== 'in') {
          return false
        }

        // 已使用的入口锚点不可在连接
        if (targetView) {
          const node = targetView.cell
          if (node instanceof MyShape) {
            const portId = targetMagnet.getAttribute('port')
            const usedInPorts = node.getUsedInPorts(graph.value)
            if (usedInPorts.find((port) => port && port.id === portId)) {
              return false
            }
          }
        }

        return true
      }
    }
  })

  // 添加三个节点
  graph.value.addNode(
    new MyShape().resize(120, 40).position(200, 50).updateInPorts(graph.value)
  )
  graph.value.addNode(
    new MyShape().resize(120, 40).position(400, 50).updateInPorts(graph.value)
  )
  graph.value.addNode(
    new MyShape().resize(120, 40).position(300, 250).updateInPorts(graph.value)
  )

  // 添加事件
  graph.value.on('edge:connected', ({ previousView, currentView }) => {
    if (previousView) {
      update(previousView)
    }
    if (currentView) {
      update(currentView)
    }
  })
  graph.value.on('edge:removed', ({edge, options}) => {
    if (!options.ui) {
      return
    }

    const target = edge.getTargetCell()
    console.log('target', edge)
    if (target instanceof MyShape) {
      target.updateInPorts(graph.value)
    }
  })
  graph.value.on('edge:mouseenter', ({edge}) => {
    edge.addTools([
      'source-arrowhead',
      'target-arrowhead',
      {
        name: 'button-remove',
        args: {
          distance: -30,
        }
      }
    ])
  })
  graph.value.on('edge:mouseleave', ({edge}) => {
    edge.removeTools()
  })
})

onUnmounted(() => {
  if (graph.value) {
    graph.value.dispose()
  }
})


</script>
<style scoped>
.container {
  height: 100%;
}
</style>