/**
  用于开发模式配置
*/

import type { ProxyOptions } from 'vite';

type ProxyItem = [string, string];

type ProxyList = ProxyItem[];

type ProxyTargetList = Record<string, ProxyOptions & { rewrite: (path: string) => string }>;

const httpsRE = /^https:\/\//;

/**
 * 生成代理
 * @param list
 * @returns
 */
export function createProxy(list: ProxyList = []) {
  const ret: ProxyTargetList = {};

  for (const [prefix, target] of list) {
    const isHttps = httpsRE.test(target);
    console.log('target', target);

    ret[prefix] = {
      target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
      ...(isHttps ? { secure: false } : {}),
    };
  }

  return ret;
}
