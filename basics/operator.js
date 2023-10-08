//operators
let a=3
console.table([a**3,++a,--a]) // exponent, pre increment, pre decrement

console.log(a+=5) //shorthand assignment operator

const result = 20 === 20 //it checks whether they are equal in value as well as data type
console.log(result)

const numVal = 20
const strVal = "20"
console.table([numVal==strVal,numVal===strVal,numVal!==strVal,numVal!=strVal])

const result2 = 20 === 20 ? "values match" : "values do not match" // ternary operator
console.log(result2)

console.log(20===20 && 10=="10") // logical and operator
console.log(!(20===20))

const res = (() => {
    return 20;
})();

console.log(res)

