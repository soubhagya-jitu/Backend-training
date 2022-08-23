const author1Model = require("../models/author1Model")
const authorModel = require("../models/authorModel")
const { create } = require("../models/authorModel")
const book1Model = require("../models/book1Model")
const publisherModel = require("../models/publisherModel")



const create1Book = async function (req, res) {
    let book = req.body
    let author1 = await author1Model.findOne()
    let publisher1 = await publisherModel.findOne()
    let new2 = publisher1._id
    let new1 = author1._id
    // console.log(new1)
    if (book.author == new1 && book.publisher == new2) {
        result = await book1Model.create(book)
        res.send({ msg: result })
    } else if (!book.author && !book.publisher) {
        res.send({ msg: "author id & publisher id is required" })
    }
    else if (book.author !== new1 && book.publisher !== new2) {
        return res.send({ msg: "author & publisher is not present" })
    }


}

const getBooksWithAuthorPublisherDetails = async function(req,res){
    let bookDetail =  await book1Model.find().populate("author").populate("publisher")
    res.send({msg:bookDetail})
}

const create2Book = async function (req, res) {
    let book = await book1Model.create(req.body)
    res.send({msg:book})
}
const changeIsHardCover = async function(req,res) {
    let result = await publisherModel.find({name:{$in:["Penguin","HarperCollins"]}}).select({_id:1})
    let result1 = await book1Model.updateMany({publisher:result},{$set:{isHardCover:true}},{new:true})
    res.send({msg:result1})
}
const changeBookPrice = async function (req, res) {
    let book1 = await author1Model.find({rating:{$gt:3.5}}).select({_id:1})
    // console.log(book1)
    let book2 = await book1Model.updateMany({author:book1},{$inc:{price:+10}},{new:true})
    res.send({msg:book2})
}

module.exports.create1Book = create1Book
module.exports.getBooksWithAuthorPublisherDetails = getBooksWithAuthorPublisherDetails
module.exports.create2Book = create2Book
module.exports.changeIsHardCover = changeIsHardCover
module.exports.changeBookPrice = changeBookPrice