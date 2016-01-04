'use strict'

function log(args) {
	console.log(args);
}


/* ----- Compliments ----- */

//Passed by value
var a = 4;
function add(value) {
	return value + 5;
}
log(add(a)); //9
log(a); //4

//Passed by reference: first try
var names =  ['Bob', 'Brenda', 'Ishmael', 'Earl'];
var compliment = " is great!";

// function complementGiver(arr, str) {
// 	for (var i = 0; i < arr.length; i++) {
// 		arr[i] = arr[i] + str;
// 	}
// 	return arr;
// }
// log(complementGiver(names, compliment)); //["Bob is great!", "Brenda is great!", "Ishmael is great!", "Earl is great!"]
// log(names); //["Bob is great!", "Brenda is great!", "Ishmael is great!", "Earl is great!"]

//Passed by reference: second try
function complementGiver(arr, str) {
	var newArray = [];
	for (var i = 0; i < arr.length; i++) {
		newArray.push(arr[i] + str);
	}
	return newArray;
}
log(complementGiver(names, compliment)); //
log(names); //



/* ----- Counter----- */
var count = 0;

function counter() {
	return count++;
}
log(counter());
log(counter());
log(counter());
