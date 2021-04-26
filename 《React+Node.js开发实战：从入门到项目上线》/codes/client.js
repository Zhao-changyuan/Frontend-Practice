
let net = require('net')

let client = net.connect({ port: 8080 }, () => {
    console.log('server connected')
})

client.on('data', (data) => {
    console.log(data.toString())

    client.end()
})

client.on('end', () => {
    console.log('server disconnected')
})