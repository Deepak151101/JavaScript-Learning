// 2 Ways to declare objects - Literal & Constructor

// Singleton - This is when we declare object using constructor

// Object declaration methods

// 1. Constructor
// Object.create


const mySym = Symbol("Key1");


// 2.  Literal
const JsUser = {
    name: "Deepak",
    "full name": "Deepak Javalgi",      // We cannot access this value using . operator (console.log(JsUser.full name);). This cannot be done
    age: 23,
    [mySym]: "Key1",
    location: "Pune",
    email: "deepak@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// How to access objects-
// Old Way
console.log(JsUser.name);       // Deepak
// New Way
console.log(JsUser["name"]);       // Deepak

// So, to print full name, we have to use-
console.log(JsUser["full name"]);       // Deepak Javalgi

// console.log(JsUser.full name);       // This is not allowed in JS


////////////////// Interview Question:
// Q. Create a symbol as a object key and print object key using symbol

// const mySym = Symbol("Key1");        // Cannot access 'mySym' before initialization

console.log(JsUser.mySym);              // Key1     // undefined
// But lets check the typeof mySym here
console.log(typeof JsUser.mySym);       // string   // undefined

// But we want typeof as object, so we change key in object itself-
console.log(JsUser[mySym]);             // Key1
console.log(typeof JsUser[mySym]);      // string

console.log("----------");

// How to change object values

JsUser.email = "imdeepak@chatgpt.com";
// To not let anyone change a value, you can use freeze
// Object.freeze(JsUser)
JsUser.email = "imdeepak@microsoft.com"     // This does not get updated bcz of Freeze
console.log(JsUser);

console.log("----------");

// Functions in Objects
JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting);           // [Function (anonymous)]       // This is not function execution, it is just function reference
console.log(JsUser.greeting());         // Hello JS user

console.log("----------");
console.log("----------");

// When we have to reference to the same object we use 'this' keyword
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);     // String interpolation is used
}

console.log(JsUser.greetingTwo());      // Hello JS user, Deepak

// One undefined is extra in console log due to a concept we'll be studing later