// Chai Aur Code Promises

// function prom() {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             console.log("Resolve");
//             resolve("Executed");
//         }, 1000)
//     })
// }

// prom().then(function (data) {
//     console.log(data);
// })

// const Prom1 = new Promise(function (resolve, reject) {
//   setTimeout(function(){
//     console.log("Async Task is Completed");
//     resolve();
//   },1000)
// })
// Prom1.then(function(){
//   console.log("Promise1 Consumed");
// })


// new Promise(function (resolve, reject) {
//   setTimeout(function(){
//     console.log("Async Task is Completed");
//     resolve();
//   },1000)
// }).then(function(){
//   console.log("Promise2 Consumed");
// })


// const Prom3 = new Promise(function (resolve, reject) {
//   setTimeout(function(){
//     resolve({Name:"Naseer", Age:21});
//   },5000)
// })
// Prom3.then(function(user){
//   console.log(user);
// })


// const Prom4 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ name: "Naseer", age: 21 });
//     }
//     else {
//       reject("Error!");
//     }
//   }, 1000)
// })
// Prom4.then((user) => {
//   console.log(user);
//   return user.name
// }).then((name) => {
//   console.log(name);
// }).catch(function (error) {
//   console.log(error);
// }).finally(() => console.log("The Promised is Either Resolved or Rejected"));

function funAsync(val) {
    return new Promise((resolve) => {
        setTimeout(function () {
            let data = 5 + val;
            resolve(data);
        }, 1000);
    })
}

funAsync(5)
    .then(function (data) {
        return funAsync(data)
    }).then(function (data) {
        return funAsync(data)
    }).then(function (data) {
        return funAsync(data)
    }).then(function (data) {
        console.log(data);
    })