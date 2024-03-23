const object = new Object()    // singleton object
const sym = Symbol("key1");
/* Symbol is a unique and immutable data type introduced in ES6. It is often used as an
object property key to avoid naming conflicts with other properties. In the provided
code snippet, `sym` is a Symbol key created with the description "key1" and assigned to
the `obj1` object. This allows for a unique identifier that cannot be accidentally
overwritten or accessed without explicitly using the Symbol key. */
const obj1 = {              // object literals
    id: 1,
    fname: "muhammad",
    lname: "naseer",
    isStudent: true,
    "e mail": "naseerbaloch7427@gmail.com",
    [sym]: "key1",
    course: ["PF", "OOP", "DSA", "DBMS"],
    greeting: function () {
        console.log(`Hello, ${this.fname} ${this.lname}!`);
    },
    address: {
        street: 2,
        postal_code: 73400,
        district: "Shaheed Banazirabad",
        tehsil: {
            first: "Nawabshah",
            second: "Sakarand"
        }
    },
    friends:[
        {id:1, name:"ABC"},
        {id:2, name:"DEF"}
    ]
}
obj1.id = 2                   // re-initialize value
obj1.age = 21                 // add new entry in object
// console.log(obj1);          // complete object access
console.log(obj1[sym]);      // access the symbol
console.log(obj1.fname);            // access by dot operator
console.log(obj1["lname"]);         // access by quotes not matters single/double quotes in js
console.log(obj1["e mail"]);         // this is accessible
console.log(obj1.course[1]);         // access the array values
console.log(obj1.address.district);     // access the nested object
console.log(obj1.address.tehsil?.first); // ? is new feature in ES11 called optional operatorif any entry not show next
console.log(obj1.friends[1].name);          // access the array of objects
obj1.greeting(); // call the greeting function
obj1.fun1 = function () {
    console.log(`hello ${this.lname}`);
}
obj1.fun1()
console.log(obj1.fun1);   // this will return only function reference not function executes due to no parenthesis

// Object Methods
Object.freeze(obj1)       // freeze will lock your object no changes will occur 
obj1.lname = "saffar"         // re-initializing lname value but changes will not occur due freeze property if you will commit freeze thne chnages will occur
console.log(`${obj1.fname} ${obj1.lname}`);     // result will be muhammad naseer not muhammad saffar

const obj3 = { a: 10, b: 20 }
const obj4 = { c: 30, d: 40 }
// const obj5 = {obj3, obj4}
// const obj5 = Object.assign(obj3,obj4)
 const obj5 = {...obj3, ...obj4}
console.log(obj5);

// console.log(Object.keys(obj1));          returns only keys
// console.log(Object.values(obj1));        // returns only values
console.log(Object.entries(obj1));      // every key value pair or property returns in single array
console.log(obj1.hasOwnProperty("fname"));      // return true
console.log(obj1.hasOwnProperty("fnames"));      // returns false