<template>
  <div ref="containerRef" class="container">
    
  </div>
</template>

<script>
export default { name: 'Org' }
</script>
<script setup>
import { ref, reactive, onMounted, onUnmounted} from 'vue'
import { Graph, Node, Point } from '@antv/x6'

const containerRef = ref(null)
const graph = ref(null)

// 注册自定义节点
Graph.registerNode(
  'org-node', 
  {
    width: 180,
    height: 60,
    // markup 指定了渲染节点/边时使用的SVG/HTML片段，使用JSON格式描述
    markup: [
      {
        tagName: 'rect',
        selector: 'body'
      },
      {
        tagName: 'image',
        selector: 'avatar'
      },
      {
        tagName: 'text',
        selector: 'rank'
      },
      {
        tagName: 'text',
        selector: 'name'
      }
    ],
    // attrs选项是一个复杂对象，该对象的Key是节点中SVG元素的选择器（Selector），
    // 对应的值是应用到该SVG袁术的SVG属性值（如fill何stroke).
    attrs: {
      body: {
        refWidth: '100%', // 设置元素宽度，宽度计算现对于ref指代的参照元素的宽度（参照宽度）
        refHeight: '100%',
        fill: '#FFF',
        stroke: '#000',
        strokeWidth: 2,
        rx: 10,
        ry: 10,
        pointerEvents: 'visiblePainted',
      },
      avatar: {
        width: 48,
        height: 48,
        refX: 8,
        refY: 6,
      },
      rank: {
        refX: 0.9,
        refY: 0.2,
        fontFamily: 'Courier New',
        fontSize: 14,
        textAnchor: 'end',
        textDecoration: 'underline',
      },
      name: {
        refX: 0.9,
        refY: 0.6,
        fontFamily: 'Courier New',
        fontSize: 14,
        fontWeight: '800',
        textAnchor: 'end'
      }
    }
  },
  true
)

// 注册自定义边
Graph.registerEdge(
  'org-edge',
  {
    zIndex: -1,
    attrs: {
      line: {
        fill: 'none',
        strokeLinejoin: 'round',
        strokeWidth: '2',
        stroke: '#4b4a67',
        sourceMarker: null,
        targetMarker: null,
      }
    }
  },
  true
)

/**
 * 创建成员节点
 */
function member(x, y, rank, name, image, background, textColor = '#000') {
  if (!graph.value) {
    return
  }

  return graph.value.addNode({
    x,
    y,
    shape: 'org-node',
    attrs: {
      body: {
        fill: background,
        stroke: 'none',
      },
      avatar: {
        opacity: 0.7,
        'xlink:href': image
      },
      rank: {
        text: rank,
        fill: textColor,
        wordSapacing: '-5px',
        letterSpacing: 0,
      },
      name: {
        text: name,
        fill: textColor,
        fontSize: 13,
        fontFamily: 'Arial',
        letterSpacing: 0
      }
    }
  })
}

/**
 * 链接
 */
function link(source, target, vertices) {
  if (!graph.value) {
    return
  }

  return graph.value.addEdge({
    vertices,
    source: { cell: source },
    target: { cell: target },
    shape: 'org-edge'
  })
}

const male = 'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*kUy8SrEDp6YAAAAAAAAAAAAAARQnAQ'
const female = 'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*f6hhT75YjkIAAAAAAAAAAAAAARQnAQ'

onMounted(() => {
  graph.value = new Graph({
    container: containerRef.value,
    grid: true,
    connecting: {
      // 被连接的节点的锚点，orth：正交点
      anchor: 'orth'
    }
  })

  // 创建成员
  const bart = member(300, 70, 'CEO', 'Bart Simpson', male, '#30d0c6')
  const homer = member(90, 200, 'VP Marketing', 'Homer Simpson', male, '#7c69fd', '#f1f1f1')
  const marge = member(300, 200, 'VP Sales', 'Marge Simpson', female, '#7c68fd', '#f1f1f1')
  const lisa = member(500, 200, 'VP Production', 'Lisa Simpson', female, '#7c68fd', '#f1f1f1')
  const maggie = member(400, 350, 'Manager', 'Maggie Simpson', female, '#feb563')
  const lenny = member(190, 350, 'Manager', 'Lenny Leonard', male, '#feb563')
  const carl = member(190, 500, 'Manager', 'Carl Carlson', male, '#feb563')

  link(bart, marge, [{ x: 385, y: 180 }])
  link(bart, homer, [{ x: 385, y: 180 }, { x: 175, y: 180 }])
  link(bart, lisa, [{ x: 385, y: 180 }, { x: 585, y: 180 }])
  link(homer, lenny, [{ x: 175, y: 380 }])
  link(homer, carl, [{ x: 175, y: 380 }, { x: 175, y: 530 }])
  link(marge, maggie, [{ x: 385, y: 380 }])
})



onUnmounted(() => {
  // 销毁画布
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