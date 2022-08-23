const author1Model = require("../models/author1Model")


const create1Author= async function (req, res) {
    let author1 = req.body
    let author1Created = await author1Model.create(author1)
    res.send({data: author1Created})
}
module.exports.create1Author = create1Author