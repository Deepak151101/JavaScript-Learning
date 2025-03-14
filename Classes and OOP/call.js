function SetUsername(username) {
    //complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password) {
    SetUsername.call(this, username);               // In JS we have to explicitely call the function to set the username. If we don't use call keyword the function is executed but the username is not set. As the execution context of setUsername function clears as soon as the function is finished executing, so the username was set but as the function execution is finished it's execution context also clears and thus we don't get our username.
    // So to hold the reference of this we use call keyword. We hold it in this
    // When we call using call keyword first parameter is this (but it is optional)
    
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);