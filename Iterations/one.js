// For Loop
// Syntax:
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);

}

// console.log(element);    // Cannot print due to scope issue

// Tables from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 12; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i + '*' + j + ' = ' + i*j );
    }
}
console.log("-------------------------");

// For loop on a Array

let myArray = ["flash", "batman", "superman"];
console.log(myArray.length);    // 3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);   
}

console.log("-------------------------");

// Break and Continue keywords

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`);   
}

// After Break Keyword, we get thrown out of the loop.

console.log("-------------------------");

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
   console.log(`Value of i is ${index}`);
}

// After Continue keyword, we skip that particular iteration of the loop