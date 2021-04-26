
let net = require('net')

let server = net.createServer(function (connection) {
    console.log('client connected')

    connection.on('end', function () {
        console.log('client disconnected')
    })

    connection.write('Hello World!')
})

server.listen(8080, () => {
    console.log('server is listening')
})