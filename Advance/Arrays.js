const arr = [300, 200, 100, 500, 400];
arr.map(val => console.log(val));                           // Map
arr.sort().map(val => console.log(val));                    // Sort
arr.filter(val => val >= 300).map(num => console.log(num)); // Filter