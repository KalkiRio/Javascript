// singleton is not created from literal but when object is created from constructor it creates a singleton

//object literals

const mysym = Symbol("key1"); // declaring a symbol

const jsUser = {
    name: "Kumara",
    "fullName" : "Kumara Kumar",
    [mysym]: "mykey1", //symbol key is referes in []
    age: 39,
    location: "delhi",
    isLoggedIn: false,
    lastlogin: ["monday", "saturday"]
}

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["fullName"]); // this cannot be accessed with . notation hence requires [] notation
console.log(jsUser[mysym]);

//jsUser.location = "chennai"; // changing value
//Object.freeze(jsUser); // this will freeze the object and not allow any change to happen in the object
//jsUser.location = "udaipur"; // this will not chamge the value as the object was freezed
//console.log(jsUser);

jsUser.greeting = function () {
    console.log("hello jsUser");
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());

/* jsUser.greeting2 = function() {
    console.log(`hello jsUser, ${this.name}`)
} */
// console.log(jsUser.greeting2());

const sym= Symbol("key1");

const user={
  name:"rio",
  age:10000,
  [sym]:"secret",
  location: "gurugram",
  isLoggedin: false,
  logInDays: ["monday","wednesday","saturday"]
}

//console.log(user.name);
//console.log(user["age"]);
//console.log(user["logInDays"]);
//console.log(user[sym]);

//console.log(typeof user[sym]);
//console.log(user);

user.logInDays.push("Sunday");
//console.log(user);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3:"c", 4: "d"}

const obj3= Object.assign({},obj1,obj2);
const obj4= {...obj1,...obj2}
//console.log(obj3);
//console.log(obj4);

//console.log(Object.keys(user));
//console.log(Object.entries(user));
//console.log(Object.getOwnPropertyNames(user));

//console.log(Object.hasOwnProperty("name"));

const{logInDays}=user;
//console.log(logInDays);

const{isLoggedin: login, location: area} = user;
//console.log(login,area);




