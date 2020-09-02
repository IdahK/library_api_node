function booksController(Book){

    // create a new book 
    function post(req, res){
        const book =  new Book(req.body);
    
        book.save();
        return res.status(201).json(book); //send status and the created book
      }

     // search by genre
    function get(req, res) {
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
      }

      return {post, get};
}

module.exports = booksController;