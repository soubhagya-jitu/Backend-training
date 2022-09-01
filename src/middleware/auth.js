const Jwt = require("jsonwebtoken")

const authenticate = function (req, res, next) {
    try {
        let token = req.headers["x-auth-token"]
        if (!token) return res.status(401).send({ msg: "token is not present in header" })
        let validToken = Jwt.verify(token, "This is a secret key")
        if (!validToken) return res.status(401).send({ msg: "Token is invalid" })
        req.validToken = validToken
        next()
    }
    catch (err) {
        res.status(500).send({msg:"error",error:err.message})
    }
}


const authorise = async function (req, res, next) {
    try {
    let userId = req.params.userId
    let validUser = req.validToken.userId
    if (userId !== validUser) return res.status(401).send({ msg: "The user is invalid" })
    next()
    }
    catch (err) {
        res.status(500).send({msg:"error",error:err.message})
    }

}
module.exports.authenticate = authenticate
module.exports.authorise = authorise