// let score = 33;
let score = "33abc";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN"
// true => 1, false => 0

console.log("--------------------------------------------------------------------");

// let isLoggedIn = 1;
let isLoggedIn = "Deepak";
console.log(typeof(isLoggedIn));
let boolisLoggedIn = Boolean (isLoggedIn);
console.log(typeof(boolisLoggedIn));
console.log(boolisLoggedIn);

// 1 => True
// 0 => False
// "Deepak" => true
console.log("--------------------------------------------------------------------");

let someNumber = 17;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);