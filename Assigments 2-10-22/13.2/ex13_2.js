const foods = ["falafel", "sabich", "hummus",
"pizza with extra pineapple"];

// a1
// console.log(foods.sort());


// a2
// console.log(foods.sort(function (a, b) {
//     if (a > b) {
//         return -1;
//     }
//     if (b > a) {
//         return 1;
//     }
//     return 0;
// }));

const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
    ];
    const dd = foodsWithUpperCase.map(s => s.toLowerCase() );
   

    // b1
    // console.log(dd.sort());
    
    // b2
    // console.log(dd.sort((a,b) => {
    // if (a > b) {
    //     return -1;
    // }
    // if (b > a) {
    //     return 1;
    // }
    // return 0;

    // }));

    // c
    // const arr = ["apple",
    // "supercalifragilisticexpialidocious",
    // "hi", "zoo"]

    // arr.sort(function(a, b){
    //     // ASC  -> a.length - b.length
    //     // DESC -> b.length - a.length
    //     return b.length - a.length;
    //   });
    //   console.log(arr);