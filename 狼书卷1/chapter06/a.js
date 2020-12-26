// console.log('a starting');
// exports.done = false;
// var b = require('./b.js');
// console.log('in a, b.done = %j', b.done);
// exports.done = true;
// console.log('a done');

// console.log(module);

global.debug = true;

global.debug = debug ? console.log : function(x) {};