/* eslint-disable linebreak-style */
const express = require('express'); // import express

const app = express(); // initialize express

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('hello.ejs');
});

app.get('/top', (req, res) => {
  res.render('top.ejs');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on port ${port}`);
});
