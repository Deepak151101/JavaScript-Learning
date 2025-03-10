// 1
//  Creating a promise
const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is compelete');
        resolve();      // This connects with .then part
    }, 1000)
})

// Now as we have created the promise now we have to consume the promise

// .then is directly related with resolve
promiseOne.then(function () {
    console.log("Promise consumed");
})


// 2 - Creating and consuming a promise without using extra variable
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
})


// 3 - Passing parameters in resolve

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user);
})


// 4

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "hitesh", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    }).then((username) => {         // Chaining from above .this (Value from above .then is returned is taken for further use here)
        console.log(username);
    }).catch(function (error) {
        console.log(error);
    }).finally(() => console.log("The promise is either resolved or rejected"));    // Finally is always executed


// 5 - Async Await

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive      // await waits for the promise to be resolved
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();       // Here we are calling the function consumePromiseFive() which is an async function


// 6 - Fetch API

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

// Same but using .then and .catch

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {           // Here data is the response.json() returned from above .then  => (Thenable - Chaining of .then)
        console.log(data);
    })
    .catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.