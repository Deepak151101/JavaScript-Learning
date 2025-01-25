// Arrays

// Declaring an array
const myArr = [0,1,2,3,4,5,true,"Deepak"];

// Accessing an array
// console.log(myArr[2]);

// Another type of declaring array
const Heroes = ["Shaktimaan", "Naagraj"];
const myArr2 = new Array (1,2,3,4);

// Methods

myArr.push(17);
// console.log(myArr);     // [ 0, 1, 2, 3, 4, 5, true, 'Deepak', 17 ]
myArr.pop();            
// console.log(myArr);     // // [ 0, 1, 2, 3, 4, 5, true, 'Deepak' ]

// Unshift adds element at start of array
// Not a good practice, too time consuming for large arrays, not optimized way to add elements in a array
myArr.unshift("First Element");
// console.log(myArr);         // [ 'First Element', 0, 1, 2, 3, 4, 5, true, 'Deepak' ]

// Removes first element
myArr.shift();         
// console.log(myArr);         //  [ 0, 1, 2, 3, 4, 5, true, 'Deepak' ]

// console.log("--------------------------------");

// console.log(myArr.includes(9));     // false
// console.log(myArr.indexOf(5));      // 5
// console.log(myArr.indexOf(9));      // -1       Bcz, it is not present 

// console.log("--------------------------------");

const newArray = myArr.join()

// console.log(myArr);         // [ 0, 1, 2, 3, 4, 5, true, 'Deepak' ]
// console.log(typeof myArr);  // Object

// console.log(newArray);      // 0,1,2,3,4,5,true,Deepak
// console.log(typeof newArray);       // string

// console.log("--------------------------------------------");

// Slice & splice

// 1. Slice - Returns an section of an array

console.log("A => ", myArr, " Original Array");         // A =>  [ 0, 1, 2, 3, 4, 5, true, 'Deepak' ] Original Array                

console.log("Slice");
const myNewArr1 = myArr.slice(1,3)      // Return an array from index 1 to 3

console.log(myNewArr1 , " Slice array");                // [ 1, 2 ]  Slice array    
console.log("B => ", myArr, " Original Array");         // B =>  [ 0, 1, 2, 3, 4, 5, true, 'Deepak' ] Original Array   

// 2. Splice - 
console.log("Splice");
const myNewArr2 = myArr.splice(1,3);
console.log("C => ", myArr, " Original Array");         // C =>  [ 0, 4, 5, true, 'Deepak' ] Original Array
console.log(myNewArr2 , " Splice array");               // [ 1, 2, 3 ]  Splice array          