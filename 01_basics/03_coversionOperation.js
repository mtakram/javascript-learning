let value = 33

let stringValue = String(value)

console.log(stringValue)
console.log(typeof stringValue)


let anotherValue = "55"
let numberAnothervalue = Number(anotherValue)

console.log(numberAnothervalue)
console.log(typeof numberAnothervalue);

let thirdValue = 0
let booleanThirdValue = Boolean(thirdValue)

console.log(booleanThirdValue)
console.log(typeof booleanThirdValue);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

/***************************** Operations  ************************/

let a = 3
let b = 4
let c = a + b

console.log(c)

console.log(1 + "5")
// This will return 15 instead of 6 because it will consider both as string

console.log(2 + 2 + "2")
// This will return 42 instead of 6 


/**
 * Prefix
 * The variable is updated first, then the new value is returned.
 * 
 * let x = 5;
 * let y = ++x
 * 
 * console.log(x) // 6
 * console.log(y) // 6
 */


/**
 * Postfix
 * The current value is returned first, then the variable is updated.
 * 
 * let x = 5;
 * let y = x++
 * 
 * console.log(x) // 6
 * console.log(y) // 5
 */