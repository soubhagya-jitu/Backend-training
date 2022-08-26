const productModel = require("../models/productModel")



const createProduct = async function(req,res) {
    const product = await productModel.create(req.body)
    res.send({msg:product})
}
module.exports.createProduct = createProduct