//functions
//function name(){
 // console.log("rio");
//}

//name()

/*function addition(num1,num2){
  console.log(num1+num2);
}

addition(5,6);*/

function add(num1,num2){
  return num1+num2;
}

//const result=add(5,6);
//console.log(result);

function loginUserMessage(username){
  return `${username} just logged in`;
}

//console.log(loginUserMessage("rio"));

function loginMessage(username){
  if(username===undefined){
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in`;
}

//console.log(loginMessage())

function calculateCartPrice(...num1){//here ... is rest oeprator rather than spread perator name depends on use case
  return num1;
}

//console.log(calculateCartPrice(100,200,600,700));

//objects to functions

const user={
  username:"rio",
  mail:"rio@gmail.com"
}

function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and email is ${anyobject.mail}`);
}

//handleObject(user)
/*handleObject({
  username:"sam",
  mail:"sam@gmail.com"
})*/

const myArr=[1,2,3];

function secondvalue(Arr){
  return Arr[1];
}
//console.log(secondvalue(myArr));
//console.log(secondvalue([3,5,700]))

//immediately invoked function expression(iife) iife is used to solve global pollution and immediate execution of a function

(function hello(){
  console.log("hello world");
})();

//arrow function in iife

(()=>{
  console.log("hello");
})();

//iife arrow with parameter

((name)=>{
  console.log("hello"+name);
})("Rio")


