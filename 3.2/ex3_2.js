// From function declarations to explicit and implicit

function welcome() {
let welcome = 'Welcome to Appleseeds Bootcamp!';
return welcome;
}
const welcome = () => 'Welcome to Appleseeds Bootcamp!';




function power(a) {
let myNumber = a;
let result = Math.pow(myNumber, 2);
return result;
}

const power = (a) => {
    return Math.pow(a, 2); 
}




// From function expressions to IIFE functions.
const squareRoott = a => Math.sqrt(a);
(function (a) { 
    Math.sqrt(a);
})()



const randomNumberss = (a, b) => Math.random() * (a - b) +
b;
(function (a,b) { 
    return Math.random() * (a - b) +
    b;
})()




function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
    }
    (function () { 
        return 'Welcome to Appleseeds Bootcamp!';
    })()








    // From function expressions to IIFE functions.
    const squareRoot = a => Math.sqrt(a);

    (function (a) { 
        return  Math.sqrt(a);
    })()








    const randomNumbers = (a, b) => Math.random() * (a - b) +
    b;