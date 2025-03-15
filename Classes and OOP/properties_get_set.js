// Another Approach for getter and setter - using properties: Functional based Syntax

function User(email, password){
    this._email = email;
    this._password = password;

    // Getter, Setter for Email
    Object.defineProperty(this, 'email', {          // First pass context & then pass the property you want to overwrite & then define the properties 
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value;
        }
    })

    // Getter, Setter for Password
    Object.defineProperty(this, 'password', {       // First pass context & then pass the property you want to overwrite
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value;
        }
    })
}

const chai = new User("chai@chai.com", "chai");

console.log(chai.email);        // CHAI@CHAI.COM
console.log(chai.password);     // CHAI