console.log("I am printing this on console");
/* 
To run a JS using node, I need to be in the folder that contain the file that I want to run. When I do `ls` I need to see the file that i want to run. Then to run it `node <filename.js>`
*/

// Var was used until 2015, try not to use it, instead preder let and const
// let is a variable which can change over time so it does not have to be assigned a value on its declaration, on the other hand const will not change while the code is running so it needs an assigned value right after it's declaration
// Ex.:

let newVariableChangeWithTime;
const newVariableDontChangeWithTime = "I am a constant";
newVariableChangeWithTime = "I am mutable";

console.log(
  "let =",
  newVariableChangeWithTime + ", const =",
  newVariableDontChangeWithTime
);

// Booleans (true & false)
const myBoolean = true;
// Note here, if we uncomment the line below we will get an error runing the js file, cause it's not possible to assign a new value to const

// myBoolean = false;

console.log("my boolean:", myBoolean);

// String
const myString = "I am a string";

console.log("my string:", myString);

// Null
const myNull = null;
console.log("my null:", myNull);

// undefined

let myUndefined;
console.log("my Undefined:", myUndefined);

// Array
const array = ["element 1", 2, false, 7];
console.log("array:", array);

// Object

const obj = {
  a: "a",
  b: "b",
  c: "c",
};

console.log("obj:", obj);

// Number  vs. String

console.log("I'm a number:", 1 + " And I'm a string", "2");

// Number + String = String
const a = 1;
const b = "2";
let sum = a + b;
console.log("I'm a string:", sum);

let realSum = a + parseInt(b);
console.log("I'm a number:", realSum);

// ADD

realSum++;
realSum = realSum + 1;
realSum += 1;

// Add more than 1

realSum = realSum + 4;
realSum += 4;
console.log("Final Add", realSum);

// Subtract

realSum--;
realSum = realSum - 1;
realSum -= 1;

// Subtract more than 1

realSum -= 2;
realSum = realSum - 2;
console.log("Final Subtract", realSum);

// Multiplying

realSum *= 2;
realSum = realSum * 2;

console.log("Final multiplication", realSum);

// Divide

realSum /= 2;
realSum = realSum / 2;
console.log("Final division", realSum);

// Remainder

realSum %= 2;
realSum = realSum % 2;
console.log("Final remainder", realSum);

// Exponentials

realSum **= 2;
realSum = realSum ** 2;
console.log("Final Exponential", realSum);
