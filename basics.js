//VARIABLES
//primitive types
let name = "manuela"; //string
let age = "20 "; //number
let isAproved = false; // boolean
let selectedColor = null; // when we want to clear the value of a variable
// cannot be reserved keyword
// meaningful
// cannot start with a number (1name)

//CONSTANTS
const interestRate = 0.3;
//cannot reasigned the value of const

//Reference Types
//OBJECT
let person = {
	name: "miguel", // properties of the object
	age: 22,
};
// access to de properties
person.name = "sebastian";
person["name"] = "Mary";

//ARRAY
let colors = ["red", "blue", 1];
console.log(colors[0]); //index of the object
typeof colors; // object

//FUNCTIONS
function greet(name, lastName) {
	// parameter
	console.log("Hello" + name + lastName);
}
greet("Sara", "Borda"); //Argument actual value

function square(number) {
	return number * number;
}
console.log(square(4));

//OPERATORS
//increment
let number = 12;
console.log(number++); //12
console.log(++number); // 13
//decrement

//assigment
number += 5; //17
number *= 3; //36

//comparison
let x = 2;
console.log(x > 0); // true
console.log(x >= 3); //false
console.log(x === 3); // false
console.log(x != 3); //true

//equality
console.log(1 === 1); // FALSE same type and value
console.log("1" === 1);
console.log("1" == 1); //TRUE convert the  right value to a string, check only values

//ternary operator
let points = 110;
let type = points > 100 ? "gold" : "silver"; // ? if the condition is true : false do this

//logical operators
//AND && true if both are TRUE
console.log(true && false); // false
//OR if one is true
console.log(true || false); // true
//NOT give the oposite result
let eligibleForLoan = true;
let applicationRefused = !eligibleForLoan; // false
//Falsy
// undefined
// null
// 0
// false
// ''
// NaN
false || "mosh"; //'mosh'
false || 1; // 1
false || 1 || 2; // 1 as soon we find a truthy operator is returned
// we can create default values with ||

// If and else
let hour = 12;
if (hour >= 6 && hour < 12) {
	console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
	console.log("Good afernoon");
} else {
	console.log("Good Night");
}

//Switch and case
// compare the value of a variable against other values, but is a better practice to use if else

// LOOPS
//for
// initial expresion   condition   increment expresion
for (let i = 0; i < 5; i++) {
	if (i % 2 !== 0) console.log("impar" + i); // if the % of i /2 is not 0 it´s an odd number
}

//while
let i = 0; // global variable
while (i <= 5) {
	if (i % 2 !== 0) console.log("impar" + i);
	i++;
}

// Do - while -----> condition evaluated at end so is executed at least 1 time
let a = 9;
do {
	if (i % 2 !== 0) console.log("impar" + i);
	i++;
} while (i <= 5);

// for in ----> properties of an object
const person = {
	name: "Manuela",
	age: 20,
	profession: "engineer",
};
for (let key in person) {
	console.log(key, person[key]); // [] notation when we dont know the propery we want to access
}

//for of ---> elements os an array
const colorss = ["red", "blue", "yellow"];
for (let color of colorss) console.log(color);
