// For Each loop:

const coding = ["js", "ruby", "java", "python", "cpp"];

// Iterating using Normal function
coding.forEach( function (val){     // Callback function -> Here the function's parameter is val, it tells us that the code will work for every item in array
    console.log(val);
} );

console.log("---------");

// Iterating using Arrow function
coding.forEach( (item) => {
    console.log(item);
});

console.log("---------");

// Iterating when passed a function

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

console.log("---------");

// Other parameters of a function
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

console.log("---------");

// Very IMP
// Iterating over Array of Objects using for each loop
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
];

myCoding.forEach( (item) => {
    // console.log(item);
    console.log(item.languageName);
    // console.log(item.languageFileName);
} )