const express = require('express');
const router = express.Router();
// const userController= require("../controllers/userController")
const userController1= require("../controllers/userController1")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/users", userController.createUser  )

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)


router.post("/createUser",userController1.createUser)
router.post("/login",userController1.userLogin)
router.get("/users/:userId",userController1.userDetails)
router.put("/users/:userId",userController1.updateUser)
router.delete("/users/:userId",userController1.deleteUser)

module.exports = router;