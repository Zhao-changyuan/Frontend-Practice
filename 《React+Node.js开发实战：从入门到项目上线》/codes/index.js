

let os = require('os')

console.log(`hostname: ${os.hostname()}`)

console.log(`endianness: ${os.endianness()}`)

console.log(`type: ${os.type()}`)

console.log(`total memory: ${os.totalmem() / 1024 / 1024} MB`)

console.log(`free memory:  ${os.freemem() / 1024 / 1024} MB`)

