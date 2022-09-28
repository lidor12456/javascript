const book = {
    name : "bla",
    autor : "me",
    publish : "1992"
};
function swapKeysAndValues(obj) {
    // 👇️ [['color', 'blue'], ['fruit', 'apple']]
    const swapped = Object.entries(obj).map(
      ([key, value]) => [value, key]
    );
  
    return Object.fromEntries(swapped);
  }
  
  // 👇️ {color: 'blue', fruit: 'apple'}
  console.log(
    swapKeysAndValues(book)
  );
  






// const flip = {};

// for (let k of Object.keys(book))  {
// for (let v of Object.values(book)){
//     Object.keys(book).map((key) => {
//        console.log();
// }
// }
// }
// console.log(book);