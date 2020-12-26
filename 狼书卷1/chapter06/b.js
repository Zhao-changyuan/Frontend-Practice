/* console.log('b starting');
exports.done = false;
var a = require('./a.js');
console.log('in b, a.done = %j', a.done);
exports.done = true;
console.log('b done'); */

// require('./a');
global.debug = false;

global.debug = debug ? console.log : function(x) {};