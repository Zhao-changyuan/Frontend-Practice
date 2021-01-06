const { obj } = require('./main')

var s = Symbol.for('symbolPropName');
console.log(obj[s]);