// array in js is resizeable

const arr = [1,2,4,'hello'];

console.log(arr[0]);
const myarr = new Array(1,2,4,5);
console.log(myarr);

// array methods

arr.push(6); // pushes a value at the end
console.log(arr);
arr.pop() // deletes or pops last element from array
console.log(arr);

arr.unshift(9); // to add element in the start but it shifts data which causes performance bottle nect in large datasets
console.log(arr);

arr.shift();// deletes the element from start
console.log(arr);

console.log(arr.includes(9));
console.log(arr.indexOf(4));

const newArr = arr.join() //binds array and converts to string format hence the type changes

console.log(newArr);
console.log(typeof newArr);

//slice, splice

console.log("A",arr);
const mya1 = arr.slice(1,3); // slices the array by creating copy of the elements in the range 

console.log(mya1);
console.log("B", arr);

const mya2 = arr.splice(1,3); // splice manipulates the original array by removing the elements in the splice range and puuting that element in splice array 
console.log("C",arr);
console.log(mya2);


