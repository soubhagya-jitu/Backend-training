const express = require('express');
const _ = require('underscore')

const abc = require('../introduction/intro')
const loggerModule = require('../logger/logger.js')
const formatterModule = require('../validator/formatter') 
const helperModule = require('../util/helper')
const router = express.Router();
let lodash = require('lodash')

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    loggerModule.printInfo()
    formatterModule.trimMyString()
    formatterModule.getUpperCaseString()
    formatterModule.changetoLowerCase()
    helperModule.getTodaysDate()
    helperModule.getCurrentMonth()
    helperModule.printBatchDetails()
    let result = ["jan","feb","mar","april","may","jun","jul","aug","sep","oct","nov","dec"]
    let result1 = lodash.chunk(result,4)
    console.log(result1)
    let array = [1,3,5,7,9,11,13,15,17,19]
    let result2 =lodash.tail(array)
    console.log(result2)
    let arr1=[2,6,7,4,12]
    let arr2 =[6,8,4,7,6]
    let arr3 =[5,6,7,9,12]
    let arr4 = [6,2,8,4,3]
    let arr5 = [2,8,3,12,4]
    let result3 = lodash.union(arr1,arr2,arr3,arr4,arr5)
    console.log(result3)
    let obj = [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    let result4 =lodash.fromPairs(obj)
    console.log(result4)

    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason