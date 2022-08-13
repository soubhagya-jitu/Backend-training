const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName : String,
    authorName : String,
    category : {
        type : String,
        enum : ["comics","fantasy","horror"]
    },
    year : String
},{timestamps : true});

module.exports = mongoose.model ("bookList",bookSchema)