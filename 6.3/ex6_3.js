const arrlength = (arr) => {
    let newarr = [];
    for (i=0 ; i<arr.length ; i++){
    newarr[i]=arr[i].length;
}
return newarr;
}
console.log(arrlength(['asds',"dfdfsdff","21"]));
