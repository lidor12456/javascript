const arr = [1,2,3,4,5];
const maximum = arr.reduce((max, curr) => {
    if (max > curr) {
        return max;
    }
    return curr;
})
console.log(maximum);



const sumOfEven = arr.reduce((acc,num) =>  num % 2 === 0 ? acc + num : acc, 0);
console.log(sumOfEven);



const avg = arr.reduce((acc,num) => acc + num ,0) / arr.length;
console.log(avg);





// let sum2 = 0;
// const avg = arr.reduce((a,b) => {  
//   if (sum2) {
//     sum2 = a + b
    
//   }
//   return sum2/(arr.length);
    
// })
// console.log(sum2);
