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