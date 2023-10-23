let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(typeof myDate);


let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate.toDateString());
let myNewDate = new Date(("02-22-2023"));
console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.round(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default', {
    weekday: "long"
})