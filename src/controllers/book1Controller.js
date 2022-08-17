const booking1Model = require("../models/book1Model1")

const createBook1 = async function(req,res) {
    let book = req.body
    let allBooks = await booking1Model.create(book)
    res.send({msg:allBooks})
}
// const bookList = async function (req,res) {
//     let selectBook = await booking1Model.find().select({bookName:1,authorName:1,_id:0})
//     res.send({msg:selectBook})
// }
const bookList = async function (req,res) {
    let selectBook = await booking1Model.find().sort({totalPages:1}).limit(5).select({authorName:1,bookName:1})
    res.send({msg:selectBook})
}
const getBooksInYear = async function(req,res) {
    let ByYear = req.body.year
    let booksByYear = await booking1Model.find({year:ByYear})
    res.send({msg:booksByYear})

}
const getParticularBooks = async function(req,res) {
    let books = req.body
    let particularBooks = await booking1Model.find(books)
    res.send({msg:particularBooks})

}
const getXINRBooks = async function(req,res) {
    let indianBooks = await booking1Model.find({"price.indianPrices":{$in : [100,200,500]}})
    res.send({msg:indianBooks})
}
const getRandomBook = async function(req,res) {
    let randomBooks = await booking1Model.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send({msg:randomBooks})
}



module.exports.createBook1 = createBook1
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBook = getRandomBook
