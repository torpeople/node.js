var http = require('http');

var dt = require('./testmodule');

console.log("hliu testing...");
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World\n');
    res.write(req.url + '\n');
    res.write('the current date and time:' + dt.myDateTime());
    res.end();
    
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
