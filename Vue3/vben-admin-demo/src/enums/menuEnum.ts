/**
 * @description: 菜单类型
 */

export enum MenuTypeEnum {
  // 左侧菜单
  SIDEBAR = 'sidebar',

  // 混合左侧菜单
  MIX_SIDEBAR = 'mix-sidebar',

  // 混合菜单
  MIX = 'mix',

  // 顶部菜单
  TOP_MENU = 'top-menu',
}

// 择地触发器位置
export enum TriggerEnum {
  // 不显示
  NONE = 'none',

  // 菜单底部
  FOOTER = 'footer',

  // 头部
  HEADER = 'header',
}

export type Mode = 'vertical' | 'vertical-right' | 'horizontal' | 'inline';

// 菜单模式
export enum MenuModeEnum {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
  VERTICAL_RIGHT = 'vertical-right',
  INLINE = 'inline',
}

// 菜单分割类型
export enum MenuSplitTypeEnum {
  NONE,
  TOP,
  LEFT,
}

// 顶部菜单对齐
export enum TopMenuAlignEnum {
  CENTER = 'center',
  START = 'start',
  END = 'end',
}

export enum MixSidebarTriggerEnum {
  HOVER = 'hover',
  CLICK = 'click',
}
