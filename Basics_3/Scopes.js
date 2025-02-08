// let a = 10;      -> Local Scope
// const b = 20;    -> Local Scope
// var c = 30;      -> Global scope

// Lets print
// console.log(a);     // 10
// console.log(b);     // 20
// console.log(c);     // 30

// This was easily printed but now let's try printing in a scoped environment

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);     // 10
// console.log(b);     // 20
// console.log(c);     // 30   -> Here only c value is printed. Bcz var uses global scope