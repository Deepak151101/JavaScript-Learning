// Iterating over an object

// For In Loop:

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
console.log("---------");

// Can we use For in Loop for Arrays too?

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    // console.log(key);   // 0 1 2 3 4
    console.log(programming[key]);      // js rb py java cpp
}
console.log("---------");

// Map is not iterable in for in loop

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);       // No Output -> Map is not iterable using for in loop
}