export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;

/**
 * 请求参数
 */
export interface RequestOptions {
  // 拼接请求参数到url中
  joinParamsToUrl?: boolean;
  // 格式化请求参数事件
  formatDate?: boolean;
  // 是否转换请求结果
  isTransformResponse?: boolean;
  // 是否返回响应头
  isReturnNativeResponse?: boolean;
  // 是否凭借url
  joinPrefix?: boolean;
  // 接口地址，如果为空将使用默认的接口地址
  apiUrl?: string;
  // 错误消息提示类型
  errorMessageMode?: ErrorMessageMode;
  // 是否添加一个时间戳
  joinTime?: boolean;
  ignoreCacelToken?: boolean;
  // 是否在header中添加token
  withToken: boolean;
}

export interface Result<T = any> {
  code: number;
  type: 'success' | 'error' | 'warning';
  message: string;
  result: T;
}

export interface UploadFileParams {
  data?: Recordable;
  // 文件参数接口字段名
  name?: string;
  file: File | Blob;
  filename?: string;
  [key: string]: any;
}
