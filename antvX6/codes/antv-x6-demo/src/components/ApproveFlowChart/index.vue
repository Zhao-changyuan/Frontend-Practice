<template>
  <div class="container">
    <div ref="stencilRef" class="stencil" />
    <div ref="graphContainerRef" class="graph-container" />
  </div>
</template>

<script>
export default { name: 'ApproveFlowChart' }
</script>
<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { Graph, Shape, Addon } from '@antv/x6'
import { EDGE_STROKE, DEFAULT_STROKE, magnetAvailabilityHighlighter } from './config'
import { bindKeys, showPorts, registerNodes } from './utils'

const stencilRef = ref(null)
const graphContainerRef = ref(null)
const graph = ref(null)
const stencil = ref(null)

/**
 * 初始化画布
*/
function initGraph() {
  if (!graphContainerRef.value) {
    throw new Error('graph container is error!!')
  }

  graph.value = new Graph({
    container: graphContainerRef.value,
    grid: true,
    // 鼠标滚轮缩放
    mousewheel: {
      enabled: false,
      zoomAtMousePosition: true,
      midifiers: 'ctrl',
      minScale: 0.5,
      maxScale: 3,
    },
    // connecting 配置全局的连线规则
    connecting: {
      router: 'manhattan',
      connector: {
        name: 'rounded',
        args: {
          radius: 8,
        },
      },
      anchor: 'center',
      connectionPoint: 'anchor',
      allowBlank: false,
      snap: {
        radius: 20,
      },
      // 创建边
      createEdge() {
        return new Shape.Edge({
          attrs: {
            line: {
              stroke: EDGE_STROKE,
              strokeWidth: 2,
              targetMarker: {
                name: 'block',
                width: 12,
                height: 8,
              },
            },
          },
        })
      },
      validateConnection({ targetMagnet }) {
        return !!targetMagnet
      },
    },
    // 高亮
    highlighting: {
      // 自动吸附链接桩时高亮
      magnetAdsorbed: {
        name: 'stroke',
        args: {
          attrs: {
            fill: DEFAULT_STROKE,
            stroke: DEFAULT_STROKE,
          },
        },
      },
    },
    selecting: {
      enabled: true,
      rubberband: true,
      showNodeSelectionBox: true,
    },
    snapline: true,
    keyboard: true,
    clipboard: true,
  })
}

/**
 * 初始化 stencil
*/
function initStencil() {
  if (!graph.value || !stencilRef.value) return

  stencil.value = new Addon.Stencil({
    title: '流程图',
    target: graph.value,
    stencilGraphWidth: 200,
    stencilGraphHeight: 180,
    collapsable: true,
    groups: [
      {
        title: '流程节点',
        name: 'group1',
      },
    ],
    layoutOptions: {
      columns: 2,
      columnWidth: 80,
      rowHeight: 70,
    },
  })
  stencilRef.value.appendChild(stencil.value.container)

  // 加载节点
  const node1 = graph.value.createNode({
    shape: 'begin-node',
    label: '开始',
  })
  const node2 = graph.value.createNode({
    shape: 'approve-node',
    label: '审批节点',
    attrs: {
      body: {
        rx: 6,
        ry: 6,
      },
    },
  })
  const node3 = graph.value.createNode({
    shape: 'end-node',
    label: '结束',
  })
  stencil.value.load([node1, node2, node3], 'group1')
}

/**
 * 添加事件处理
 */
function addEventHandler() {
  if (!graphContainerRef.value || !graph.value) {
    throw new Error('graph-container or graph is null')
  }

  graph.value.on('node:mouseenter', () => {
    const ports = graphContainerRef.value.querySelectorAll('.x6-port-body')
    showPorts(ports, true)
  })
  graph.value.on('node:mouseleave', () => {
    const ports = graphContainerRef.value.querySelectorAll('.x6-port-body')
    showPorts(ports, false)
  })
}

onMounted(() => {
  // 注册节点
  registerNodes()

  // 初始化画布
  initGraph()

  // 初始化 stencil
  initStencil()

  // 绑定快捷键
  bindKeys(graph.value)

  addEventHandler()
})

onUnmounted(() => {
  if (graph.value) {
    graph.value.dispose()
  }
})

</script>
<style lang="scss" scoped>
$borderColor: #dfe3e8;
$selectBorderColor: #239edd;

.container {
  height: 100%;
  display: flex;
  border: 1px solid $borderColor;

  .stencil {
    width: 180px;
    height: 100%;
    position: relative;
    border-right: 1px solid $borderColor;
  }

  .graph-container {
    width: calc(100% - 180px);
    height: 100%;

    :deep {
      .x6-widget-selection-inner {
        border: 1px solid #239edd;
      }
      .x6-widget-selection-box {
        // opacity: 0;
        border-color: $selectBorderColor;
      }
    }
  }

  
}
</style>
