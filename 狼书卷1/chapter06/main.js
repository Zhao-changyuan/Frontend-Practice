
// console.log('main starting');
// var a = require('./a.js');
// var b = require('./b.js');

// console.log('in main, a.done=%j, b.done=%j', a.done, b.done);

// var hello = require('./helloworld2');
// hello();

// require('./helloworld2')();

// var h5 = require('./helloworld5');
// h5.eat('兰州拉面')
// h5.say('海角')

/* var hello = require('./exports')

console.log(hello.name()); */

/* const fs = require('fs');
var a = fs.readFileSync('./a.js');
console.log(a);
console.log(typeof a);
console.log(a instanceof Buffer); */

var fs = require('fs');
var rs = fs.createReadStream('../6_模块与核心.md', { highWaterMark: 5 });
var dataArr = [], len = 0, data;
rs.on('data', function(chunk) {
    dataArr.push(chunk);
    len += chunk.length;
});

rs.on('end', function() {
    data = Buffer.concat(dataArr, len).toString();
    console.log(data);
});