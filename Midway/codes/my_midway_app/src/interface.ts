/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: string;
}

export interface IGetUserResponse {
  success: boolean;
  message: string;
  data: IUserOptions;
}

/**
 * 用户
 */
export interface User {
  id: number;
  name: string;
  age: number;
}
