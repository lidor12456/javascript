// var x = 10;
// console.log(x); //10
// if (true) {
// var x = 20;
// console.log(x); //20
// }
// console.log(x); //20




var x = 10;
console.log(x); //10
if (true) {
(function() {
var x = 20;
console.log(x); //20
})();
}
console.log(x); //10



var x = 10;
console.log(x); //10
function test(){
var x = 20;
console.log(x); //20
if (x > 10) {
let x = 30;
console.log(x); //30
}
console.log(x); //20
}
test();
console.log(x); //20


