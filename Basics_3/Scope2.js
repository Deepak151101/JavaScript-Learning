// Nested Scopes

function one() {
    const username = "Hitesh";

    function two() {
        const website = "Youtube";
        console.log(username);      // Can run -> Hitesh
    }

    // console.log(website);   // Won't run

    two()
}

one();

// We can understand these kind of examples using Icecream example - A child can take ice cream from his parents. But a parent can't take ice cream from his child.
console.log("--------------------------");
// Another Example

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);    // Can run - because of scope chain rule (Child can take parent's icecream)     --> hitesh youtube
    }
    // console.log(website);        // Won't run - because of scope chain rule (Parent can't take child's icecream)
}

// console.log(username);          // Won't run - because of scope chain rule (Parent can't take child's icecream)


console.log("--------------------------");

// Interesting IMP Point

// Two ways of writing functions
// First - Basic function

console.log(`Before function declaration ${addone(16)}`);        // 17
function addone(num){
    return num + 1;
}
console.log(`After function declaration ${addone(16)}`);     // 17

console.log("--------------------------");

// Second - Called as a Expression or a function

// console.log(`Before function declaration ${addTwo(5)}`);    // Won't run because of hoisting - Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2;
}
console.log(`After function declaration ${addTwo(5)}`);     // 7 -> This will run normally