//strings
const name= "rio"
const repoCount = 4
//console.log(name + repoCount)
//console.log('hello my name is ${name} and my repo count is ${repoCount}')
const gameName = new String("hola-espanyola")

console.log(gameName[2]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf("e"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-13,4);
console.log(anotherString)

const newStr1 = "   rio   "
console.log(newStr1.trim())

const url = "https://hhhhhh.com/hi%20boup"
console.log(url.replace("%20","-"))
console.log(url.includes(".com"))

console.log(gameName.split("-"));