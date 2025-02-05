// Objects using Constructor. How to create singleton

const tinderUser = new Object();
// or another way to create a object-

const newTinderUser = {};

// console.log(tinderUser);        // {}
// console.log(newTinderUser);     // {}
// Both are empty objects

tinderUser.id = "123abc";
tinderUser.name = "Samay";
tinderUser.isLoggedIn = false;

console.log(tinderUser);        // { id: '123abc', name: 'Samay', isLoggenIn: false }

console.log("-----------------");
// Objects inside object (Nesting)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Deepak",
            lastname: "Javalgi"
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstname);       // Deepak
// Here, question mark ? is optional chaining. It is used in case if fullname does not exists but we have to access values inside the nested objects.

// How to combine objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// We cannot combine as-
// const obj3 = { obj1, obj2 };
// console.log(obj3);      // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// As this gives us a single object and 1 obj is nested in other

// So, to properly combine the objects-
// const obj3 = Object.assign( obj1, obj2, obj4);      // Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }        ########    IMP

// Another way
// const obj3 = Object.assign({}, obj1, obj2, obj4);   // Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// Here Empty paranthesis is a optional parameter. We tell that combine all values and put in this target obj & after any no. of objects we give are source objects.
// If we don't specify Target object, then automatically all objects are copied in first object. (As in obj1 at line #46)    ########   IMP

// Syntax => const returnedTargetObject = Object.assign(target, source);        // There is only one target parameter & there can be multiple source parameter

// Another way- Mainly used
// Spread operator
const obj3 = {...obj1, ...obj2, ...obj4};       // Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

console.log(obj3);
// console.log(typeof obj3);       // object

console.log("========================================================");

// Another syntax to be used when we get values from Database, in this case -> we get array of objects

const users = [
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    },
]

// Here users is a array & inside it we have 3 objects

// To access a value here, we use:
console.log(users[1].email);        // h2@gmail.com

console.log(tinderUser);        // { id: '123abc', name: 'Samay', isLoggenIn: false }


// #########################################################    Very IMPORTANT concept    #########################################################
// Now, how to get all the keys of this object?

console.log(Object.keys(tinderUser));       // [ 'id', 'name', 'isLoggenIn' ]);
// The output datatype is an array,

// Similarly, to get all the values of this object
console.log(Object.values(tinderUser));     // [ '123abc', 'Samay', false ]


// A interesting method of objects
console.log(Object.entries(tinderUser));    //  [ [ 'id', '123abc' ], [ 'name', 'Samay' ], [ 'isLoggenIn', false ] ]

// Here every key-value pair is converted into each separate array - 1st value is it's key & 2nd value is its value... For Eg) [ 'name', 'Samay' ]



// Many a times while looping through a object, the object's value may not exist, then in that case it might crash
// So, to avoid this case, we can manually ask whether the value exists

console.log(tinderUser.hasOwnProperty('name'));       // true
console.log(tinderUser.hasOwnProperty('email'));       // false

// So, thats how we check if value exists or not