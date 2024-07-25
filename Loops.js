// writing a program to print the 5th table
for(let i=1;i<=10;i++){
    // console.log(i*5,'\n');

    console.log(`${i} * 5 = ${i*5}\n`);

}

// sum of numbers from 1 to 10 using the while loop
let i =0;
let sum = 0;
while(i<=10){
  sum +=i
  i++;
}
console.log(sum);

// print numbers reverse of 1-10
// do while loop

// printing the star.

// do while loop


// continue statement

for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    else{
        console.log(i);
    }
}

// break statement

for(let i=1;i<=10;i++){
    if(i==7){
        break;
    }
    else{
        console.log(i);
    }
}
