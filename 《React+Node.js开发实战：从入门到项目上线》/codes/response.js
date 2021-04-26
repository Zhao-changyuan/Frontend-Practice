

let http = require('http')
let url = require('url')

http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;

    if (pathname.includes('api1')) {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });

        res.write(`
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="UTF-8">
                    <title>Test</title>
                </head>
                <body>
                    This is a testing page
                </body>
            </html>
        `)
    } else if (pathname.includes('api2')) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify({ code: 0 }))
    }

    res.end()
}).listen(8080)