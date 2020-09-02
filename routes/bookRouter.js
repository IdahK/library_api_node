/** eslint-disable no-param-reassign */
const express = require('express');

function routes(Book){

const bookRouter = express.Router();


bookRouter.route('/books') 
  // create a new book  
  .post((req, res) => {
    const book =  new Book(req.body);

    book.save();
    return res.status(201).json(book); //send status and the created book
  })

  // access all books route via : /api/books, search by genre
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

// route to get a single book based on Book Id
bookRouter.route('/books/:bookId') 
    .get((req, res) => {
    
        Book.findById(req.params.bookId, (err, book) => {
        if(err){
            return res.send(err);
        } 
            return res.json(book);                            
        });
    })
    //implement put/update for a book
    .put((req, res) => {
        Book.findById(req.params.bookId, (err, book) => {
            if(err){
                return res.send(err);
            } 
                book.title = req.body.title;
                book.author = req.body.author;
                book.genre = req.body.genre;
                book.read = req.body.read;
                book.save();
                return res.json(book); 

        });
    })

return bookRouter;
}


module.exports = routes;    