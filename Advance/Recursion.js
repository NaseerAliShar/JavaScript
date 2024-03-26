function fact(x) {
    if (x == 0) {
        return 1;
    }
    else {
        return x * fact(x - 1);
    }
}
// let a = prompt("Enter Number: ");
console.log(fact(5));