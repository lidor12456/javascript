function percentageOfWorld1 (p) {

    p = (p/7900)*100    
    return p
    }

const arrpopulation = (arr) => {
    let newarr = [];
    for (i=0 ; i<arr.length ; i++){
    newarr[i]=percentageOfWorld1(arr[i]);
}
return newarr;
}
console.log(arrlength([800,700,600]));
