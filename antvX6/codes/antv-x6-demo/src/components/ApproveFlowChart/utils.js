
import { Graph } from '@antv/x6'
import {
  RECT_NODE_WIDTH, RECT_NODE_HEIGHT,
  DEFAULT_STROKE, DEFAULT_FILL,
  TEXT_COLOR,
  ports,
  CIRCLE_NODE_WIDTH,
} from './config'

/**
 * 绑定快捷键
 * @param {Graph} graph 
 */
export function bindKeys(graph) {
  if (!graph) return

  // copy cut paste
  graph.bindKey(['meta+c', 'ctrl+c'], () => {
    const cells = graph.getSelectedCells()
    if (cells.length) {
      graph.copy(cells)
    }
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

  //undo redo
  graph.bindKey(['meta+z', 'ctrl+z'], () => {
    if (graph.history.canUndo()) {
      graph.history.undo()
    }
    return false
  })
  graph.bindKey(['meta+shift+z', 'ctrl+shift+z'], () => {
    if (graph.history.canRedo()) {
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
  })

  //delete
  graph.bindKey(['backspace', 'del'], () => {
    const cells = graph.getSelectedCells()
    if (cells.length) {
      graph.removeCells(cells)
    }
  })

  // zoom
  graph.bindKey(['ctrl+1', 'meta+1'], () => {
    const zoom = graph.zoom()
    if (zoom < 1.5) {
      graph.zoom(0.1)
    }
  })
  graph.bindKey(['ctrl+2', 'meta+2'], () => {
    const zoom = graph.zoom()
    if (zoom > 0.5) {
      graph.zoom(-0.1)
    }
  })
}

/**
 * 控制链接桩显示/隐藏
 * @param {Array} ports 
 */
export function showPorts(ports, show) {
  if (!ports || !ports.length) {
    throw new Error('ports is null!!')
  }

  ports.forEach((port) => {
    port.style.visibility = show ? 'visible' : 'hidden'
  })
}

/**
 * 注册节点
 * 审批节点 approve-node
 * 开始节点 begin-node
 * 归档节点 end-node
 */
export function registerNodes() {

  // 审批节点
  Graph.registerNode(
    'approve-node',
    {
      inherit: 'rect',
      width: RECT_NODE_WIDTH,
      height: RECT_NODE_HEIGHT,
      attrs: {
        body: {
          strokeWidth: 1,
          stroke: DEFAULT_STROKE,
          fill: DEFAULT_FILL,
        },
        text: {
          fontSize: 12,
          color: TEXT_COLOR,
        },
      },
      ports: {
        ...ports,
        items: [{ group: 'right' }, { group: 'left' }],
      },
    },
  )

  // 开始节点
  Graph.registerNode(
    'begin-node',
    {
      inherit: 'circle',
      width: CIRCLE_NODE_WIDTH,
      height: CIRCLE_NODE_WIDTH,
      attrs: {
        body: {
          strokeWidth: 1,
          stroke: DEFAULT_STROKE,
          fill: DEFAULT_FILL,
        },
        text: {
          fontSize: 12,
          color: TEXT_COLOR,
        },
      },
      ports: {
        ...ports,
        items: [{ group: 'right' }],
      },
    },
  )

  // 结束节点
  Graph.registerNode(
    'end-node',
    {
      inherit: 'circle',
      width: CIRCLE_NODE_WIDTH,
      height: CIRCLE_NODE_WIDTH,
      attrs: {
        body: {
          strokeWidth: 1,
          stroke: DEFAULT_STROKE,
          fill: DEFAULT_FILL,
        },
        text: {
          fontSize: 12,
          color: TEXT_COLOR,
        },
      },
      ports: {
        ...ports,
        items: [{ group: 'left' }],
      },
    },
  )
}