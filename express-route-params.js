const express = require('express');

const app = express();
const port = process.env.PORT || 9999;

app.get('/', (req, res) => {
  res.send('HOME!');
});

app.get('/post/:id/', (req, res) => {
  res.send(`ID: ${req.params.id}`);
});


app.listen(port);
