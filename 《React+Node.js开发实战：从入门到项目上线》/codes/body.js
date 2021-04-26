
let http = require('http')

http.createServer((req, res) => {
    let body = ''

    req.on('data', (chunk) => {
        body += chunk;
    })

    req.on('end', () => {
        if (req.headers['content-type'] === 'application/json') {
            console.log(body)
        }

        res.end();
    })
}).listen(8080)