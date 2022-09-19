const leap = function (year) {
if (parseInt(year)%4==0){
}
    if (parseInt(year)%100==0){
    }
        if (parseInt(year)%400==0) {
            return "leap"; 
    }
      

else {
    return "not leap";
}
}


console.log(leap(2100));