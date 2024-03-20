const string = new String('Hello   ');
console.log(string);
console.log(typeof string); // object
console.log(string.length); // 9
console.log(string.__proto__);
console.log(string.charAt(4));      // o
console.log(string.indexOf('l'));     // 3
console.log(string.toLowerCase());  // hello
console.log(string.toUpperCase());  // HELLO
console.log(string.includes('H')); // true
console.log(string.concat('Naseer')); // Hello Naseer
console.log(string.split('e'));     // [ ' H', 'llo   ' ]
console.log(string.slice(-5, 8));      // lo
console.log(string.slice(2, 4));    // ll
console.log(string.substr(2, 4));  // llo
console.log(string.substring(2, 4));    // ll
console.log(string.replace('l', 'N'));  // HeNlo
console.log(string.trim());         // Hello
console.log(string.trimStart());      // Hello
console.log(string.trimEnd());          // Hello
console.log(string.startsWith('H'));       // true
console.log(string.endsWith(' '));       // true