const a = 1;
const b = "1";

// console.log(a == b); // true
// console.log(a === b); // false

const c = a;
// console.log(c == a); // true
// console.log(c === a); // true

function sum() {
    return (a, b) => a + b;
}

const sum1 = sum();
const sum2 = sum();

// console.log(sum1 === sum2); // false
// console.log(sum1 === sum1); // true
// console.log(sum2 === sum2); // true

const sum3 = sum1;
// console.log(sum3 === sum1); // true
// console.log(sum3 === sum2); // false

const sum4 = sum1();
// console.log(sum4 === sum1); // false