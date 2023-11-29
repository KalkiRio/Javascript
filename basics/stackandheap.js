/*
data types are classified in two types depending on how they are stored in memory(mainly by value or reference)

primitive data types
String
Number 
Boolean
Null
Undefined
Symbol
Bigint

reference type data types (non primitive)
arrays
objects
functions
*/
const bigNumber = 563536585538n// n is used last of a number to specify the number as Bigint
console.log(typeof(bigNumber))
// not primitive are objects in js and function ireturn tupe is function object

// memory in javascript

//stack , heap
// primitive uses stack and non primitive uses heap
let myName = "rio"
let anotherName = myName
anotherName = "hello"

console.log(myName)
console.log(anotherName)

let userOne ={
  mail: "bibibuib@gmail.com",
  pId: 45
}

let userTwo = userOne

userTwo.mail = "hudhihushi@gmail.com"
console.log(userOne.mail)
console.log(userTwo.mail)
