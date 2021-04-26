
let fs = require('fs')

fs.readFile('test.txt', () => {
    setTimeout(() => {
        console.log('setTimeout')
    }, 0)

    setImmediate(() => {
        console.log('setImmediate')
    })

    
})