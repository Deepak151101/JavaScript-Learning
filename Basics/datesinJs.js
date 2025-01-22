// Dates

let myDate = new Date()
console.log(myDate); // 2025-01-22T17:27:50.583Z

console.log(myDate.toString()); // Wed Jan 22 2025 17:29:06 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()); // Wed Jan 22 2025

console.log(myDate.toISOString()); // 2025-01-22T17:31:52.421Z

console.log(myDate.toJSON()); // 2025-01-22T17:32:32.646Z

console.log(myDate.toLocaleString()); // 1/22/2025, 5:33:28 PM

// Type of date-
console.log(typeof myDate); // Object

// To add a specific date
let myCreatedDate = new Date(2023, 0, 23); // 0 is written here bcz, months in JavaScript are starting from 0
console.log(myCreatedDate); // 2023-01-23T00:00:00.000Z
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate2.toLocaleString()); // 1/23/2023, 5:03:00 AM

let myCreatedDate3 = new Date("2024-01-14");
console.log(myCreatedDate3.toLocaleString()); // 1/14/2024, 12:00:00 AM

let myCreatedDate4 = new Date("09-17-2025");
console.log(myCreatedDate4.toLocaleString()); // 9/17/2025, 12:00:00 AM

// Timestamps:

let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1737568599242. This is miliseconds value at this time from 1st January 1970 bcz, in JS dates are set from according to this date

// To get timestamp of a given date -
console.log(myCreatedDate.getTime()); // 1674432000000

console.log('--------------------------------------------------------------------------------------------------------------------');

// To get date in seconds-
console.log(Math.floor(Date.now()/1000)); // 1737568895. We do floor as without floor we will get value in decimals

let newDate = new Date()
console.log(newDate); // 2025-01-22T18:06:49.317Z
console.log(newDate.getMonth() + 1); // 1 ... (January)
console.log(newDate.getDay()); // 3 ... (Wednesday)

// Many questions are asked in interviews or coding questions where we write it as example-
// `${newDate.getDay()} and the time `

// Another Way to write date

newDate.toLocaleString('default', {
    weekday: "long",
    
})