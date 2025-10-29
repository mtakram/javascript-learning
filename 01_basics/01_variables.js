var one = 'hello'
var one = 'world'
one = '!'

/*
console.log(one);
*/

let two = 'M'
// let two = 'Tariq' Redeclare is not allowed
two = 'Tariq' // Reassigning is allowed


const myName = "Tariq Akram"
// const myName = "Tariq Akram" Redeclare is not allowed
// myName = "Tariq Akram" Reassigning is not allowed

/*
console.log(myName)
*/

/*
if(true) {
    var a = 10
    let b = 20
    let c = 30
}

console.log(a);
console.log(b);
console.log(c);
*/

// Only a will be accisible because var is a function scoped type and it will be available for whole file.

/*
function test() {
    if(true) {
        var x = 10
        let y = 20
        let z = 30
    }

    console.log(x);
}
test()
*/

// console.log(x) here x will not be accissible because it is now out of function 

console.log(a) // undefined
var a = 10;


console.log(b) // ReferenceError (TDZ)
let b = 20

console.log(c) // ReferenceError (TDZ)
const c = 30;

// Prefer not to use var because of block and function scope