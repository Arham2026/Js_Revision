// template literals
let name = 'arham shajahan'
let year = 29

console.log(`My name is ${name} and I am ${year} yrs old`);

console.log(`my name is wlfjoiwfwolfaolfnadfhsofoffjnffn  
nothing but nonsense`);

// destructing array get the title and the author of a book from an object


// destructuring the objects
const books = {
    Title : "ReadyToDie",
    Author : "Arham shajahan",
}

const {Title,Author} = books;

// console.log(`${Title},${Author}`);

// spread and the rest operator

let arr = [1,2,4,5,];

let arr2 = [...arr,999,89];
// console.log(arr);
// console.log(arr2);

// using the rest operator in a function

function spreadOperator(...numbers){
    let sum = 0;
    for (let num of numbers){
        sum+=num;
    }

    return sum;
}

console.log(spreadOperator(1,4,5,6,7,7,7,7,7,));


// Default Parameter

function Parameter(a,b=1){
   const sum = a +b;
    return sum;
}

console.log(Parameter(5,10));
console.log(Parameter(5));

// Enhanced Object Literals.

// creating an object with methods and the properties

let person = {
    name : "arham",
    age  : 45,
    getage(){
        return this.age;
    },
    result(){
        console.log(`This is ${this.name} and my age is ${this.age}`);
    }
}


console.log( person.getage());

// computed property
let person2 = {
    name : "arham",
    [`${name} age`]  : 45,
    getage(){
        return this.age;
    },
    result(){
        console.log(`This is ${this.name} and my age is ${this.age}`);
    }
}
console.log(person2);



