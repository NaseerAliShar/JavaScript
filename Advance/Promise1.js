// function Promises(val){
//     return new Promise(function (resolve, reject) {
//         setTimeout(function(){
//             let data = 10 * val;
//             resolve(data);
//         },1000)
//     });
// }
// Promises(1).then(function(data){
//     console.log(data);
// })

// function Promises(val) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       let data = 10 * val;
//       resolve(data);
//     }, 1000);
//   });
// }
// Promises(1)
//   .then(function (data) {
//     return Promises(data);
//   })
//   .then(function (data) {
//     return Promises(data);
//   })
//   .then(function (data) {
//     return Promises(data);
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// // Promise 1st
// function Prom(value) {
//   return new Promise((resolve, reject) => {
//     if (value) {
//       resolve("Success");
//     } else {
//       reject("Failure");
//     }
//   });
// }
// Prom(false)
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (data) {
//     console.log(data);
//   });

// Promise 2nd
// function prom(name) {
//     return new Promise((resolve, reject) => {
//         if (name) {
//             resolve("Success");
//         }
//         else {
//             reject("Failure");
//         }
//     });
// }

// let Response = (res) => {
//     console.log(res);
// }

// let Error = (err) => {
//     console.log(err);
// }
// prom(1).then(Response);
// prom(0).catch(Error);

// Promise 3rd
// function prom(a, b) {
//     return new Promise((resolve, reject) => {
//         var c = a / b;
//         console.log("Fetching data, please wait.");
//         setTimeout(() => {
//             if (a, b) {
//                 resolve("Success " + c);
//             }
//             else {
//                 reject("Failure");
//             }
//         }, 2000)
//     });
// }
// prom(9, 2).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// Promise 4th
// function prom() {
//     return new Promise((resolve, reject) => {
//         console.log("Fetching data, please wait.");
//         setTimeout(() => {
//             $.get("https://jsonplaceholder.typicode.com/posts",function(data){
//                 console.log(data);
//             }).fail(err => {
//                 reject("Fail to Load JSON");
//             })
//         }, 2000)
//     });
// }
// prom(9, 2).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// Promise.all 1st
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Promise1");
//   resolve(10);
//   },1000)
// });

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     console.log("Promise2");
//   resolve(20);
//   },2000)
// });

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     console.log("Promise3");
//   resolve(30);
//   },3000)
// });
// var total = 0;
// Promise.all([p1,p2,p3]).then((res) => {
//     for(var i in res){
//         total += res[i];
//     }
//     console.log("Total: " + total);
//     console.log("Results: " + res);
// }).catch((err => {
//     console.log("Error " + err);
// }));

// Promise.all 2nd
let promisecall = function (returned, message) {
    return function (resolve, reject) {
        setTimeout(() => {
            console.log(message);
            resolve(returned);
        }, returned * 100);
    }
};

let p1 = new Promise(promisecall(10, "1st"));
let p2 = new Promise(promisecall(20, "2nd"));
let p3 = new Promise(promisecall(30, "3rd"));
let p4 = new Promise(function (resolve, reject) {
    resolve("Promise Resolved");
});

var total = 0;
Promise.all([p1, p2, p3]).then((res) => {
    for (var i in res) {
        total += res[i];
    }
    console.log("Total: " + total);
    console.log("Results: " + res);
}).catch((err => {
    console.log("Error " + err);
}));