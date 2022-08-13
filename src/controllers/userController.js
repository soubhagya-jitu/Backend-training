// const UserModel= require("../models/userModel")
const UserModel1 = require("../bookSchema/bookSchema.js")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

const createBook = async function (req,res) {
    let bookData = req.body
    let allbookData = await UserModel1.create(bookData)
    res.send({msg:allbookData})
}
const getBooklist = async function(req,res) {
    let allbookList = await UserModel1.find()
    res.send ({msg : allbookList})
}

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
module.exports.createBook = createBook
module.exports.getBooklist = getBooklist