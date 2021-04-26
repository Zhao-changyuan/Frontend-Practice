
let http = require('http')
let url = require('url')

http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    console.log(pathname)

    res.end();
}).listen(8080)

console.log('Server running at http://localhost:8080/')