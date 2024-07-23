
let arr = [1,2,3,4,5];
console.log(arr.length);
for(let i =0;i<=arr.length;i++){
   
    if(i==0 || i== (arr.length-1)){
        // console.log(arr[i]);
    }
}

// push pop shift unshift 
arr.push(6);

// for(let i =0;i<=arr.length;i++){
   
//     if(i==0 || i== (arr.length-1)){
//         console.log(arr[i]);
//     }
// }

// push adds the last element in the array.

// usage of the pop
arr.pop()

// for(let i =0;i<=arr.length-1;i++){
   
//             console.log(arr[i]);
        
//     }

arr.shift()
for(let i =0;i<=arr.length-1;i++){
   
        // console.log(arr[i]);     
        }

// unshift => adds the element in the beginning of the array.

arr.unshift(1)
for(let i =0;i<=arr.length-1;i++){
   
    // console.log(arr[i]);     
    }

// using the methods map,filter,reduce

const newarr = arr.map(element=>element*2);

for(let i =0;i<=newarr.length-1;i++){
   
    // console.log(newarr[i]);     
    }


// filter
const filt = newarr.filter(number=>number>5)
.forEach(num =>console.log(num))


// reduce used to make an array into one single value.
const answer = newarr.reduce((prevvalue,currentvalue)=>{
    return prevvalue + currentvalue;
})

// console.log(answer);

// two dimensional array.
const twod = [[3,4,5],[1,3,5]];

console.log(twod);





