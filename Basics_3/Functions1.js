function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName -> This is function reference
// sayMyName(); // -> This is function call (For execution)

// Function to add two numbers-

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// } --> If we give a console statement in a functions then it would just give us result in console log but the function doesn’t returns anything.

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2;
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);    // Result:  8

function loginUserMsg(username = "Sam") {

    if(!username) {     // This will run if no Argument is passed while calling the function
        console.log("Please Enter a username");
        return;
    }

    return `${username} just logged in`;
}
console.log(loginUserMsg("Deepak"));    // Deepak just logged in
console.log(loginUserMsg());    // Sam just logged in

// Example - Function for a shopping cart example where we do not know how many parameters (items) user will buy

// Here we use rest operator. It is denoted by (...)

function calcuateCartPrice(val1, val2, ...num1) {
    return num1;
}

console.log(calcuateCartPrice(100, 200, 300, 400, 500));        // [ 300, 400, 500 ] -> 100 is taken in val1 & 200 is taken in val2

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// Passing object in function
handleObject(user);     // Username is hitesh and price is 199
// or
handleObject({          // // Username is Deepak and price is 59
    username: "Deepak",
    price: 59
});     

// Passing array in function
// Write a function that accepts a array and returns 2nd element

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));     // 400
console.log(returnSecondValue(['a', 'b', 'c', 'z']));       // b