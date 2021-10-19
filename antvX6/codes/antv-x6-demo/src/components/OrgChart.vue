<template>
  <div ref="containerRef" class="container">
    
  </div>
</template>

<script>
export default { name: 'OrgChart' }
</script>
<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { Graph, Cell, Node, Color, Dom } from '@antv/x6'
import dagre from 'dagre'
import { getTargetAnchor } from '@antv/x6/lib/registry/router/util'

const containerRef = ref(null)
const graph = ref(null)

// 自定义节点
Graph.registerNode(
  'org-node',
  {
    width: 260,
    height: 88,
    markup: [
      {
        tagName: 'rect',
        attrs: {
          class: 'card',
        },
      },
      {
        tagName: 'image',
        attrs: {
          class: 'image',
        },
      },
      {
        tagName: 'text',
        attrs: {
          class: 'rank',
        },
      },
      {
        tagName: 'text',
        attrs: {
          class: 'name',
        },
      },
      {
        tagName: 'g',
        attrs: {
          class: 'btn add',
        },
        children: [
          {
            tagName: 'circle',
            attrs: {
              class: 'add',
            },
          },
          {
            tagName: 'text',
            attrs: {
              class: 'add',
            },
          },
        ],
      },
      {
        tagName: 'g',
        attrs: {
          class: 'btn del',
        },
        children: [
          {
            tagName: 'circle',
            attrs: {
              class: 'del',
            },
          },
          {
            tagName: 'text',
            attrs: {
              class: 'del',
            },
          },
        ],
      },
    ],
    attrs: {
      '.card': {
        rx: 10,
        ry: 10,
        refWidth: '100%',
        refHeight: '100%',
        fill: '#fff',
        stroke: '#000',
        strokeWidth: 0,
        // pointer-events CSS属性指定在什么情况下（如果有）某个特定的图形元素可以成为鼠标事件的target
        /**
         * visiblePainted 只适用于SVG
         *  1. visibility属性为visible，且鼠标指针在元素内部，且fill属性指定了none之外的值
         *  2. visibility属性置为visible，且鼠标指针在元素边界上，且stroke属性指定了none之外的值
         */
        pointerEvents: 'visiblePainted',
      },
      '.image': {
        x: 16,
        y: 16,
        width: 56,
        height: 56,
        opacity: 0.7,
      },
      '.rank': {
        refX: 0.95,
        refY: 0.5,
        fontFamily: 'Courier New',
        fontSize: 13,
        textAnchor: 'end',
        textVerticalAnchor: 'middle',
      },
      '.name': {
        refX: 0.95,
        refY: 0.7,
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: '600',
        textAnchor: 'end',
      },
      '.btn.add': {
        refDx: -16,
        refY: 16,
        event: 'node:add',
      },
      '.btn.del': {
        refDx: -44,
        refY: 16,
        event: 'node:delete',
      },
      '.btn > circle': {
        r: 10,
        fill: 'transparent',
        stroke: '#333',
        strokeWidth: 1,
      },
      '.btn.add > text': {
        fontSize: 20,
        fontWeight: 800,
        stroke: '#000',
        x: -5.5,
        y: 7,
        fontFamily: 'Times New Roman',
        text: '+',
      },
      '.btn.del > text': {
        fontSize: 28,
        fontWeight: 500,
        stroke: '#000',
        x: -4.5,
        y: 6,
        fontFamily: 'Times New Roman',
        text: '-',
      },
    },
  },
  true,
)

// 自定义边
Graph.registerEdge(
  'org-edge',
  {
    zIndex: -1,
    attrs: {
      line: {
        stroke: '#585858',
        strokeWidth: 3,
        sourceMarker: null,
        targetMarker: null,
      },
    },
  },
  true,
)

const male =
  'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*kUy8SrEDp6YAAAAAAAAAAAAAARQnAQ'
const female =
  'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*f6hhT75YjkIAAAAAAAAAAAAAARQnAQ'

// 布局方向
const dir = 'LR' // LR RL TB BT

/**
 * 创建节点
 */
function createNode(rank, name, image, background, textColor = '#000') {
  if (!graph.value) return
  return graph.value.createNode({
    shape: 'org-node',
    attrs: {
      '.card': {fill: background},
      '.image': { xlinkHref: image },
      '.rank': {
        fill: textColor,
        text: Dom.breakText(rank, { width: 160, height: 45 }),
      },
      '.name': {
        fill: textColor,
        text: Dom.breakText(name, { width: 160, height: 45 }),
      },
      '.btn > circle': { stroke: textColor },
      '.btn > text': { fill: textColor, stroke: textColor },
    },
  })
}

/**
 * 创建边
 */
