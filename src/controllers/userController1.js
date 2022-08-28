const userModel1 = require("../models/userModel1")
const jwt = require("jsonwebtoken")
const { findByIdAndUpdate } = require("../models/userModel1")


const createUser = async function(req,res) {
    let user = await userModel1.create(req.body)
    res.send({msg:user})
}
const userLogin =async function(req,res) {
    let userId =req.body.emailId
    let password = req.body.password

    let userDetail = await userModel1.findOne({emailId:userId,password:password})
    if (!userDetail) {
        res.send({status:false,msg:"Enter correct emailId and Password"})
    }

    let token = jwt.sign({userId:(userDetail._id).toString()},"This is a very secret key")
    res.setHeader("x-auth-token",token)
    res.send({staus:true,msg:token})
}

const userDetails = async function(req,res) {
    let token = req.headers["x-auth-token"]
    if(!token) {
        return res.send({msg:"token is not present in the header"})
    }

    let verifyToken = await jwt.verify(token,"This is a very secret key")
    if(!verifyToken) {
        return res.send({status:false,msg:"token is invalid"})
    }

    let userId = req.params.userId
    let user = await userModel1.findById(userId)
    if(!user) {
        return res.send({status:false,msg:"userId is wrong"})
    }
    res.send({status:true,msg:user})
}

const updateUser = async function(req,res) {
    let token = req.headers["x-auth-token"]
    if(!token) {
        return res.send({msg:"token is not present in the header"})
    }

    let verifyToken = await jwt.verify(token,"This is a very secret key")
    if(!verifyToken) {
        return res.send({status:false,msg:"token is invalid"})
    }
    let userId = req.params.userId
    let user = await userModel1.findById(userId)
    if(!user) {
        return res.send({status:false,msg:"userId is wrong"})
    }
    let input = req.body
    let updatedUser = await userModel1.findByIdAndUpdate(userId,{$set:input},{new:true})
    res.send({status:true,msg:updatedUser})
}
const deleteUser = async function (req,res) {
    let token = req.headers["x-auth-token"]
    if(!token) {
        return res.send({msg:"token is not present in the header"})
    }

    let verifyToken = await jwt.verify(token,"This is a very secret key")
    if(!verifyToken) {
        return res.send({status:false,msg:"token is invalid"})
    }
    let userId = req.params.userId
    let user = await userModel1.findById(userId)
    if(!user) {
        return res.send({status:false,msg:"userId is wrong"})
    }
    let userDeletion = await userModel1.findByIdAndUpdate(userId,{$set:{isDeleted:true}},{new:true})
    res.send({status:true,msg:userDeletion})
    
}

module.exports.createUser = createUser
module.exports.userLogin = userLogin
module.exports.userDetails = userDetails
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser
