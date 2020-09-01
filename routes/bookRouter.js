const express = require('express');

function routes(Book){

const bookRouter = express.Router();

// access all books route via : /api/books, search by genre
bookRouter.route('/books') 
  .post((req, res) => {
    const book =  new Book(req.body);

    book.save();
    return res.status(201).json(book); //send status and the created book
  })
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

return bookRouter;
}


module.exports = routes;    