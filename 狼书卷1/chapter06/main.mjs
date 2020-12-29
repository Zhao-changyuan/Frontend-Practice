/* console.log('main starting');

var a = require('./a');
var b = require('./b');
console.log('in main, a.done=%j, b.done=%j', a.done, b.done); */

/* var hello = require('./helloworld2')

hello() */

// console.log(__filename, __dirname);

import { square, diag } from './lib.mjs';
console.log(square(11));
console.log(diag(4, 3));