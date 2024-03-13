// Synchronous
// alert("Done");
// console.log("Hello Synchronous");

// Asynchronous
// function Asynchronous(){
//     setTimeout(() => {
//         console.log("Done");
//     }, 2000);
// }
// Asynchronous();
// console.log("Hello Asynchronous JavaScript");

// CallBacks
// function newFun(myFun){
//     console.log(typeof myFun);
//     myFun();
// }
// function myExecutedFun(){
//     console.log("Hello CallBacks");
// }
// newFun(myExecutedFun);


// function performOperationAsync(callback) {
//   setTimeout(function () {
//     console.log("Operation completed!");
//     callback(); // Call the callback function
//   }, 2000); // Simulate a 2-second asynchronous operation
// } a
// function afterOperation() {
//   console.log("Callback function executed.");
// }
// performOperationAsync(afterOperation);


// function performOperationAsync(callback) {
//     setTimeout(function () {
//         let res = 5 + 25;
//         callback(res); // Call the callback function
//     }, 2000); // Simulate a 2-second asynchronous operation
// }
// function afterOperation(data) {
//     console.log("Callback function executed.",data);
// }
// performOperationAsync(afterOperation);


// function performOperationAsync(val, callback) {
//     setTimeout(function () {
//         let res = 10 + val;
//         callback(res); // Call the callback function
//     }, 2000); // Simulate a 2-second asynchronous operation
// }
// performOperationAsync(10,function (data) {
//     console.log("Callback function executed.",data);
// });

// CallBack Hell
function performOperationAsync(val, callback) {
  setTimeout(function () {
    let res = 10 + val;
    callback(res); // Call the callback function
  }, 1000); // Simulate a 2-second asynchronous operation
}
performOperationAsync(10, function (data) {
  performOperationAsync(data, function (data1) {
    performOperationAsync(data1, function (data2) {
      performOperationAsync(data2, function (data3) {
        performOperationAsync(data3, function (data4) {
          console.log("Callback function executed.", data4);
        })
      })
    })
  })
});