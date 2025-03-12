const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);       // hitesh
        console.log(this);          // Gives us Current Context -> Here user object is given as Current Context
    }
}

// console.log(user.username)          // hitesh
console.log(user.getUserDetails());
console.log(this);              // {} -> Global Context. But won't be empty in a browser. It is empty only in Node environment

console.log("--------------");

// Constuctor Function -> Gives us new instance everytime

function User(username, loginCount, isLoggedIn){
    this.username = username;       // LHS value is our variable & RHS value is our parameter passed while calling the function.
    this.loginCount = loginCount;   
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;            // This is optional
}

const userOne = new User("hitesh", 12, true);        // If we do not use `new` keyword then only 1 object is created and further objects created are overwritten. So by writing new keyword we say that everytime give us a new instance
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne.constructor);                   // [Function: User] -> It is nothing but refernce about self
console.log(userOne);
console.log(userTwo);