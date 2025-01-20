const name = "Deepak";
const repoCount = 21;

console.log(name + repoCount + "Repositories"); // Old approach - using + operator

// New method is by using back ticks `` 
console.log(`Hello, my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);
// This is also known as String interpolation. // New Approach


// By using new keyword we can use objects of JS
const gameName = new String('Valorant'); // We create a new object of String class

console.log(gameName[0]); // D
console.log(gameName.__proto__); // To view the object - {}

console.log(gameName.length); // 8
console.log(gameName.toUpperCase()); // VALORANT

// When we perform this to upper case manipulation on string, original string does not get changed as a string is a primitive datatype

console.log(gameName.charAt(5)); // a
console.log(gameName.indexOf('r')); // 4

// Substring - Does not tak Negative values
const newGameName = gameName.substring(0,4); // Last character is not counted
console.log(newGameName); // Valo

// Slice - Takes Negative values
const anotherString = gameName.slice(-7, 4);
console.log(anotherString); // alo

// Trim
const newAnotherString = "            Deepak       ";
console.log(newAnotherString);
console.log(newAnotherString.trim());

// Replace
const url = "https://deepak.com/deepak%20javalgi"; // Space in ASCII code is %20

console.log(url);                           // https://deepak.com/deepak%20javalgi
console.log(url.replace('%20', '-'));       // https://deepak.com/deepak%20javalgi

// Include
console.log(url.includes('deepak')); // true
console.log(url.includes('immortal')); // false

// Splitting a string into a array, on basis on -
let gameName1 = "val-or-ant";
console.log(gameName1.split('-'));