// let a = "red"; //swatch values of variables
// let b = "blue";
// let c = a; // set a new variable with de original value of a
// a = b;
// b = c;
// console.log(a);
// console.log(b);

//Ejericio 2 maximun of 2 numbers
// let number = maxi(5, 10);
// console.log(number);

// function maxi(a, b) {
// 	return a > b ? a : b;
// }

// FizzBuzz
// const ouput = fizzBuzz(7);

// console.log(ouput);
// function fizzBuzz(input) {
// 	if (typeof input !== "number") {
// 		return NaN;
// 	}
// 	if (input % 5 === 0 && input % 3 === 0) {
// 		return "FizzBuzz";
// 	} else if (input % 3 === 0) {
// 		return "Fizz";
// 	} else if (input % 5 === 0) {
// 		return "Buzz";
// 	}
// 	return input;
// }

// speed limit
// checkSpeed(75);
// function checkSpeed(speed) {
// 	const speedLimit = 70;
// 	const kmPerPoint = 5;
// 	if (speed < speedLimit + kmPerPoint) {
// 		console.log("ok");
// 		return;
// 	}
// 	const points = Math.floor((speed - speedLimit) / kmPerPoint);
// 	if (points >= 12) {
// 		console.log("License suspended");
// 	} else {
// 		console.log("Points", points);
// 	}
// }

//Even ODD
// showNumbers(10);
// function showNumbers(limit) {
// 	for (i = 0; i <= limit; i++) {
// 		const message = i % 2 === 0 ? "EVEN" : "ODD";
// 		console.log(i, message);
// 	}
// }

// Show properties
const movie = {
	title: "mamma mia ",
	releaseYear: 2008,
	director: "Phillida Loyd",
	rating: 4.7,
};

function showMovie(movie) {
	for (let property in movie) {
		if (typeof movie[property] === "string")
			console.log(property, movie[property]);
	}
}
showMovie(movie);

//sum of multiples
function sum(limit) {
	let sum = 0;
}
