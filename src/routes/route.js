const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')




})
router.get('/get/movies',function(req,res) {
    let film= ["iron man","captain america","thor","hulk"]
    res.send(film)
})



router.get("/GET/movies/:indexNumber",function (req,res) {
    let film= ["iron man","captain america","thor","hulk"]

    let requestParams = req.params.indexNumber
    let result5 = film[requestParams]
    console.log (result5)
    res.send(result5)
})


router.get('/get-moviess/:indexNumber',function(req, res){ //student detail api he 
    let film= ["iron man","captain america","thor","hulk"]
   
    let index = req.params.indexNumber;

     if(index >= film.length){
        return res.send("use a valid index  ")
     }else{
    
     res.send(film[index])
     }
})

router.get("/get/films",function(req,res) {
   let movies =  [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name:"Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]

       res.send(movies)
})

router.get("/get/films/:filmId",function(req,res) {
    let movies =  [ {
         id: 1,
         name: "The Shining"
        }, {
         id: 2,
         name: "Incendies"
        }, {
         id: 3,
         name:"Rang de Basanti"
        }, {
         id: 4,
         name: "Finding Nemo"
        }]

        let index = req.params.filmId
        if(index>=movies.length) {
            res.send("No movie exists with this id")
        } else {
            res.send(movies[index])
        }
 })


module.exports = router;

