const arr1 = [1,2,3];

const Dubeled = (arr) => {
    const arr2 = arr.map((e)=> {return e;});
    return arr2;
}
// console.log(Dubeled(arr1));

const even = (arr) => {
    const arr2 = arr.map((e)=> {
        if (e%2==0) {
            return e;
        }
    });
    return arr2;
}
// console.log(even(arr1));
const showFirstAndLast = (arr) => {
    const arr3 =[];
    arr3[0] = arr.pop();
    arr3[0] = arr3[0].toString();
    arr3[1] = arr.shift()
    arr3[1] = arr3[1].toString();
    return arr3;
}
console.log(showFirstAndLast(arr1));