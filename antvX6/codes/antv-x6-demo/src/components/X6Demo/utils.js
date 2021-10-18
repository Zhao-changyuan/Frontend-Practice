import { Graph } from '@antv/x6'
import { STROKE_COLOR, FILL_COLOR, TEXT_COLOR, FONT_SIZE, ports } from './config'

/**
 * 注册快捷键
 * @param {Graph} graph 
 */
export function registerShortcutKey(graph) {
  if (!graph) {
    return 
  }

  // copy cut paste
  graph.bindKey(['meta+c', 'ctrl+c'], () => {
    const cells = graph.getSelectedCells()
    if (cells.length) {
      graph.copy(cells)
    }

    // 返回 false 时对应的键盘事件被忽略
    return false
  })

  graph.bindKey(['meta+x', 'ctrl+x'], () => {
    const cells = graph.getSelectedCells()
    if (cells.length) {
      graph.cut(cells)
    }

    return false
  })
 
  graph.bindKey(['meta+v', 'ctrl+v'], () => {
    if (!graph.isClipboardEmpty()) {
      const cells = graph.paste({ offset: 32 })
      graph.cleanSelection()
      graph.select(cells)
    }

    return false
  })

  // undo redo
  graph.bindKey(['meta+z', 'ctrl+z'], () => {
    if (graph.history.canUndo()) {
      graph.history.undo()
    }
    return false
  })
  graph.bindKey(['meta+shift+z', 'ctrl+shift+z'], () => {
    if (graph.history.canUndo()) {
      graph.history.redo()
    }
    return false
  })

  // select all
  graph.bindKey(['meta+a', 'ctrl+a'], () => {
    const nodes = graph.getNodes()
    if (nodes) {
      graph.select(nodes)
    }

    return false
  })

  // delete
  graph.bindKey('del', () => {
    const cells = graph.getSelectedCells()
    if (cells.length) {
      graph.removeCells(cells)
    }

    return false
  })

  // zoom
  graph.bindKey(['ctrl+1', 'meta+1'], () => {
    const zoom = graph.zoom()
    if (zoom < 1.5) {
      graph.zoom(0.1)
    }

    return false
  })
  graph.bindKey(['ctrl+2', 'meta+2'], () => {
    const zoom = graph.zoom()
    if (zoom > 0.5) {
      graph.zoom(-0.1)
    }

    return false
  })
}

/**
 * 控制链接桩的显示/隐藏
 * @param {Array} ports 
 * @param {boolean} show 
 */
export function showPorts(ports, show) {
  if (!ports || !ports.length) {
    return
  }

  ports.forEach(item => {
    item.style.visibility = show ? 'visible' : 'hidden'
  })
}

/**
 * 注册自定义节点
 * @param {Graph} graph 
 */
export function registerNodes() {
  const NODE_WIDTH = 66
  const NODE_HEIGHT = 36
  const IMAGE_STROKE = '#26C160'

  const attrs = {
    body: {
      strokeWidth: 1,
      stroke: STROKE_COLOR,
      fill: FILL_COLOR,
    },
    text: {
      fontSize: FONT_SIZE,
      color: TEXT_COLOR
    }
  }

  // 自定义矩形节点
  Graph.registerNode('custom-rect', {
    inherit: 'rect',
    width: NODE_WIDTH,
    height: NODE_HEIGHT,
    attrs,
    ports,
  }, true)

  // 多边形
  Graph.registerNode('custom-polygon', {
    inherit: 'polygon',
    width: NODE_WIDTH,
    height: NODE_HEIGHT,
    attrs,
    ports: {
      ...ports,
      items: [
        { group: 'top' },
        { group: 'bottom' },
      ]
    }
  }, true)

  // 圆形节点
  Graph.registerNode('custom-circle', {
    inherit: 'circle',
    width: 45,
    height: 45,
    attrs,
    ports,
  }, true)

  // 图片节点
  Graph.registerNode('custom-image', {
    inherit: 'rect',
    width: 52,
    height: 52,
    // markup 指定节点默认的SVG/HTML结构
    // attrs 自定节点的默认属性样式
    markup: [
      {
        tagName: 'rect',
        selector: 'body',
      },
      {
        tagName: 'image'
      },
      {
        tagName: 'text',
        selector: 'label'
      }
    ],
    attrs: {
      body: {
        strokeWidth: 1,
        stroke: IMAGE_STROKE,
        fill: IMAGE_STROKE,
      },
      image: {
        width: 26,
        height: 26,
        refX: 13,
        refY: 16,
      },
      label: {
        refX: 3,
        refY: 2,
        textAnchor: 'start',
        // 仅适用于 <text> 元素，元素与 y 坐标在垂直方向的对齐方式。。
        textVerticalAnchor: 'top',
        fontSize: FONT_SIZE,
        fill: '#FFF',
      },
    },
    ports,
  }, true)
}