import { MenuTypeEnum, MenuModeEnum, TriggerEnum, MixSidebarTriggerEnum } from '/@/enums/menuEnum';
import {
  ContentEnum,
  PermissionModeEnum,
  ThemeEnum,
  RouterTransitionEnum,
  SettingButtonPositionEnum,
  SessionTimeoutProcessingEnum,
} from '/@/enums/appEnum';

import { CacheTypeEnum } from '/@/enums/cacheEnum';

export type LocaleType = 'zh_CN' | 'en' | 'ru' | 'ja' | 'ko';

// 菜单设置
export interface MenuSetting {
  bgColor: string;
  fixed: boolean;
  collapsed: boolean;
  canDrag: boolean;
  show: boolean;
  hidden: boolean;
  split: boolean;
  menuWidth: number;
  mode: MenuModeEnum;
  type: MenuTypeEnum;
  theme: ThemeEnum;
  topMenuAlign: 'start' | 'center' | 'end';
  trigger: TriggerEnum;
  accordion: boolean; // 手风琴
  closeMixSidebarOnChange: boolean;
  collapsedShowTitle: boolean;
  mixSideTrigger: MixSidebarTriggerEnum;
  mixSideFixed: boolean;
}

// 多个tab设置
export interface MultiTabsSetting {
  cache: boolean;
  show: boolean;
  showQuick: boolean;
  canDrag: boolean;
  showRedo: boolean;
  showFold: boolean;
}

// header设置
export interface HeaderSetting {
  bgColor: string;
  fixed: boolean;
  show: boolean;
  theme: ThemeEnum;
  // 显示全屏切换按钮
  showFullScreen: boolean;
  // 是否显示锁屏按钮
  useLockPage: boolean;
  // 是否显示文档按钮
  showDoc: boolean;
  // 显示消息中心
  showNotice: boolean;
  showSearch: boolean;
}

// 本地化设置
export interface LocaleSetting {
  showPicker: boolean;
  // 当前语言
  locale: LocaleType;
  // 默认语言
  fallback: LocaleType;
  // 可用语言
  availableLocales: LocaleType[];
}

// 过渡设置
export interface TransitionSetting {
  // 是否打开页面切换动画
  enable: boolean;
  // 路由基本切换动画
  basicTransition: RouterTransitionEnum;
  // 是否打开页面 loading
  openPageLoading: boolean;
  // 是否打开顶部进度条
  openNProgress: boolean;
}

export interface ProjectConfig {
  // 权限相关信息存储位置
  permissionCacheType: CacheTypeEnum;
  // 是否显示配置按钮
  showSettingButton: boolean;
  // 是否显示主题切换按钮
  showDarkModeToggle: boolean;
  // 设置按钮位置
  settingButtonPosition: SettingButtonPositionEnum;
  // 权限模式
  permissionMode: PermissionModeEnum;
  // 会话超时处理
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum;
  // 网站灰色模式，可能的悼念日期打开
  grayMode: boolean;
  // 是否开启彩色弱模式
  colorWeak: boolean;
  // 主题色
  themeColor: string;

  // 全屏显示主界面，菜单不显示，显示在顶部
  fullContent: boolean;
  // 内容区宽度
  contentMode: ContentEnum;
  // 是否显示 logo
  showLogo: boolean;
  // 是否显示全局 footer
  showFooter: boolean;
  // header设置
  headerSetting: HeaderSetting;
  // 菜单设置
  menuSetting: MenuSetting;
  // 多tab设置
  multiTabsSetting: MultiTabsSetting;
  // 页面过渡设置
  transitionSetting: TransitionSetting;
  // 页面布局是否开启 keep-alive
  openKeepAlive: boolean;
  // 锁定屏幕时间
  lockTime: number;
  // 显示面包屑
  showBreadCrumb: boolean;
  // 显示面包屑图标
  shwoBreadCrumbIcon: boolean;
  // 使用错误处理插件
  useErrorHandle: boolean;
  // 是否开启回到顶部按钮
  useOpenBackTop: boolean;
  // 是否可嵌入 iframe 页面
  canEmbedIframePage: boolean;
  // 切换界面时是否删除未关闭的消息与提醒；
  closeMessageOnSwitch: boolean;
  // 切换界面时，是否取消已发送但还未收到响应的请求
  removeAllHttpPending: boolean;
}

// 全局配置
export interface GlobConfig {
  // 网站标题
  title: string;
  // 接口给地址
  apiUrl: string;
  // 文件上传地址
  uploadUrl?: string;
  // 接口地址前缀
  urlPrefix?: string;
  // 项目缩写
  shortName: string;
}

// 全局环境遍历设置
export interface GlobEnvConfig {
  // 网站标题
  VITE_GLOB_APP_TITLE: string;
  // 接口地址
  VITE_GLOB_API_URL: string;
  // 接口地址前缀
  VITE_GLOB_API_URL_PREFIX?: string;
  // 项目缩写
  VITE_GLOB_APP_SHORT_NAME: string;
  // 上传地址
  VITE_GLOB_UPLOAD_URL?: string;
}
