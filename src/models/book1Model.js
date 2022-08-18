const mongoose = require('mongoose');

const bookSchema1 = new mongoose.Schema({
    name:String,
    author_id : {
        type:String,
        required:true
    },
    price : Number,
    ratings : Number,



},{timestamps:true})

module.exports = mongoose.model("book1",bookSchema1)