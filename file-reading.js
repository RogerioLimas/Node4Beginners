const fs = require('fs');

fs.readdir('loxas', (err, files) => {
  if (err) return err;
  console.log(files);
});

fs.readFile('./global.html', 'UTF-8', (err, content) => {
  console.log(content);
});
