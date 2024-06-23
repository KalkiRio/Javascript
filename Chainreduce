const { access } = require("fs");

const mynums=[1,2,3,4,5,6,7,8,9,10];
//const newnums=mynums.filter((num) => num>4)
//console.log(newnums);

const newnums=[]
mynums.forEach((num)=>{
  if(num>4){
    newnums.push(num);
  }
})
console.log(newnums);

const nums=mynums.map((num)=>{
  return num+10
})
console.log(nums)

//chaining
const newnums2= mynums
                .map((num)=> num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40)
console.log(newnums2)

//reduce
const mynum=[1,2,3,4,5,6];

const mytotal=mynum.reduce(function(acc,currval){
  console.log("acc:",acc,"and crrval:",currval);
  return acc+currval
},0)

console.log(mytotal)

const total= mynum.reduce((acc,currval)=> acc+currval,0)

console.log(total);

const cart=[
  {
    itemname:"shirt",
    price: 299
  },
  {
    itemname:"jeans",
    price: 399
  },
  {
    itemname:"jacket",
    price: 699
  } 
]

const totalprice=cart.reduce((acc,item)=> acc+item.price,0)

console.log(totalprice)
