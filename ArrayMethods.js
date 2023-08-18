const arr = ["Gabriel", "John", "Sam", "Simon", "Rachel"];
console.log(arr);

// Add elements at the end of the array
// push
let size = arr.push("Daniel");
console.log(arr);
console.log(size);

// Add elements at the start of the array
// unshift
size = arr.unshift("Michele");
console.log(arr);
console.log(size);

// Remove elements at the end of the array
// pop
let lastElement = arr.pop();
console.log(arr);
console.log(lastElement);

// Remove elements at the start of the array
lastElement = arr.shift();
console.log(arr);
console.log(lastElement);

// Search for elements
// includes -> if elements exist at the array
const includes = arr.includes("John");
console.log(includes);

// Search for index of the element
// indexOf
const index = arr.indexOf("Sam");
console.log(index);

// Cut and Contatenate
// slice
const arrName = arr.slice(0, 3);
const arrOtherName = arr.slice(-3);
console.log(arr);
console.log(arrName);
console.log(arrOtherName);

// concat
const society = arr.concat("Josh", "Michael");
console.log(arr);
console.log(society);

// Replace elements
// splice
const removedElement = arr.splice(2, 1, "Vitoria");
console.log(removedElement);
console.log(arr);
