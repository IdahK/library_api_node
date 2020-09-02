/* eslint-disable linebreak-style */

const express = require('express'); // import express
const mongoose = require('mongoose'); //  interacts with the mongodb database 
const bodyParser = require('body-parser');

const app = express(); // initialize express

if(process.env.ENV === 'Test'){
  console.log('This is a test');
  const b = mongoose.connect('mongodb://localhost/bookAPI_Test');
}
else{
   console.log('This is not a test');
   const db = mongoose.connect('mongodb://localhost/bookAPI'); // connect to a database on mongo
}

const port = process.env.PORT || 3000;

const Book = require('./models/bookModel.js'); // Book Model
const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());;
//access the BookRouter via /api in the URL
app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon Library API');
});

app.server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on port ${port}`);
});

module.exports = app;
