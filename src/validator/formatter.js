const trim = function(){
    let name = "   FunctionUp     "
    name = name.trim()
    console.log(name)
}

const changeToUpperCase = function() {
    let upperCaseString = "soubhagya samal"
    upperCaseString = upperCaseString.toUpperCase()
    console.log(upperCaseString)
}

const changetoLowerCase = function() {
    let lowerCaseString = "SOUBHAGYA SAMAL"
    lowerCaseString = lowerCaseString.toLowerCase()
    console.log(lowerCaseString)
}

module.exports.trimMyString = trim
module.exports.getUpperCaseString = changeToUpperCase
module.exports.changetoLowerCase = changetoLowerCase