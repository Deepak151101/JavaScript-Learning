// For of Loop

const arr = [1,2,3,4,5];

for (const val of arr) {
    console.log(val);
}

console.log("--------------");

const greetings = "Hello World";

for (const greet of greetings) {
    console.log(greet);
}

console.log("--------------");

// Maps -> A Map holds a key value pair. Remebers original order of keys inserted. It may be used as either a key or a value. 
// It conains all unique values.

const map = new Map();;
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");
map.set('GR', "Germany");

console.log(map);

console.log("--------------");

// For of loop on Map

for (const [key, value] of map) {   // Destructuring of Array
    console.log(key, ':-', value);
}

console.log("--------------");

// For of Loop on a Object

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);  
// }

// This won't work bcz it is not correct syntax for Object.