const fs = require('fs');
const execute = require('child_process').exec;

fs.writeFile(
  './modules/data.html',
  'Hello this file has just been created',
  'UTF-8',
  (err) => {
    if (err) throw err;
    console.log('The file has been saved\n');
  },
);

fs.appendFile('./modules/data.html', 'Extra data appended to this file', 'UTF-8', (err) => {
  if (err) throw err;
});
