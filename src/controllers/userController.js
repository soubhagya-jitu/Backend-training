const userModel = require("../models/userModel.js")


const createUser = async function(req,res) {
    let input=req.body

        const user = await userModel.create(input)
        res.send({msg:user})
    
}



module.exports.createUser = createUser