// Prototype

// Write a function that gives us true length value of a string

let myName = "Deepak        ";

console.log(myName.length);     // 14 (Including spaces)

// Now to get true length we may use this
console.log(myName.trim().length);      // 6
// This solution is absolutely correct, but how to do it without using inbuilt functions

// We want to create a method that on writing-
console.log(myName.trueLength);
// We must get the true length of the string

// For understanding this task we require some knowledge-

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport      // __proto__ is used to inherit the properties of another object. It means we are adding a prototype property
}

Teacher.__proto__ = User;           // Old approach

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
// This is how yoy inherit properties between 2 different objects
// We gave all Objects the super power of setting prototype

console.log("---------------");

// So now we are back to our original task of making trueLength method

let anotherUsername = "ChaiAurCode     ";

// Here we give all strings the super power to use prototype

String.prototype.trueLength = function(){       // We have injected a new method trueLength to all strings
    console.log(`${this}`);         // ChaiAurCode  ,   DJ  ,   iceTea
    console.log(`True length is: ${this.trim().length}`);       // True length is: 11   ,   2   ,   6
}

anotherUsername.trueLength();

// Directly using this method
"DJ".trueLength();          // 2
"iceTea".trueLength();      // 6