
var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles",
]

chocolateBars.push("butter fingers")

chocolateBars.unshift("heath")

function addElementToBeginningOfArray(arrayOne, element){
  var arrayTwo = [element, ...arrayOne]
  return arrayTwo
}

function desstructivelyAddElementToBeginningOfArray(arrayOne, element){
  arrayOne = [element, ...arrayOne]
  return arrayOne
}

function addElementToEndOfArray(arrayOne, element){
  arrayTwo = [...arrayOne, element]
  return arrayTwo
}

function destructivelyAddElementToEndOfArray(arrayOne, element){
  arrayOne = [...arrayOne, element]
  return arrayOne
}

function accessElementInArray(arrayOne, index){
  return arrayOne[index]  
}

function destructivelyRemoveElementFromBeginningOfArray(arrayOne){
  return arrayOne.shift()
}



