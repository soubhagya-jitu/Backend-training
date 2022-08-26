const orderModel = require("../models/orderModel.js")

const mid1 = async function (req, res, next) {
    let isFreeAppUserPresent = req.headers.isfreeappuser
    if (isFreeAppUserPresent) {
        next()
    } else {
        res.send({ msg: "header is required" })
    }
}
const mid2 = async function (req, res, next) {
    let input = req.body
    let isFreeAppUserPresent = req.headers.isfreeappuser
    if (isFreeAppUserPresent) {
        input["isFreeAppUser"] = isFreeAppUserPresent
        next()
    } else {
        res.send({ msg: "header is required" })
    }
}

module.exports.mid1 = mid1
module.exports.mid2 = mid2
