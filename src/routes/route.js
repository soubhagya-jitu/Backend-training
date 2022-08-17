const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const Book1Controller = require ("../controllers/book1Controller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.post("/createBook1",Book1Controller.createBook1)
router.get("/bookList",Book1Controller.bookList)
router.post("/getBooksInYear",Book1Controller.getBooksInYear)
router.post("/getParticularBooks",Book1Controller.getParticularBooks)
router.get("/getXINRBooks",Book1Controller.getXINRBooks)
router.get("/getRandomBook",Book1Controller.getRandomBook)

module.exports = router;