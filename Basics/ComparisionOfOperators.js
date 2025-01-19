console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true

console.log("----------------------");

// While comparing datatype should be the same

console.log("2" > 1); // true
console.log("02" > 1); // true
// Here JS automatically converts 2 and 02 in number and then compares

console.log("----------------------");

console.log(null > 0); // false
console.log(null < 0); // false
console.log(null <= 0); // true
console.log(null >= 0); // true
console.log(null == 0); // false

console.log("----------------------");

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined <= 0); // false
console.log(undefined >= 0); // false
console.log(undefined == 0); // false

console.log("----------------------");

console.log("2" == 2); // true
console.log("2" === 2); // false
console.log("2" === "2"); // true

console.log("----------------------");