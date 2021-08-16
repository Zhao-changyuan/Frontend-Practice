
import type { Plugin } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 兼容旧浏览器插件
import legacy from '@vitejs/plugin-legacy'

// 图标库
import purgeIcons from 'vite-plugin-purge-icons'
// windicss 库 CSS库
import windiCSS from 'vite-plugin-windicss'

// html插件
import { configHtmlPlugin } from './html'

// pwa配置
import { configPwaConfig } from './pwa';

// mock 数据
import { configMockPlugin } from './mock';

// 代码压缩
import { configCompressPlugin } from './compress';

// 按需导入组件样式
import { configStyleImportPlugin } from './styleImport';

// 打包分析插件
import { configVisualizerConfig } from './visualizer';

// 主题插件
import { configThemePlugin } from './theme';

// 图片压缩插件
import { configImageminPlugin } from './imagemin';

// 雪碧图插件
import { configSvgIconsPlugin } from './svgSprite';

import { configHmrPlugin } from './hmr';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const {
    VITE_USE_IMAGEMIN,
    VITE_USE_MOCK,
    VITE_LEGACY,
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
  } = viteEnv

  const vitePlugins: (Plugin | Plugin[])[] = [
    vue(),
    vueJsx()
  ]

  // vite-plugin-windicss
  vitePlugins.push(windiCSS());

  VITE_LEGACY && isBuild && vitePlugins.push(legacy())

  // 图标库插件
  vitePlugins.push(purgeIcons());

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))

  // vite-plugin-mock
  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild));

  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin(isBuild));

  // rollup-plugin-visualizer
  vitePlugins.push(configVisualizerConfig());

  //vite-plugin-theme
  vitePlugins.push(configThemePlugin(isBuild));

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild));

  // TODO
  !isBuild && vitePlugins.push(configHmrPlugin());

  if (isBuild) {
    //vite-plugin-imagemin
    VITE_USE_IMAGEMIN && vitePlugins.push(configImageminPlugin());

    // rollup-plugin-gzip
    vitePlugins.push(
      configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE)
    );
    
    // vite-plugin-pwa
    vitePlugins.push(configPwaConfig(viteEnv))
  }

  return vitePlugins;
}