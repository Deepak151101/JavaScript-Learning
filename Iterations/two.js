// While & Do while Loop

let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2;
}

console.log("---------------");

// While loop on a array-
let myArray = ['flash', "batman", "superman"];

let arr = 0;
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1;
}

console.log("---------------");

// Do While Loop
// Here first we perform the loop at least once then we check for condition

let score = 0;

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);