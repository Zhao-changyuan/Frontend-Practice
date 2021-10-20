<template>
  <div class="container">
    <div ref="stencilRef" class="stencil" />
    <div ref="graphContainerRef" class="graph-container" />
    <div v-show="nodeConfig.visible" class="node-config-wrap">
      <h3>节点设置</h3>
      <el-form :model="nodeForm" label-width="80px" label-position="left">
        <el-form-item label="名称:" prop="nodename">
          <el-input v-model="nodeForm.nodename" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="审批要求" prop="requirement">
          <el-input v-model="nodeForm.requirement" placeholder="请输入" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="审批者类型" prop="approvertype">
          111
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default { name: 'ApproveFlowChart' }
</script>
<script setup>
import { ref, reactive, onMounted, onUnmounted, watch } from 'vue'
import { Graph, Shape, Addon } from '@antv/x6'
import { EDGE_STROKE, DEFAULT_STROKE, magnetAvailabilityHighlighter, APPROVE_NODE_WIDTH } from './config'
import { bindKeys, showPorts, registerNodes, BeginNode, EndNode, ApproveNode } from './utils'
import { ElMessage } from 'element-plus'

const props = defineProps({
  // 为false时，父组件需要调用init进行手动初始化
  autoInit: {
    type: Boolean,
    default: true,
  },
})

const stencilRef = ref(null)
const graphContainerRef = ref(null)
const graph = ref(null)
const stencil = ref(null)

const nodeConfig = reactive({
  visible: false,
})
// 节点表单
const nodeForm = reactive({
  nodeid: '',
  nodename: '',
  requirement: '', // 审批要求
  approvertype: '', // 审批者类型
  apporvers: [], // 审批者列表
  num: 0, // 节点编号
})

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
      allowMulti: false,
      allowLoop: false,
      highlight: true,
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
          zIndex: 0,
        })
      },
      validateConnection({ targetMagnet, targetCell, sourceMagnet, sourceCell }) {
        if (!targetMagnet || targetMagnet.getAttribute('port-group') !== 'in') {
          return false
        }

        // 一个节点只能输入一条边
        if (sourceCell) {
          const useOutPorts = sourceCell.getUsedOutPorts(graph.value)
          if (useOutPorts.length > 1) {
            return false
          }
        }

        // 一个节点只能输入一条边
        if (targetCell) {
          const useInPorts = targetCell.getUsedInPorts(graph.value)
          if (useInPorts.length > 0) {
            console.log('useInPorts', useInPorts)
            return false
          }
        }

        if ((sourceCell && sourceCell instanceof BeginNode) && (targetCell && targetCell instanceof EndNode)) {
          return false
        }

        return true
      },
    },
    // 高亮
    highlighting: {
      magnetAvailable: magnetAvailabilityHighlighter,
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
    history: true,
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
    validateNode(droppingNode, options) {
      const nodes = graph.value.getNodes()
      if ((droppingNode instanceof BeginNode) && nodes.find((node) => node && node instanceof BeginNode)) {
        ElMessage.info('流程图只能包含一个开始节点')
        return false
      }
      if ((droppingNode instanceof EndNode) && nodes.find((node) => node && node instanceof EndNode)) {
        ElMessage.info('流程图只能包含一个结束节点')
        return false
      }

      return true
    },
    animation: true,
    getDragNode(node) {
      const { height } = node.size()
      return node.clone().size(APPROVE_NODE_WIDTH, height)
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
    attrs: {
      body: {
        rx: 6,
        ry: 6,
      },
      label: {
        text: '审批节点',
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

  // 处理选中节点
  graph.value.on('selection:changed', ({ selected }) => {
    if (selected.length !== 1) {
      nodeConfig.visible = false
      return
    }

    const curNode = selected[0]
    if (curNode instanceof BeginNode || curNode instanceof EndNode || !(curNode instanceof ApproveNode)) {
      nodeConfig.visible = false
      return
    }

    Object.assign(nodeForm, curNode.data)
    nodeConfig.visible = true
  })

  // 添加节点事件
  graph.value.on('node:added', ({ node, index, options }) => {
    if (node instanceof ApproveNode) {
      node.data = {
        nodeid: node.id,
        nodename: '审批节点',
        requirement: '', // 审批要求
        approvertype: '', // 审批者类型
        apporvers: [], // 审批者列表
        num: 0, // 节点编号
      }
    }
  })
}

// 同步表单数据到node.data
watch(nodeForm, (newVal, oldVal) => {
  if (!graph.value) {
    return
  }

  const node = graph.value.getCellById(newVal.nodeid)
  if (!node) {
    return
  }

  Object.assign(node.data, newVal)
  if (node.attrs.label.text !== newVal.nodename) {
    node.setAttrs({
      label: {
        text: newVal.nodename,
      },
    })
  }
})

/**
 * 初始化
*/
function init() {
  // 注册节点
  registerNodes()

  // 初始化画布
  initGraph()

  // 初始化 stencil
  initStencil()

  // 绑定快捷键
  bindKeys(graph.value)

  addEventHandler()
}

onMounted(() => {
  if (props.autoInit) {
    init()
  }
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
$stencilWidth: 180px;
$configWrapWidth: 300px;

.container {
  height: 100%;
  display: flex;
  border: 1px solid $borderColor;

  .stencil {
    width: $stencilWidth;
    height: 100%;
    position: relative;
    border-right: 1px solid $borderColor;
  }

  .graph-container {
    flex: 1 1 auto;
    width: calc(100% - #{$stencilWidth} - #{$configWrapWidth}) !important;
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

  .node-config-wrap {
    width: $configWrapWidth;
    height: 100%;
    padding: 10px;
    border-left: 1px solid $borderColor;
  }

}
</style>
