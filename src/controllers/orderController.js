const orderModel = require("../models/orderModel.js")
const userModel = require("../models/userModel.js")
const { find } = require("../models/userModel.js")



const createOrder = async function(req,res) {
    let a = req.body.userId
    let b = req.body.productId

    let result1 = await userModel.findById(a)
    let result2 = await userModel.findById(b)
    if (!result1 || !result2) {
        res.send({msg:"either of the user or product not present"})
    } else {
        
    }
    let order = await orderModel.create(req.body)
    res.send({msg:order})
}
module.exports.createOrder = createOrder