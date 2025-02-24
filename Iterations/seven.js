// Map

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map is also a Callback function
// const newNums = myNumbers.map( (num) => {
//     return num + 10;
// });

// console.log(newNums);


// Using multiple Map -> Chaining

const newNums = myNumbers.map( (num) => num * 10 ). map( (num) => num + 1 ). filter( (num) => num >= 40 );
console.log(newNums);