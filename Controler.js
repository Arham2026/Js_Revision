// If else Statements


// Activity 1 => If-else

let a = 10
if(a>=0){
    console.log("a is Positive");
}
else{
    print("a is negative");
}

//Task 2  check if eligible for voting

let age = ("enter the age :");
if(age>=18){
    console.log("eligible for vote");
}

// switch case

let number = 3;

switch(number) {
case 1 :
    console.log("monday");
    break;

case 2 :
    console.log("Tuesday");
    break;

case 3 :
    console.log("wednesday");
    break;
}

// switch case to assign the grades
let mark = 80;

switch (true) {

    case (mark>=90) :
        console.log("A");
        break;
    
    case (mark >=80) :
        console.log("B");
        break;
}
// Use the switch statement for checking if a variable directly matches specific values.
// Use switch (true) when you need to evaluate conditions or expressions and treat it like an if-else statement. Each case should be a condition that evaluates to true or false.

// Ternary operator
let check = 9;
(check%2==0) ? console.log("even") : console.log("odd");


// leap year checking
let year = 2021;

if(year%4==0){
    
    if(year%100!=0){
        console.log("Leap year");
    }
    else if(year%100 == 0 && year%400==0){
        console.log("Leap year");
    }

}else{
    console.log("Not a Leap Year");
}