// conactenate the two strings

function concat(str,str2){
    // console.log(str+str2);
}

let str = "arh";
let str2 = "am";
concat(str,str2);

// write an arrow function to check a string contains a specific character and return a boolean value.


const string = "arham";
const char = "h";
console.log(typeof(string));
const func = ()=>{
    for(let i=0;i<=string.length;i++){
        if(string[i]==char){
            return true;
        }

    }
    return false;
}

const ans = func(string,char)
console.log(ans);


// Using the parameters and giving them the default values.

const parameters = (name,age=18)=>{
        console.log(`Welcome ${name} a ${age} old gal`);
}

parameters("priya",20);

// Higher Order Functions
const higherOrder = (repeat,number)=>{
    for (let index = 0; index < number; index++) {
        repeat(number);       
    }
}
const repeat = ()=>{
    // console.log("call from the higher Order");
}

higherOrder(repeat,5);

// two functions in the argument and a value

const twofunct = (add,sub,value1)=>{
    const result1 = add(value1);
    const result2 = sub(result1);

    return result2;
}
let sum = 0;
const add = (value1)=>{
     sum = value1;
     return sum;
}
let sub1  = 1;

const sub = (result1)=>{
    sub1 +=result1 
    return sub1
}

const answer = twofunct(add,sub,8);
console.log(answer);





