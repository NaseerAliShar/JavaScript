// const Prom5 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false;
//         if (!error) {
//             resolve({ username: "naseerali44", password: "shar44" });
//         }
//         else {
//             reject("Error!");
//         }
//     }, 1000);
// })
// async function consumeProme5() {
//     try {
//         const res = await Prom5
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumeProme5();


// Fetch Method 1
// async function myData1() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
// }
// myData1();
//      OR
// (async function myData2() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
// })();


// Fetch Method 2
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getAllUsers();

// function funAsync(val) {
//     return new Promise((resolve) => {
//         setTimeout(function () {
//             let data = 5 + val;
//             resolve(data);
//         }, 1000);
//     })
// }

// (async function () {
//     const data = await funAsync(5);
//     const data1 = await funAsync(data);
//     const data2 = await funAsync(data1);
//     const data3 = await funAsync(data2);
//     const data4 = await funAsync(data3);
//     console.log(data4);
// })();