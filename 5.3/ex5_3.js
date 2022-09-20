const valid1 = (pass) => {
    if (pass.length > 7) {
console.log('strong');
    }
    else {
        console.log('weak');
  
    }
}
const valid2 = (pass) => {
    console.log(pass.length > 7 ? 'strong':'weak');
 
}
const valid3 = (pass) => {
    console.log(pass.length > 7  && 'strong' || 'weak');
 
}

function checkUppercase(str){
    for (var i=0; i<str.length; i++){
      if (str.charAt(i) == str.charAt(i).toUpperCase() && str.charAt(i).match(/[a-z]/i)){
        return true;
      }
    }
    return false;
};
const valid4 = (pass) => {
    console.log(checkUppercase(pass) && pass.length > 7 ? 'VERY STRONG' : pass.length > 7 ? 'strong' : 'weak')
 
}
