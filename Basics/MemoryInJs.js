// Lets create a string variable (primitive datatype)
let myName = "Deepak";
let myAnotherName = myName;
myAnotherName = "Immortal";

console.log(myName);
console.log(myAnotherName); 
// Here, value of the variable is changed as we use stack memory in case of primitive dataTypes. So we get copy of the same variable.


// Lets create a object (Non-Primitive datatype)
let userOne = {
    email: "user@google.com",
    upiId: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "deepak@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
// Here, value of the variable is same as we use heap memory in case of non-primitive dataTypes. So we use refernce to the same variable