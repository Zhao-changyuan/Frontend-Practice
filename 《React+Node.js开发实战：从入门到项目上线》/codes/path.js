
var path = require('path')

let full_path = 'E:\gitRepository\Frontend-Practice\《React+Node.js开发实战：从入门到项目上线》\codes\2_3 数据流.html'

console.log(path.dirname(full_path))

console.log(path.basename(full_path))

console.log(path.extname(full_path))

console.log(path.sep)

console.log('平台界定符：', path.delimiter)
console.log(process.env.PATH.split(path.delimiter))

console.log(path.join('/usr', 'local', 'bin'))

console.log(path.isAbsolute(full_path))