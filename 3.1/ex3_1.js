1. function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
    }
    const welcome = () => 'Welcome to Appleseeds Bootcamp!';
   

2.    function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
    }

    const power = (a) => Math.pow(a, 2);

3.    function add(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
    }

    const add = (a,b=5) => a+b;
    // From function expressions to function declarations

   1. const hello = () => "Hello!";

    function hello() {
        return "Hello!"
    }


   2. const squareRoot = a => Math.sqrt(a);

    function squareRoot(a) {
        return Math.sqrt(a);
    }

    3. const randomNumbers = (a, b) => Math.random() * (a - b) +
    b;

    function randomNumbers(a,b) {
        return Math.random() * (a - b) +
        b;
    }