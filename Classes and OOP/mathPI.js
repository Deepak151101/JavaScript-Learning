// Property Descriptor. How to change object property

// Interview Question:
// Write JS code to change value of PI from 3.14 to 4

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");         // It takes 2 parameters - who's property and which property

// console.log(descripter);        // Here value of writable, enumerable & configurable is set to false in core JS this is why we cannot change value of PI

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);        // This cannot be done const cannot be changed


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));     // This is how we get description of a object.

// To change properties 
Object.defineProperty(chai, 'name', {
    // writable: true,
    enumerable: true,
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));         // Now we can see updated properties of the chai object

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {          // This check is used to exclude function from the loop & take only properties entries of object
        console.log(`${key} : ${value}`);
    }
}