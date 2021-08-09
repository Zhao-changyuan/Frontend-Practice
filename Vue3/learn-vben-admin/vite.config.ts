import type { UserConfig, ConfigEnv } from 'vite'

import { loadEnv } from 'vite'
import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
import { createProxy } from './build/vite/proxy'
import { wrapperEnv } from './build/utils'
import { OUTPUT_DIR } from './build/constant'

import pkg from './package.json'
import moment from 'moment'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

const { dependencies, devDependencies, name, version } = pkg
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: moment().format('YYYY-MM-DD HH:mm:ss')
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  // process.cwd() 是当前执行node命令时候的文件夹地址 ——工作目录
  const root = process.cwd() // E:\codeRepo\learn-vben-admin

  // 加载本地自定义环境变量
  const env = loadEnv(mode, root);

  // 通过loadEnv加载boolean是string类型，这个函数可以给转换为 boolean 类型
  const viteEnv = wrapperEnv(env)

  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv

  const isBuild = command === 'build';

  /** @type {import('vite').UserConfig} */
  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: [
        // /@/xxx => src/xxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/'
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/'
        }
      ]
    },
    server: {
      host: true,
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY),
    },
    build: {
      target: 'es2015',
      outDir: OUTPUT_DIR,
      // terser 用于ES6+的JavaScript解析器、篡改器和压缩器工具包  
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: VITE_DROP_CONSOLE
        }
      },
      // 禁用 brotli 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
      brotliSize: true,
      // chunk 大小警告的限制（以 kbs 为单位）。
      chunkSizeWarningLimit: 2000,
    },
    // define 定义全局常量替换方式。
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    },
    css: {
      preprocessorOptions: {
        
      }
    },
    plugins: [vue()]
  }
}

