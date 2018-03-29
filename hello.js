const http = require('http')
http.createServer(function(req,res) {
res.writeHead(200,{'Content-Type':'text/plain'})
res.end('hello tanghaiyan1')
}).listen(8081)

console.log('server test')