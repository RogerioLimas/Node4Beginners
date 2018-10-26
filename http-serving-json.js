const https = require('https');
const http = require('http');
// const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

http
  .createServer((req, serverResponse) => {
    if (req.method === 'GET' && req.url === '/posts') {
      https.get(url, (httpRes) => {
        serverResponse.writeHead(200, { 'Content-Type': 'application/json' });
        httpRes.on('data', (data) => {
          httpRes.setEncoding('utf8');
          serverResponse.write(data);
        });
        httpRes.on('end', () => {
          console.log('Request ended');
        });
      });
    } else {
      serverResponse.writeHead(404, { 'Content-Type': 'text/plain' });
      serverResponse.end('404 - PAGE NOT FOUND');
    }
  })
  .listen(4444);

console.log('Server is listening');
