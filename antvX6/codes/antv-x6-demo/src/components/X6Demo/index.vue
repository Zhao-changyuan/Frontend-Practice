<template>
  <div class="container">
    <div ref="stencilRef" class="stencil"></div>
    <div ref="graphContainerRef"  class="graph-container"></div>
  </div>
</template>

<script>
export default { name: 'X6Demo' }
</script>
<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { Graph, Shape, Addon } from '@antv/x6'
import { registerShortcutKey, showPorts, registerNodes } from './utils'
import { STROKE_COLOR } from './config'

const stencilRef = ref(null)
const graphContainerRef = ref(null)


const graph = ref(null)
const stencil = ref(null)

/**
 * 初始化画布
 */
function initGraph() {
  if (!graphContainerRef.value) {
    return
  }

  // 配置全局的连线规则
  const connecting = {
    router: 'manhattan',
    // connector 连接器将起点、路由返回的点、终点加工为<path>元素的d属性，决定了边渲染到画布后的样式。
    connector: {
      name: 'rounded',
      args: {
        radius: 8,
      },
    },
    // anchor 当连接到节点时，通过 anchor 来指定被连接的节点的锚点，默认值为 center
    anchor: 'center',
    // connectionPoint 指定连接点
    connectionPoint: 'anchor', // 将锚点作为连接点
    // allowBlank 是否允许连接到画布空白位置的点，默认为true
    allowBlank: false,
    // snap 连线时自动吸附
    snap: {
      radius: 20, // 自定吸附距离 20px
    },
    // createEdge 连接的过程中创建新的边
    createEdge() {
      return new Shape.Edge({
        attrs: {
          line: {
            stroke: '#A2B1C3',
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
    // validateConnection 在移动边的时候判断连接是否有效
    validateConnection({ targetMagnet }) {
      return !!targetMagnet
    }, 
  }

  // highlighting 指定触发某种交互时的高亮样式
  const highlighting = {
    // magnetAdsorbed 连线过程中，自动吸附到链接桩时被使用
    magnetAdsorbed: {
      name: 'stroke',
      args: {
        attrs: {
          fill: STROKE_COLOR,
          stroke: STROKE_COLOR,
        },
      },
    },
  }

  graph.value = new Graph({
    container: graphContainerRef.value,
    grid: true,
    // 滚轮缩放 MouseWheel
    mousewheel: {
      enabled: true,
      zoomAtMousePosition: true,
      modifiers: 'ctrl',
      minScale: 0.5,
      maxScale: 3,
    },
    // 配置全局的连线规则
    connecting,
    highlighting,
    // resizing 缩放节点 默认禁止
    resizing: true,
    // rotating 旋转节点 默认禁止 
    rotating: false,
    // selecting 点选/框选 默认禁用
    selecting: {
      enabled: true,
      rubberband: true, // 是否启用框选
      showNodeSelectionBox: true, // 是否显示节点的选择框
    },
    // snapline 对齐线，默认禁用
    snapline: true,
    // keyboard 键盘快捷键 默认禁用
    keyboard: true,
    // clipboard 剪切板，默认禁用
    clipboard: true,
    // history 撤销/重做 默认禁用
    history: true,
  })
}

/**
 * 初始化 stencil
 * Stencil 是Addon命名空间中的一个插件，是在Dnd基础上进一步封装，提供了一个类似侧边栏的UI组件，
 * 并支持分组、折叠、搜索等能力
 */
function initStencil() {
  if (!stencilRef.value || !graph.value) {
    return
  }

  stencil.value = new Addon.Stencil({
    title: '流程图',
    target: graph.value,
    stencilGraphWidth: 200, // 模板画布宽度
    stencilGraphHeight: 180, // 模板画布高度
    collapsable: true, // 是否显示全局折叠/展开按钮
    groups: [
      {
        title: '基础流程图',
        name: 'group1',
      },
      {
        title: '系统设计图',
        name: 'group2',
        graphHeight: 250,
        layoutOptions: {
          rowHeight: 70,
        },
      },
    ],
    layoutOptions: {
      columns: 2,
      columnWidth: 80,
      rowHeight: 55,
    },
  })

  stencilRef.value.appendChild(stencil.value.container)
}

/**
 * 添加事件处理
 */
function addEventHandler() {
  if (!graph.value || !graphContainerRef.value) {
    return
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

/**
 * 侧边栏加载节点
 */
function stencilLoadNodes() {
  if (!graph.value || !stencil.value) {
    return
  }

  const r1 = graph.value.createNode({
    shape: 'custom-rect',
    label: '开始',
    attrs: {
      body: {
        rx: 20,
        ry: 26,
      },
    },
  })
  const r2 = graph.value.createNode({
    shape: 'custom-rect',
    label: '过程',
  })
  const r3 = graph.value.createNode({
    shape: 'custom-rect',
    label: '可选过程',
    attrs: {
      body: {
        rx: 6,
        ry: 6,
      },
    },
  })
  const r4 = graph.value.createNode({
    shape: 'custom-polygon',
    label: '决策',
    attrs: {
      body: {
        refPoints: '0,10 10,0 20,10 10,20',
      },
    },
  })
  const r5 = graph.value.createNode({
    shape: 'custom-polygon',
    label: '数据',
    attrs: {
      body: {
        refPoints: '10,0 40,0 30,20 0,20',
      },
    },
  })
  const r6 = graph.value.createNode({
    shape: 'custom-circle',
    label: '连接',
  })

  stencil.value.load([r1, r2, r3 ,r4, r5, r6], 'group1')

  // 图片节点
  const m1 = graph.value.createNode({
    shape: 'custom-image',
    label: 'Client',
    attrs: {
      image: {
        'xlink:href': 'https://gw.alipayobjects.com/zos/bmw-prod/687b6cb9-4b97-42a6-96d0-34b3099133ac.svg',
      },
    },
  })
  const m2 = graph.value.createNode({
    shape: 'custom-image',
    label: 'Http',
    attrs: {
      body: {
        stroke: '#2CB9FF',
        fill: '#2CB9FF',
      },
      image: {
        'xlink:href': 'https://gw.alipayobjects.com/zos/bmw-prod/dc1ced06-417d-466f-927b-b4a4d3265791.svg',
      },
    },
  })
  const m3 = graph.value.createNode({
    shape: 'custom-image',
    label: 'Api',
    attrs: {
      body: {
        stroke: '#5AB0BE',
        fill: '#5AB0BE',
      },
      image: {
        'xlink:href': 'https://gw.alipayobjects.com/zos/bmw-prod/c55d7ae1-8d20-4585-bd8f-ca23653a4489.svg',
      },
    },
  })
  const m4 = graph.value.createNode({
    shape: 'custom-image',
    label: 'Sql',
    attrs: {
      body: {
        stroke: '#E6475B',
        fill: '#E6475B',
      },
      image: {
        'xlink:href': 'https://gw.alipayobjects.com/zos/bmw-prod/6eb71764-18ed-4149-b868-53ad1542c405.svg',
      },
    },
  })
  const m5 = graph.value.createNode({
    shape: 'custom-image',
    label: 'Clound',
    attrs: {
      body: {
        stroke: '#DA2625',
        fill: '#DA2625',
      },
      image: {
        'xlink:href': 'https://gw.alipayobjects.com/zos/bmw-prod/c36fe7cb-dc24-4854-aeb5-88d8dc36d52e.svg',
      },
    },
  })
  const m6 = graph.value.createNode({
    shape: 'custom-image',
    label: 'Mq',
    attrs: {
      body: {
        stroke: '#FFB15f',
        fill: '#FFB15f',
      },
      image: {
        'xlink:href': 'https://gw.alipayobjects.com/zos/bmw-prod/2010ac9f-40e7-49d4-8c4a-4fcf2f83033b.svg',
      },
    },
  })

  stencil.value.load([m1, m2, m3, m4, m5, m6], 'group2')
}


onMounted(() => {
  initGraph()
  initStencil()
  registerShortcutKey(graph.value)
  addEventHandler()
  registerNodes()
  stencilLoadNodes()
})

onUnmounted(() => {
  console.log('onUnmounted 销毁画布')
  if (graph.value) {
    graph.value.dispose()
  }
})

</script>
<style lang="scss" scoped>
.container {
  display: flex;
  border: 1px solid #dfe3e8;
  height: 100%;

  .stencil {
    width: 180px;
    height: 100%;
    position: relative;
    border-right: 1px solid #dfe3e8;
  }

  .graph-container {
    width: calc(100% - 180px);
    height: 100%;
  }

  :deep {
    .x6-widget-stencil {
      background-color: #fff;
    }

    .x6-widget-stencil-title {
      background-color: #fff;
    }

    .x6-widget-stencil-group-title {
      background-color: #FFF;
    }

    .x6-widget-transform {
      margin: -1px 0 0 -1px;
      padding: 0px;
      border: 1px solid #239edd;

      > div {
        border: 1px solid #239edd;
        &:hover{
          background-color: #3dafe4;
        }
      }

      .x6-widget-transform-active-handle {
        background-color: #3dafe4;
      }

      .x6-widget-transform-resize {
        border-radius: 0;;
      }
    }

    .x6-widget-selection-inner {
      border: 1px solid #239edd;
    }

    .x6-widget-selection-box {
      opacity: 0;
    }
  }
}
</style>