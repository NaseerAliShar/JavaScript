let Hello = function(){
    console.log("Hello Functions");
}
Hello();

let A1 = () => `Arrow Functions`;
console.log(A1());


let A3 = (a , b) => {
    console.log(a);
    console.log(b);
}
A3(5,10);

A1();
let A2 = (a , b) => console.log(a+b);
A2(10,10);


let A4 = (a , b) => {
return console.log(a-b);
}
A4(40,10);