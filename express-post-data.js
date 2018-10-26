const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 9999;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/assets', express.static(`${__dirname}/public`));
// app.use('/css', express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('MIDDLEWARE');
  next();
});

app.post('/post', (req, res) => {
  console.log("It's working!");
  res.send(`It's working! ${req.body.email}`);
  console.log(req.body);
});

app.listen(port);
