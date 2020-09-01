/* eslint-disable linebreak-style */
const express = require('express'); // import express
const mongoose = require('mongoose'); //  interacts with the mongodb database 

const app = express(); // initialize express
const db = mongoose.connect('mongodb://localhost/bookAPI'); // connect to a database on mongo
const bookRouter = express.Router(); // create books route
const port = process.env.PORT || 3000;

const Book = require('./models/bookModel.js'); // Book Model

// access all books route via : /api/books
// querying database to locate data
bookRouter.route('/books') 
  .get((req, res) => {
    const query = {};
    if(req.query.genre){
      query.genre = req.query.genre;
    }
    Book.find((err, books) => {
    if(err){
      return res.send(err);
    } 
      return res.json(books);                            
    })
  });

// route to get a single book
bookRouter.route('/books/:bookId') 
  .get((req, res) => {
    
    Book.findById(req.params.bookId, (err, book) => {
    if(err){
      return res.send(err);
    } 
      return res.json(book);                            
    })
  });

//access the BookRouter via /api in the URL
app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon Library API');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on port ${port}`);
});
