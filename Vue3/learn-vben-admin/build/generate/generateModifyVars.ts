
import { generateAntColors, primaryColor } from '../config/themeConfig'
import { getThemeVariables } from 'ant-design-vue/dist/theme'
import { resolve } from 'path'

/**
 * less 全局变量
 * @param dark 
 */
export function generateModifyVars(dark = false): Record<string, string> {
  const palettes = generateAntColors(primaryColor)
  const primary = palettes[5]

  const primaryColorObj: Record<string, string> = {};

  for (let index = 0; index < 10; index++) {
    primaryColorObj[`primary-${index + 1}`] = palettes[index]
  }

  const modifyVars = getThemeVariables({ dark });

  return {
    ...modifyVars,
    hack: `${modifyVars.hack} @import (reference) "${resolve('src/design/config.less')}";`,
    'primary-color': primary,
    ...primaryColorObj,
    'info-color': primary,
    'processing-color': primary,
    'success-color': '#55D187',
    'error-color': '#ED6F6F',
    'warning-color': '#EFBD47',
    'font-size-base': '14px',
    'border-radius-base': '2px',
    'link-color': primary,
    'app-content-background': '#fafafa'
  };
}