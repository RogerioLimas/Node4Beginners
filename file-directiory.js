const fs = require('fs');

if (fs.exists('views')) {
  fs.rmdirSync('views');
}

fs.mkdir('views', (err) => {
  if (err) console.log(err);
});
