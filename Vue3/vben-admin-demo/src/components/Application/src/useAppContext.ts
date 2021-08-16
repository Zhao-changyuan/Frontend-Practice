import { InjectionKey, Ref } from 'vue';
import { createContext, useContext } from '/@/hooks/core/useContext';

export interface AppProviderContextProps {
  prefixCls: Ref<string>;
  isMobile: Ref<boolean>;
}

const key: InjectionKey<AppProviderContextProps> = Symbol();

/**
 * 创建 app context
 * @param context
 * @returns
 */
export function createAppProviderContext(context: AppProviderContextProps) {
  return createContext<AppProviderContextProps>(context, key);
}

/**
 * 获取 app context
 * @returns
 */
export function useAppProviderContext() {
  return useContext<AppProviderContextProps>(key);
}
