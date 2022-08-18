const book1Model = require("../models/book1Model")



const createBook1 = async function(req,res) {
    let data = req.body
    let bookData = await book1Model.create(data)
    res.send({msg:bookData})
}
module.exports.createBook1 = createBook1