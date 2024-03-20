console.log(Math);

console.log(Math.abs(-5));
console.log(Math.round(4.6));  // important
console.log(Math.ceil(4.8));
console.log(Math.floor(4.8));
console.log(Math.max(3,5,1,8));
console.log(Math.min(3,5,1,8));
console.log((Math.random()*10)+1);       // always between 0 and 1 in normal

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);