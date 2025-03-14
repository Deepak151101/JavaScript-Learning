// Classes in JS was introduced in ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());        // 123abc
console.log(chai.changeUsername());         // CHAI

// behind the scenes of above task

function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}
User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new User2("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());         // 123abc
console.log(tea.changeUsername());          // TEA