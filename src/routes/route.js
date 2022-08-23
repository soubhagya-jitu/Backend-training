const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const author1Controller= require("../controllers/author1Controller")
const book1Controller= require("../controllers/book1Controller.js")
const publisherController= require("../controllers/publisherController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)




router.post("/create1Author", author1Controller.create1Author  )
router.post("/createPublisher", publisherController.createPublisher  )
router.post("/create1Book", book1Controller.create1Book  )
router.get("/getBooksWithAuthorPublisherDetails", book1Controller.getBooksWithAuthorPublisherDetails)
router.post("/create2Book",book1Controller.create2Book)
router.put("/books",book1Controller.changeIsHardCover)
router.put("/books1",book1Controller.changeBookPrice)


module.exports = router;