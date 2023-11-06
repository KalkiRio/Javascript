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




