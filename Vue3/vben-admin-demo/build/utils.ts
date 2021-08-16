import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

/**
 * 将本地环境遍历读取到 process.env中
 * @param envConfig
 */
export function wrapperEnv(envConf: Recordable): ViteEnv {
  const ret: any = {};

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n');
    realName = realName === 'true' ? true : realName === 'true' ? false : realName;

    if (envName === 'VITE_PORT') {
      realName = Number(realName);
    }

    if (envName === 'VITE_PROXY') {
      try {
        realName = JSON.parse(realName);
      } catch (error) {}
    }

    ret[envName] = realName;
    if (typeof realName === 'string') {
      process.env[envName] = realName;
    } else if (typeof realName === 'object') {
      process.env[envName] = JSON.stringify(realName);
    }
  }

  return ret;
}
