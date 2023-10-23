const score = 400
console.log(score)
const bal = new Number(100) // explicitly declaring a number value
console.log(bal);

console.log(bal.toString().length);
console.log(bal.toFixed(2));
const otherNum = 23.78965

console.log(otherNum.toPrecision(4));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN')); // puts commas in the number and en-IN is used to put commas in indian numeric system

//".................................."

console.log(Math);
console.log(Math.abs(-4));  // gives absolute value
console.log(Math.round(4.6)); // round off number
console.log(Math.ceil(4.3));  // round off number to ceiling value
console.log(Math.random()); // gives a random number between 0 to 1
console.log((Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random() * (max - min + 1)+ min)); //
