const https = require('https');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

https.get(url, (res) => {
  res.setEncoding('utf8');
  let body = '';

  res.on('data', (content) => {
    body += content;
  });
  res.on('end', () => {
    body = JSON.parse(body);
    console.log(body[0].userId);
    // fs.writeFile('data.json', body, 'utf8', (err) => {
    //   if (err) {
    //     throw err;
    //   }
    // });
  });
});
