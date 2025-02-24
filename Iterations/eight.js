// Reduce

// Specially used in shopping cart examples

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0);       // Here 0 is the initial value of Accumulator we provide


// Using Arrow Function
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal);       // 6

// Acc -> Accumulator is initially 0 we give after writing the function
// curr -> Current Value is the value at the current index of the array


// Shopping Cart Example-

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);        // 22996