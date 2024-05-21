//arrow functions

const user ={
  username:"sam",
  price: 876,

  welcomeMessage: function() {
    console.log(`${this.username} just logged in`);
    console.log(this);
  }
}

//user.welcomeMessage();
//user.username = "rio";
//user.welcomeMessage();

//console.log(this);

function one(){
  let username="sam"
  console.log(this);
  console.log(this.username);// gives undefined 
}

//one()
const two = () => {
  let username="sam"
  console.log(this);
  console.log(this.username);// gives undefined 
}

//two()

const addTwo = (num1,num2) => {
  return num1+num2;
}

//console.log(addTwo(56,78))

const addTwo2 = (num1,num2) => num1+num2 
//const addTwo2 = (num1,num2) => (num1+num2)//implicit return both of them don't need return only when written in curly braces thee is a need for return

//console.log(addTwo2(54,87))

const add=(num1,num2)=>({username: "rio"}) //normal brackets necessary to return objec implicitly

//console.log(add(56,89))

