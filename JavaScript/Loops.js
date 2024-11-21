// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// console.log(map);

// for (const [key, value] of map) {   //used to iterate the maps
//     // console.log(key, ':-', value); 
// }

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) { //object are not iterable by for of
//     console.log(key, ':-', value);
    
// }
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     //console.log(programming[key]);
// }

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) { //for in also run in map
    console.log(key);
}

// const coding = ["js", "ruby", "java", "python", "cpp"]

// // coding.forEach( function (val){
// //     console.log(val);
// // } )

// // coding.forEach( (item) => {
// //     console.log(item);
// // } )



// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach( (item) => {
    
//     console.log(item.languageName);
// } )