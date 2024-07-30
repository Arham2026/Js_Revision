let object1 = {
    Title: "ReadyToDie",
    Author : "arham",
    price : 45,
    no_of_pages : 99,
    method: function (){
        //  return [object1.Title,object1.Author];

        //there are different methods to return the details from the method
        
        return `${this.Title} , ${this.Author}`
        // arrow function doesn't have their own 'this'(lexiacal scope)
    }
};

// console.log(object1);
// accessing the values in the object

// console.log(object1.Title);
// console.log(object1.Author);

// adding the method to the object
console.log( object1.method());

//updating the method insode the object


let object2 = {
    Title: "ReadyToDie",
    Author : "arham",
    price : 45,
    no_of_pages : 99,
    year: 2019,
    method: function (year){

        this.year = year
        return `${this.year}`
    }
};
// object2.method(2024);
// console.log(object2.year);

// nested object

let object3 = {
    Title: "ReadyToDie",
    Author : "arham",
    price : '$45',
    no_of_pages : 99,
    year: 2019,
    otherDetails : {
        wife : "women",
        sex : "male",

    }
    }
// console.log(object3.otherDetails.sex);

// this keyword

// for ...in loop

for(key in object3){
    // console.log(object3[key]);

}
// Object.keys() requires the object as an argument
console.log(Object.keys(object3));
console.log(Object.values(object3));
