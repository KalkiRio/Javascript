const marvelHeroes = ["thor", " ironman ", " spiderman"];
const dcHeroes = ["superman", "batman", "flash"];

//marvelHeroes.push(dcHeroes); // this puts an array inside of an array in existing array
//console.log(marvelHeroes); // we can see the pushed array inside the array marvelHeroes 

//const comHeroes = marvelHeroes.concat(dcHeroes); // combines two or more array and returns a new array it doesn't work on existing array but needs to be stored in new array variable
//console.log(comHeroes);

//const allHeroes = [...marvelHeroes, ...dcHeroes]; // ... is a spread operator used to get pretty much the same output as concat but it spreads eachelement individually concat can be used for same output as well
//console.log(allHeroes); // spread operator is more used as it is more convenient

const aarr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const usableaarr = aarr.flat(Infinity) // flattens the complex array within array within array type situation with specified depth in this case depth used is Infiniy
console.log(usableaarr);

console.log(Array.isArray("hello")); // is array is used to check whether this is an array or not
console.log(Array.from("hello")); // it will convert hello from string to array using from
console.log(Array.from({name: "hitesh"})); //inetersting case as it will ive an empty array as we also need to specify what we wantto be converted to array

let score1=100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // returns a new array from set of elements


