const avg = (a,b,c) => (a+b+c)/3 ;
const win = (a,b,c,d,e,f) => {
if (avg(a,b,c) > avg(d,e,f)) {
    console.log('a team win' +' ' + avg(a,b,c));
}
else if (avg(a,b,c) == avg(d,e,f)) {
    console.log('draw');
}
else {
    console.log('b team win'+ ' '+ avg(d,e,f));
}
}
win(1,2,3,3,2,1);