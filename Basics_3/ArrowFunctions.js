// This keyword

const user = {
    username: "Hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);       // Gives us the context - user object
        console.log(this);      // Current Context => Full obj is output
    }

}

user.welcomeMessage();      // Print the object wrt the current context i.e Hitesh
user.username = "Sam"       // Context changed here to Sam
user.welcomeMessage()       // Print the object wrt the current context i.e Sam


console.log(this);      // {} - Here current context is empty bcz we are in Node Environment


console.log("-------------------------------");

// function chai(){
//     let username = "hitesh"
//     console.log(this);      // This will give us many global values - Here we are in a function, so we are not getting empty object
//     console.log(this.username);     // undefined - This is bcz, this keyword only works in a object.
// }

// chai();

// Same example but using different way of writing functions
// const chai = function() {
//     let username = "hitesh"
//     console.log(this);
//     console.log(this.username);      // undefined - 
// }

// chai();


// Arrow Functions:
// Same example using another way which is included in ES6 - By removing 'function' keyword
// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);      // {}
//     console.log(this.username);     // undefined
// }

// chai();


// Arrow Functions-
// 1. Basic Arrow function
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3,4));       // 7

// 2. Implicit return 
const addTwoNum = (num1, num2) =>  num1 + num2;
// const addTwoNum = (num1, num2) => ( num1 + num2 );  // Write it like this for easy understanding
console.log(addTwoNum(10,15));      // 25

// If we give curly braces {} then we have to write return keyword
// If curly braces {} are not used then no need to write return keyword


// What if we return a object
const addTwoNumb = (num1, num2) => ({username: "hitesh"})

console.log(addTwoNumb(5, 4));      // { username: 'hitesh' }


// Example: We can use Arrow Functions in -
// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()