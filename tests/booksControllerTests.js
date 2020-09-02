const should = require('should');
const sinon = require('sinon');

const bookController = require('../controllers/booksController');

describe('Book Controller Tests:', () => {
    describe('Post', () =>{
        it('should not allow an empty title on post', () => {
            // Mock a Book item
            const Book = function (book) { this.save = () => {}};

            // Mock a Request Object
            const req = {
                body: {
                    author: 'Idah',
                }
            };

            // Mock a Response object
            const res = {
                status: sinon.spy(),
                send: sinon.spy(),
                json: sinon.spy()
            };


            const controller = bookController(Book);
            controller.post(req, res);
            res.status.calledWith(400).should.equal(true, `Bad Status ${res.status.args[0][0]}`);
            // send an error for bad request
            res.send.calledWith('Title is required').should.equal(true);
        });
    });
})