function createEdge(source, target) {
  if (!graph.value) return

  return graph.value.createEdge({
    shape: 'org-edge',
    source: { cell: source },
    target: { cell: target },
  })
}

/**
 * 自动布局
 */
function layout() {
  if (!graph.value) return

  const nodes = graph.value.getNodes()
  const edges = graph.value.getEdges()
  const g = new dagre.graphlib.Graph()
  
  g.setGraph({ rankdir: dir, nodesep: 16, ranksep: 16 })
  g.setDefaultEdgeLabel(() => ({}))

  const width = 260
  const height = 90
  nodes.forEach((node) => {
    g.setNode(node.id, { width, height })
  })

  edges.forEach((edge) => {
    const source = edge.getSource()
    const target = edge.getTarget()
    g.setEdge(source.cell, target.cell)
  })

  dagre.layout(g)

  graph.value.freeze()

  g.nodes().forEach((id) => {
    const node = graph.value.getCell(id)
    if (node) {
      const pos = g.node(id)
      node.position(pos.x, pos.y)
    }
  })

  edges.forEach((edge) => {
    const source = edge.getSourceNode()
    const target = edge.getTargetNode()
    const sourceBBox = source.getBBox()
    const targetBBox = target.getBBox()

    console.log(sourceBBox, targetBBox)

    if ((dir === 'LR' || dir === 'RL') && sourceBBox.y !== targetBBox.y) {
      const gap = dir === 'LR' ?
        (targetBBox.x - sourceBBox.x - sourceBBox.width) :
        (-sourceBBox.x + targetBBox.x + targetBBox.width)
      const fix = dir === 'LR' ? sourceBBox.width : 0
      const x = sourceBBox.x + fix + gap / 2
      edge.setVertices([
        { x, y: sourceBBox.center.y },
        { x, y: targetBBox.center.y },
      ])
    } else if ((dir === 'TB' || dir === 'BT') && sourceBBox.x !== targetBBox.x) {
      const gap = dir === 'TB'? (targetBBox.y - sourceBBox.y - sourceBBox.height) :
        (-sourceBBox.y + targetBBox.y + targetBBox.height)
        const fix = dir === 'TB' ? sourceBBox.height : 0
        const y = sourceBBox.y + fix + gap / 2
        edge.setVertices([
          { x: sourceBBox.center.x, y },
          { x: targetBBox.center.x, y },
        ])
    } else {
      edge.setVertices([])
    }
  })

  graph.value.unfreeze()
}

// 监听自定义事件
function setup() {
  if (!graph.value) return

  // 添加节点
  graph.value.on('node:add', ({e, node}) => {
    e.stopPropagation()

    const bg = Color.randomHex()
    const member = createNode('Employee', 'New Employee', Math.random() < 0.5? male : female, bg, Color.invert(bg, true))
    graph.value.freeze()
    graph.value.addCell([member, createEdge(node, member)])
    layout()
  })

  // 删除节点
  graph.value.on('node:delete', ({ e, node }) => {
    e.stopPropagation()
    graph.value.freeze()
    graph.value.removeCell(node)
    layout()
  })
}

onMounted(() => {

  // 创建画布
  graph.value = new Graph({
    container: containerRef.value,
    grid: true,
    scroller: true,
    snapline: true,
    interacting: false,
  })

  // 节点
  const nodes = [
    createNode('Founder & Chairman', 'Pierre Omidyar', male, '#31d0c6'),
    createNode('President & CEO', 'Margaret C. Whitman', female, '#31d0c6'),
    createNode('President, PayPal', 'Scott Thompson', male, '#7c68fc'),
    createNode(
      'President, Ebay Global Marketplaces',
      'Devin Wenig',
      male,
      '#7c68fc',
    ),
    createNode(
      'Senior Vice President Human Resources',
      'Jeffrey S. Skoll',
      male,
      '#fe854f',
    ),
    createNode(
      'Senior Vice President Controller',
      'Steven P. Westly',
      male,
      '#feb663',
    ),
  ]

  // 边
  const edges = [
    createEdge(nodes[0], nodes[1]),
    createEdge(nodes[1], nodes[2]),
    createEdge(nodes[1], nodes[3]),
    createEdge(nodes[1], nodes[4]),
    createEdge(nodes[1], nodes[5]),
  ]

  graph.value.resetCells([...nodes, ...edges])
  layout()
  graph.value.zoomTo(0.8)
  graph.value.centerContent()

  setup()
})

onUnmounted(() => {
  if (graph.value) {
    graph.value.dispose()
  }
})

</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  // background-color: skyblue;

  :deep {
    .x6-cell {
      cursor: default;
    }

    .x6-node .btn {
      cursor: pointer;
    }
  }
}
</style>