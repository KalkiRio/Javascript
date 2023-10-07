let score = "33"
console.log(typeof score);
console.log(typeof(score));

let valueInnum = Number(score) // Number is data type, here we are doing data type conversion
console.log(typeof(valueInnum));
console.log(valueInnum);
// "33" => 33
// "33adf" => NaN 
// true => 1

let isloggedin = 1

let boolisloggedin = Boolean(isloggedin)
console.log(boolisloggedin)

// 1=> true
// "" => false
// "hdhhe" => true

let somnum = 33
let strnum = String(somnum)
console.log(strnum)
console.log(typeof(strnum))