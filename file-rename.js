const fs = require('fs');

fs.rename('./modules/event.js', './event.js', (err) => {
  if (err) {
    console.log(err);
  }
});
