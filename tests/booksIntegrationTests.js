require('should');

const request = require('supertest');
const mongoose = require('mongoose');

process.env.ENV = 'Test';

const app = require('../app');

const Book = mongoose.model('Book');
const agent = request.agent(app); //runs the app

describe('Book Crud Test', () => {
    it('should allow a book to be posted and return read and its id',  (done) => {
        const bookPost = {
            title: 'My First Book',
            author: 'Idah',
            genre: 'Fiction'
        };

        agent.post('/api/books')
        .send(bookPost)
        .expect(200)
        .end((err, results) => {
            // console.log(results);
            // results.body.read.should.not.equal(false); //expect test to fail
            results.body.should.have.property('_id');
            done();
        });
    });

    // clean up after each test
    afterEach((done) => {
        Book.deleteMany({}).exec();
        done();
    });

    after((done) => {
        mongoose.connection.close();
       app.server.close(done());
    })
});



