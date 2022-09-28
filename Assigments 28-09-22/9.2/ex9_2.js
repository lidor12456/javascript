function percentageOfWorld1 (p) {

    p = (p/7900)*100    
    return p
    }

    const arrpopulation = (arr) => {
        let newarr = [];
        let i = 0;
        let arrayLength = arr.length;
        while(i < arrayLength ) {
           newarr[i]=percentageOfWorld1(arr[i]);
           i++;
        }
    return newarr;
    }
    console.log(arrpopulation([800,700,600]));