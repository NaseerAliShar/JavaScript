// Array
let arr1 = [10, 20, 30, 40];
let arr2 = [50, 60];

let arr3 = arr1.concat(arr2); // Concatenation
console.log(arr3);

let arr4 = [...arr1, ...arr2, 70];  // Spread Operator
console.log(arr4);

// Objects
let obj1 = {
    "fname": "Naseer",
    "lname": "Ali"
};

let obj2 = {
    "age": 20,
    "id": 44
};

let obj3 = { ...obj1, ...obj2, city: "Nawabshah" };
console.log(obj3);