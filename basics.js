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
