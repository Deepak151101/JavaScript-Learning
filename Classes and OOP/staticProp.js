class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }

    // Now the task is to create a unique ID on creating a new username

    static createID() {
        return '123';
    }

    // Now many a times we do not always want ever object instantiated from User class to also access createID() function -> So to do this just add Static keyword in front of the function
}

const hitesh = new User("Hitesh");
// console.log(hitesh.createID());     // 123

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");
iphone.logMe();         // Username is iphone

// console.log(iphone.createId());      // Won't run because -> Using static keyword in front of a function even the child of the class cannot access that function