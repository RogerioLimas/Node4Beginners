const express = require('express');

const app = express();

// Se não houver a porta configurada, usa 999 (develop mode)
const port = process.env.PORT || 9999;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/api', (req, res) => {
  // res.send('<h1>API PAGE!</h1>');
  res.json({ name: 'Roger' });
});

app.listen(port);
