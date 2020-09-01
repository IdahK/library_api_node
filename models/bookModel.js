const mongoose = require('mongoose');

const {Schema} = mongoose;

// define model for books
// define Schema for model
const bookModel = new Schema(
    {
    title: {type:String},
    author: {type:String},
    genre: {type:String},
    read: {type:Boolean, default: false }
    }
);

//export Book model
module.exports = mongoose.model('Book', bookModel);