// Numbers
const score = 400
console.log(score); // 400

const balance = new Number(100)
console.log(balance); // [Number: 100]

console.log(balance.toString()); // 100 (Here, 100 is a 3 charactered string)
console.log(balance.toString().length); // 3

// To get a number of digits after decimal
console.log(balance.toFixed(2)); // 100.00 (Gives us precision value)

const otherNumber = 123.866;
console.log(otherNumber.toPrecision(3)); // 124
console.log(otherNumber.toPrecision(4)); // 123.9 
console.log(otherNumber.toPrecision(5)); // 123.87

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // Gives us commas according to US standards    // 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // Gives us commas according to Indian standards     // 10,00,000

console.log('-------------------------------------------------------------------------------------------------------------------');

// Maths
console.log(Math); // Object [Math] {}
// This is itself a object it has many properties in it.

console.log(Math.PI);   // 3.141592653589793
console.log(Math.sqrt(49));    // 7 

console.log(Math.abs(-4)); // Gives us absolute (mod) value // 4

console.log(Math.round(7.8)); // 8. Rounded off as per standard rules
console.log('---------');
console.log(Math.ceil(7.2)); // 8. Gives us ceiling value of rounding number
console.log(Math.floor(7.8)); // 7. Gives us floor value of rounding number

console.log('---------');

console.log(Math.min(4, 3, 6, 8)); // 3. Gives minimum element of an array
console.log(Math.max(4, 3, 6, 8)); // 8. Gives maximum element of an array

console.log('-------------------------------------------------------------------------------------------------------------------');
// Most used math library
console.log(Math.random()); // Gives random values in decimals between 0-1
console.log(Math.floor((Math.random()*10)) + 1); // Gives us single digit random number between 1-10

// We add +1 at the end, to avoid the case - If Math.random() gives 0.1 & floor value of 0.1 would be 0. Hence, we add +1 in it.

console.log('-------------------------------------------------------------------------------------------------------------------');

// To get random nos. with min=10 & max = 20
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min + 1)) + min);
// (max-min) is done in order to get the range in which we want values, & (max-min+1) is to avoid Zero case as we considered above. (Line 49)