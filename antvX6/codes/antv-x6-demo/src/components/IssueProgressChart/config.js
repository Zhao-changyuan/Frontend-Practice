
import { Graph } from '@antv/x6'

export const BORDER_COLOR = '#49ccad'
export const FINISH_FILL = '#b2dce7'

export const TITLE_COLOR = '#1b44d3'
export const TEXT_COLOR = '#595959'

// 节点配置信息
export const nodeConfigs = {
  disable: {
    cardFill: '#d2d2d2',
    statusTextColor: TEXT_COLOR,
    statusText: '不能申请',
    optTextColor: '#000',
  },
  process: {
    cardFill: '#a4e393',
    statusTextColor: 'red',
    statusText: '可以申请',
    optTextColor: TITLE_COLOR,
  },
  finish: {
    cardFill: '#b2dce7',
    statusTextColor: TEXT_COLOR,
    statusText: '已完成',
    optTextColor: TITLE_COLOR,
  },
}

// 节点宽高
export const nodeWidth = 200
export const nodeHeight = 80

// 节点间距
export const verticalInterval = 40
export const horizontalInterval = 80


export function registerNodes() {
  // 自定义节点
  Graph.registerNode(
    'progress-node',
    {
      width: nodeWidth,
      height: nodeHeight,
      markup: [
        {
          tagName: 'rect',
          attrs: {
            class: 'card',
          },
        },
        {
          tagName: 'text',
          attrs: {
            class: 'title', // 标题
          },
        },
        {
          tagName: 'text',
          attrs: {
            class: 'time1', // time1
          },
        },
        {
          tagName: 'text',
          attrs: {
            class: 'time2', // time2
          },
        },
        {
          tagName: 'text',
          attrs: {
            class: 'time-separator',
          },
        },
        {
          tagName: 'text',
          attrs: {
            class: 'status-text', // 状态文本
          },
        },
        {
          tagName: 'text',
          attrs: {
            class: 'status-speartor',
          },
        },
        {
          tagName: 'text',
          attrs: {
            class: 'opt-text', // 操作文本
            event: 'node:apply',
          },
        },
      ],
      attrs: {
        '.card': {
          refWidth: '100%',
          refHeight: '100%',
          fill: FINISH_FILL,
          stroke: BORDER_COLOR,
          strokeWidth: 1,
        },
        '.title': {
          refX: 0.5,
          refY: 0.11,
          fill: TITLE_COLOR,
          fontSize: 16,
          fontWeight: '700',
          textAnchor: 'middle',
        },
        '.time1': {
          refX: 0.5,
          refY: 0.4,
          x: -10,
          fill: TEXT_COLOR,
          fontSize: 12,
          textAnchor: 'end',
        },
        '.time2': {
          refX: 0.5,
          refY: 0.4,
          x: 10,
          fill: TEXT_COLOR,
          fontSize: 12,
          textAnchor: 'begin',
        },
        '.time-separator': {
          refX: 0.5,
          refY: 0.4,
          fill: TEXT_COLOR,
          fontSize: 12,
          text: '-',
          textAnchor: 'middle',
        },
        '.status-text': {
          refX: 0.5,
          refY: 0.7,
          x: -30,
          fill: TEXT_COLOR,
          fontSize: 12,
          textAnchor: 'end',
        },
        '.status-speartor': {
          refX: 0.5,
          refY: 0.7,
          fill: TITLE_COLOR,
          fontSize: 12,
          fontWeight: '600',
          text: '|',
          textAnchor: 'middle',
        },
        '.opt-text': {
          refX: 0.5,
          refY: 0.7,
          x: 30,
          fill: TITLE_COLOR,
          fontSize: 12,
          textAnchor: 'begin',
          cursor: 'pointer',
        },
      },
    },
  )
}