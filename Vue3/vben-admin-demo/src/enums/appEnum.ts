export const SIDE_BAR_MIMI_WIDTH = 48;
export const SIDE_BAR_SHOW_TIT_MINI_WIDTH = 80;

export enum ContentEnum {
  // 自动宽度
  FULL = 'full',
  // 固定宽度
  FIXED = 'fixed',
}

// 菜单主题 明/暗
export enum ThemeEnum {
  DARK = 'dark',
  LIGHT = 'light',
}

// 设置按钮位置
export enum SettingButtonPositionEnum {
  AUTO = 'auto',
  HEADER = 'header',
  FIXED = 'fixed',
}

export enum SessionTimeoutProcessingEnum {
  ROUTE_JUMP,
  PAGE_COVERAGE,
}

/**
 * 权限模式
 */
export enum PermissionModeEnum {
  // 角色
  ROLE = 'role',
  // 后台
  BACK = 'back',
  // 路由映射
  ROUTE_MAPPING = 'route-mapping',
}

// 路由切换动画
export enum RouterTransitionEnum {
  ZOOM_FADE = 'zoom-fade',
  ZOOM_OUT = 'zoom-out',
  FADE_SIDE = 'fade-slide',
  FADE = 'fade',
  FADE_BOTTOM = 'fade-bottom',
  FADE_SCALE = 'fade-scale',
}
