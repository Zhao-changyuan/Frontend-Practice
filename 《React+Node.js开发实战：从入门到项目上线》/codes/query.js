

let http = require('http')
let url = require('url')

http.createServer((req, res) => {
    let parsedUrl = url.parse(req.url, true)

    let pathname = parsedUrl.pathname;
    let queries = parsedUrl.query;
    console.log(pathname)
    console.log(queries)

    res.end();
}).listen(8080)