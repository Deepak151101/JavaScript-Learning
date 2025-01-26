const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// 1. PUSH
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);      // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// Here above there are only 4 elements. 4th element has further more 3 elements

// console.log(marvel_heros[3][1]);        // flash

// 2. CONCAT
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);           // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// 3. Spread operator - If you drop a glass cup, it will fall and spread (Analogy)
const all_new_heroes = [...marvel_heros, ...dc_heros];
console.log(all_new_heroes);    // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// Both the arrays are spread as a single array

// 4. Flat array - Returns a new array with all the sub array elements concatenated into it recursively up to the specified depth
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  // In paranthesis, we provide the depth upto which we want to flatten the array, we can also write Infinity
console.log(real_another_array);        // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log("----------------");

console.log(Array.isArray("Hitesh"))    // false    Here, we check if the string we passed "Hitesh" is a array. So No.
// Converting into array
console.log(Array.from("Hitesh"))       // [ 'H', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({name: "hitesh"})) // []         Interesting Case. Imp for interviews. Empty array is returned.
// In JS we give a string or keys telling that use these keys or strings to make an array. But, if we pass a object to make a array. It will give a empty array. []


// To convert multiple variables into a single array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));      // [ 100, 200, 300 ]