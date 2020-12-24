const http = require('http');

http.createServer((req, res) => {
    let status = 200;
    res.writeHead(status, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello Node.js\n');
}).listen(3000);

console.log('Server running at http://localhost:3000');