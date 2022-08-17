const mongoose = require ("mongoose")

const book1Schema = new mongoose.Schema({
    bookName:{
        type : String,
        required : true
    },
    price:{
        indianPrices : Number,
        europeanprice : Number
    },
    year :{
        type : Number,
        default : 2021
    },
    tags : [String],
    authorName : String,
    totalPages : Number,
    stockAvailable : Boolean


},{timestamps:true})

module.exports = mongoose.model("allbook",book1Schema)