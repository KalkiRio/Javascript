const myBoolean= true
let firstNumber=20
let secondNumber=40
let myString="hello world"
let myArray = [myBoolean,myString]
const myObject = {
  fProp: myArray,
  sumProperty: firstNumber+secondNumber 
}
console.log(myObject) // printing everything in the object
console.log(myObject.sumProperty) // printing sumproperty from object
console.log(myObject.fProp=myArray[1]) // printing index 1 from fProp myArray
// can also use this for the same  output    console.log(myObject.fProp[1])
