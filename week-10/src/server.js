const http = require('http');


let app = http.createServer((req, res) => {
    
    res.writeHead(200, {'Content-Type': 'text/plain'});

    
    res.end('Hello World!\n');
});


app.listen(8888, '127.0.0.1');
console.log('Port 8888');