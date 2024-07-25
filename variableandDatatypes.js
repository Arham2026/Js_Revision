// Day 01 of the Course

// Activity 1 : Variable Declaration

var number = 1;
console.log(number);

let name = "arham";
console.log(name);

// Declaring the var and let in the local context

function Declaration(){
    var number2 = 5;
    let name = "shajahan";
}

// console.log(number2);
// console.log(name);
// Getting the Error Number 2 is not defined

// Because It is declared inside the function 

// On the basis of scope var is function and the let is block

// Now let's go for the const

const Movie = true;
console.log(Movie);

// we can modify but we cannot redeclare or reassign to the values.

// using the typeof() method to every datatype present.

let str = "hi";
let num = 2;
let bool = true;
let arr = [1,2,"hi"];

let object = {
    name : str,
    class:num
}

console.log(typeof(str),'\n');
console.log(typeof(num),'\n');
console.log(typeof(bool),'\n');
console.log(typeof(arr),'\n');
console.log(typeof(object));

console.log(object.prototype);
console.log(Array.prototype);

