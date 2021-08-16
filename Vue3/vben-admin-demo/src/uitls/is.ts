const toString = Object.prototype.toString;

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

/**
 * is 被称为类型关键字
 * @param val
 * @returns
 */
export function isDef<T = unknown>(val?: T): val is T {
  return typeof val !== 'undefined';
}

export function isUndef<T = unknown>(val?: T): val is T {
  return !isDef(val);
}

export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object');
}
