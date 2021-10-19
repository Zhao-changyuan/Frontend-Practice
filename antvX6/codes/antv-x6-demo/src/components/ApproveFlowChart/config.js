
// 边颜色
export const EDGE_STROKE = '#A3B1C3'

// 默认轮廓颜色
export const DEFAULT_STROKE = '#5F95FF'

// 默认填充色
export const DEFAULT_FILL = '#EFF4FF'

// 默认文本颜色
export const TEXT_COLOR = '#262626'


// 圆形节点宽度
export const CIRCLE_NODE_WIDTH = 50

// 矩形节点宽高
export const RECT_NODE_WIDTH = 70
export const RECT_NODE_HEIGHT = 40

const commonPortAttrs = {
  circle: {
    r: 6,
    magnet: true,
    stroke: DEFAULT_STROKE,
    strokeWidth: 2,
    fill: '#FFF',
    style: {
      visibility: 'hidden',
    },
  },
}
// 锚点
export const ports = {
  groups: {
    top: {
      position: 'top',
      attrs: { ...commonPortAttrs },
    },
    right: {
      position: 'right',
      attrs: { ...commonPortAttrs },
    },
    bottom: {
      position: 'bottom',
      attrs: { ...commonPortAttrs },
    },
    left: {
      position: 'left',
      attrs: { ...commonPortAttrs },
    },
  },
  items: [
    { group: 'top' },
    { group: 'right' },
    { group: 'bottom' },
    { group: 'left' },
  ],
}

// 链接桩可被连接时，高亮
export const magnetAvailabilityHighlighter = {
  name: 'stroke',
  args: {
    attrs: {
      fill: '#FFF',
      stroke: '#47C769',
    },
  },
}
