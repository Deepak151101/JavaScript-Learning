// IIFE - Immediately Invoked Function Expression

function chai() {
    console.log("DB Connected Normally");
}
chai();
// This function is executed immediately. But what will happen when some other code will run in global scope. And we want the global pollution should not affect this function -> Then we have to use IIFE


// IIFE

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED using IIFE`);
})();

// Unnamed IIFE - By using arrow function
( (name) => {
    console.log(`DB CONNECTED TWO ${name} using IIFE`);
} )('Deepak')