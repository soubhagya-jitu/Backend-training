const authorModel = require("../models/authorModel")
const book1Model = require("../models/book1Model")



const createAuthor = async function(req,res) {
    let data = req.body
    let authorData = await authorModel.create(data)
    res.send({msg:authorData})
}

const findAuthorId = async function (req,res) {
    let input = req.body
    let authorDetail = await authorModel.find(input)
    let result = authorDetail[0].author_id
    let authorId = await book1Model.find({author_id:result})
    res.send({msg:authorId})

}
const authorOfTwostates = async function(req,res) {
    let input1 = req.body

    let bookDetail = await book1Model.findOneAndUpdate( { name:"Two states"},{$set:input1},{new:true})
    let result1 = bookDetail.author_id
    let authorId = await authorModel.find({author_id : result1}).select({author_name:1,_id:0})

    res.send({msg:authorId})
} 
const findAuthorName = async function(req,res) {
    let book = await book1Model.find({price:{$gte :50,$lte:100}}).select({author_id:1,_id:0})
    let mapedBook = book.map(x=>x.author_id)
    let result = await authorModel.find({author_id:mapedBook}).select({author_name:1,_id:0})
    res.send({msg:result})
}

module.exports.createAuthor = createAuthor
module.exports.findAuthorId = findAuthorId
module.exports.authorOfTwostates = authorOfTwostates
module.exports.findAuthorName = findAuthorName