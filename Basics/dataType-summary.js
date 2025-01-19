// Primitive DataTypes
// All these are call by value, their original data's copy is given to us. So, any changes done is done in the copy of that data.
// 7 Types are - 

// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// ----------------------------------------------------------------------------

// Non-Primitive DataTypes:
// Also called as Reference data types
// Here the data's memory refernce is given to us. Same data reference is given.

// Types

// 1. Array
// 2. Objects
// 3. Functions

const heros = ["shaktiman", "naagraj", "doga"]; // Array

console.log(heros[1]);

let myObj = {           // Object
    name: "Deepak",
    age: 23,
}

console.log(myObj.name);

const myFunction = function(){      // Function
    console.log("Hello world");
}