// const userEmail = "";        // False (Else condition)
const userEmail = []         // True (If condition)

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// We assume that the string has true value. If it has some value
// And string when empty will have false value.

// Examples:
// Falsy Values -> All the values that are by default false

// false, 0, -0 (Negative Zero), BigInt 0n, "" (Empty string), null, undefined, NaN (Not a Number)          ----> All are Falsy values

// -------------------------------------------------------------------------------------------------------------------

// Truthy Values -> All the values that are by default True

// "0", "false", " ", [] (Empty Array), {} (Empty Object) , function () {} (Empty Function)         ----> All are Truthy values 


// How to check if Array is Empty:
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// How to check if a Object is Empty:
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Object.keys(emptyObj) -> This gives us all the keys of the object. And now we get a array of keys. So as it is now an array, we can thus use length property on it. 

// Some Special Cases:
// false == 0       -> True
// false == ""      -> True
// 0 == ""          -> True


// Nullish Coalescing Operator (??):
let val1;
// val1 = 5 ?? 10               // 5
// val1 = null ?? 10            // 10
// val1 = undefined ?? 15       // 15
val1 = null ?? 10 ?? 20      // 10

console.log(val1);


// Terniary Operator:
// Syntax:

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")