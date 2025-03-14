class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// Teacher Class is child of user class 
class Teacher extends User{
    constructor(username, email, password){
        super(username);            // super keyword is alternative to using call keyword
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");

chai.logMe();       // USERNAME is chai
chai.addCourse();   // A new course was added by chai


const masalaChai = new User("masalaChai");
masalaChai.logMe();     // USERNAME is masalaChai

console.log(chai === masalaChai);       // false. Both are different objects of different classes

// To check in true or false whether chai object is an instance of User Class
console.log(chai instanceof Teacher);      // true
console.log(chai instanceof User);      // true