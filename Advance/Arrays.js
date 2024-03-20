const array1 = new Array(1, 2, 4, 3, 5)
console.log(array1);
array1.push(6)
console.log(array1);
array1.pop()
console.log(array1);
array1.unshift(0)
console.log(array1);
array1.shift()
console.log(array1);

console.log(array1.includes(3));
console.log(array1.indexOf(4));
console.log(array1.join());

// const arr1 = array1.slice(1, 3)
// console.log(arr1);
// console.log(array1);
// const arr2 = array1.splice(1, 3)
// console.log(arr2);
// console.log(array1);

const array2 = [7, 8, 9];
const arr3 = array1.concat(array2)
console.log(arr3);

// array1.push(array2)
// console.log(array1);

const arr4 = [...array1, ...array2]
console.log(arr4);

const array3 = [1, 2, [3, 4], 5, [6, 7, [8, 9]]]
const arr5 = array3.flat(Infinity)
console.log(arr5);

console.log(Array.isArray("Naseer"));
console.log(Array.from("Naseer"));
console.log(Array.from({ name: "Naseer" }));

const a = 1, b = 3, c = 3
console.log(Array.of(a, b, c));

//  array.map(val => console.log(val));                           // Map
//  array.sort().map(val => console.log(val));                    // Sort
//  array.filter(val => val >= 300).map(num => console.log(num)); // Filter