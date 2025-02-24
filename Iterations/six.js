// Filter in JS

// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach( (item) => {
//     console.log(item);
//     // return item;
// } );

// console.log(values);     // Undefined. -> Nothing is returned here

// For Each Loop doesn't return anything        ****************  IMP  *******************

// But in JS, not everytime we need to print the whole array, sometimes we just want to perform any operation on the array or check a condition on array, that time we cannot use this loop as it is
// So to do it we have to use Filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter also takes a Callback function
const newNums = myNums.filter((num) => {
    return num > 4;     // We use return keyword when we start scope {...}
});

console.log(newNums);       // [ 5, 6, 7, 8, 9, 10 ]


// Same Example using For Each:

const myNum2 = [];

myNums.forEach((val) => {
    if (val > 7) {
        myNum2.push(val);   // We are checking condition in myNums array and then if true then pushing into new myNums2 empty array
    }
});

console.log(myNum2);        // [ 8, 9, 10 ]


// More about Filters:

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// let userBooks = books.filter( (bk) => bk.genre === 'History' );

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);