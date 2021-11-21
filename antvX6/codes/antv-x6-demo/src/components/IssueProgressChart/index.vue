<template>
  <div ref="graphRef" class="container">
    111
  </div>
</template>

<script>
export default { name: 'IssueProgressChart' }
</script>
<script setup>
import { ref, reactive, onMounted } from 'vue'
import { Graph, Shape } from '@antv/x6'
import { BORDER_COLOR, nodeConfigs, nodeWidth, nodeHeight, verticalInterval, horizontalInterval } from './config'

const graphRef = ref(null)
const graph = ref(null)

function init() {
  graph.value = new Graph({
    container: graphRef.value,
    grid: true,
    interacting: false,
  })

  const cells = createNodesAndEdges()
  graph.value.resetCells(cells)
  graph.value.centerContent()
  
  graph.value.on('node:apply', ({e, node}) => {
    console.l og(node.attr('.title/text'))
  })
}

/**
 * 创建节点
 * @param {string} title 标题
 * @param {string} type 状态 disable:不能申请；process:可以申请；finish:已完成
 * @param {string} optText 操作文本
 * @param {string} time1 时间1
 * @param {string} time2 时间2
*/
function createNode(title, x, y, type = 'disable', optText='', time1 = '', time2 = '') {
  const nodeConfig = nodeConfigs[type]

  return graph.value.createNode({
    shape: 'progress-node',
    x,
    y,
    attrs: {
      '.card': { fill: nodeConfig.cardFill },
      '.title': { text: title },
      '.time1': { text: time1 },
      '.time2': { text: time2 },
      '.status-text': {
        fill: nodeConfig.statusTextColor,
        text: nodeConfig.statusText,
      },
      '.opt-text': {
        fill: nodeConfig.optTextColor,
        text: optText,
      },
    },
  })
}

/**
  * 创建边
*/
function createEdge(source, target) {
  return graph.value.createEdge({
    source: { cell: source.id },
    target: { cell: target.id },
    attrs: {
      line: {
        stroke: '#a0a0a0',
        strokeWidth: 1,
        targetMarker: {
          name: 'classic',
          size: 7,
        },
      },
    },
  })
}

function createNodesAndEdges() {
  let nodes = []
  let edges = []

  let x = 500
  let y = 20

  const issueDeclareNode = createNode('项目申报', x, y, 'finish')
  nodes.push(issueDeclareNode)

  y += nodeHeight + verticalInterval
  const contractNoteNode = createNode('合同书编制', x, y, 'finish')
  nodes.push(contractNoteNode)
  edges.push(createEdge(issueDeclareNode, contractNoteNode))

  y += nodeHeight + verticalInterval
  const approvalNode = createNode('立项',x, y, 'finish')
  nodes.push(approvalNode)
  edges.push(createEdge(contractNoteNode, approvalNode))

  // 调整节点以及包围框
  x = x + nodeWidth /2 - (nodeWidth * 2 + horizontalInterval * 1.5)
  y += nodeHeight + verticalInterval*1.5

  const wrapNode = new Shape.Rect({
    x: x - horizontalInterval*.5,
    y: y - verticalInterval*.5,
    width: (nodeWidth + horizontalInterval) * 4,
    height: nodeHeight + verticalInterval,
    attrs: {
      body: {
        stroke: BORDER_COLOR,
        strokeDasharray: "5 3",
      },
    },
  })
  nodes.push(wrapNode)
  edges.push(createEdge(approvalNode, wrapNode))
  
  const adjustNode = createNode('调整', x, y, 'process', '申请')
  nodes.push(adjustNode)

  // 撤销节点
  x += nodeWidth + horizontalInterval
  const revocationNode = createNode('撤销', x, y, 'process', '申请')
  nodes.push(revocationNode)

  // 进度报告 节点
   x += nodeWidth + horizontalInterval
  const progressReportNode = createNode('进度报告', x, y, 'process', '申请')
  nodes.push(progressReportNode)

  // 标准化审核 节点
  x += nodeWidth + horizontalInterval
  const standApproveNode = createNode('标准化审核', x, y, 'process', '申请')
  nodes.push(standApproveNode)

  x -= (horizontalInterval * 1.5 + nodeWidth * 1.5)
  y += nodeHeight + verticalInterval* 1.5
  const checkNode = createNode('验收', x, y)
  nodes.push(checkNode)
  edges.push(createEdge(wrapNode, checkNode))

  y += nodeHeight + verticalInterval
  const finishNode = createNode('结题', x, y)
  nodes.push(finishNode)
  edges.push(createEdge(checkNode, finishNode))

  y += nodeHeight + verticalInterval
  const resultRegisterNode = createNode('成果登记', x, y)
  nodes.push(resultRegisterNode)
  edges.push(createEdge(finishNode, resultRegisterNode))

  return [...nodes, ...edges]
}

onMounted(() => {
  // registerNodes()

  init()
})

</script>
<style lang="scss" scoped>
.container {
  height: 100%;

  :deep {
    .opt-text {
      &:hover { 
        text-decoration: underline;
      }
    }
  }
}
</style>