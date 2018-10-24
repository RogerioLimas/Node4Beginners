const http = require('http');

var body = '';

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<h1>Hi guys, it\'s Roger!</h1>');
}).listen(9002);
