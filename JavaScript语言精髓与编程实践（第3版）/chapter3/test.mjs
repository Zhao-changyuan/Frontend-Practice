import ProxyObject from './MyObjectProxy.mjs'
import MyObject from './MyObject.mjs'

import * as xxx from './MyObject.mjs';

var p = new ProxyObject;
console.log(p.value);

var obj = new Object;
console.log(obj.value);

console.log(Object.getOwnPropertySymbols(xxx));
console.log(Object.prototype.toString.call(xxx));