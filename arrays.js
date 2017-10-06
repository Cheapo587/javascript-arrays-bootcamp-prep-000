
var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles",
]

chocolateBars.push("butter fingers")

chocolateBars.unshift("heath")

//ADDS to BEGINNING
function addElementToBeginningOfArray(arrayOne, element){
  var arrayTwo = [element, ...arrayOne]
  return arrayTwo
}

function destructivelyAddElementToBeginningOfArray(arrayOne, element){
  arrayOne.unshift(element)
  return arrayOne
}

//ADDS TO END
function addElementToEndOfArray(arrayOne, element){
  arrayTwo = [...arrayOne, element]
  return arrayTwo
}

function destructivelyAddElementToEndOfArray(arrayOne, element){
  return arrayOne.push(element)
}

//access element at index
function accessElementInArray(arrayOne, index){
  return arrayOne[index]
}

//REMOVALS
//from beginnings
function destructivelyRemoveElementFromBeginningOfArray(arrayOne){
  return arrayOne.shift()
}

function removeElementFromBeginningOfArray(arrayOne){
   var arrayTwo = arrayOne.slice(1)
   return arrayTwo
}

//from ends
function destructivelyRemoveElementFromEndOfArray(arrayOne){
  arrayOne = arrayOne.pop()
  return arrayOne
}

function removeElementFromEndOfArray(arrayOne){
  var arrayTwo = arrayOne.slice(0, arrayOne.length - 1)
  return arrayTwo
}
