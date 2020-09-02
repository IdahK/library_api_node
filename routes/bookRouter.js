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

//create a middleware to handle routes with book Id
//it does the search for the book of that Id separately
bookRouter.use('/books/:bookId', (req, res, next) => {
    Book.findById(req.params.bookId, (err, book) => {
        if(err){
            return res.send(err);
        }
        if(book){
            req.book = book;
            return next();
        }
        return res.sendStatus(404); //if book is not found, send this status
    })
})


// route for a single book based on Book Id
bookRouter.route('/books/:bookId') 
    //get a single book based on Id
    .get((req, res) => res.json(req.book))

    //implement put(replace book) for a book
    .put((req, res) => {
        const { book } = req;;
        book.title = req.body.title;
        book.author = req.body.author;
        book.genre = req.body.genre;
        book.read = req.body.read;
        req.book.save((err)=>{
            if(err){
                return res.send(err);
            }
            return res.json(book);
        });
        })
    
    //implement patch (update specific items) for the book
    .patch((req, res) => {
        const { book } = req;
        // eslint-disable--next-line no-underscore-dangle
        if(req.body._id){ //remove if id is sent
            // eslint-disable--next-line no-underscore-dangle
            delete req.body._id;
        }
        Object.entries(req.body).forEach((item) => {
            const key = item[0];;
            const value = item[1];
            book[key] = value;
        });
        req.book.save((err)=>{
            if(err){
                return res.send(err);
            }
            return res.json(book);
        });
    })

    // implemented the delete functionality for a book
    //sends a 204 status(removed) after a successful removal
    .delete((req, res) =>{
        req.book.remove((err) => {
            if(err){
                return res.send(err);
            }
            return res.sendStatus(204);
        });
    });

return bookRouter;
}


module.exports = routes;    