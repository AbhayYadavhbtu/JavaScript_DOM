// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)   gives output as 23 jan 2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)   gives output as 23 jan 2023 and 5:03 AM
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()  //give current timestamp from 1970 to till now in milisecond

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); convert timestamp into second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);  //get month of the date
console.log(newDate.getDay());


