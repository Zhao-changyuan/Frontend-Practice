

// 节点边框颜色
export const STROKE_COLOR = '#5F95FF'

// 节点填充色
export const FILL_COLOR = '#EFF4FF'

// 节点文本色
export const TEXT_COLOR = '#262626'

// 字体大小
export const FONT_SIZE = 12

const portAttrs = {
  circle: {
    r: 4,
    magnet: true,
    stroke: STROKE_COLOR,
    storkeWidth: 1,
    fill: '#fff',
    style: {
      visibility: 'hidden'
    }
  }
}

/**
 * 链接桩
 */
export const ports = {
  groups: {
    top: {
      position: 'top',
      attrs: portAttrs,
    },
    right: {
      position: 'right',
      attrs: portAttrs,
    },
    bottom: {
      position: 'bottom',
      attrs: portAttrs,
    },
    left: {
      position: 'left',
      attrs: portAttrs
    }
  },
  items: [
    { group: 'top' },
    { group: 'right' },
    { group: 'bottom' },
    { group: 'left' },
  ]
}