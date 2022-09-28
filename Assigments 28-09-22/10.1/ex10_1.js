// Q1 :
function isStringg (char1,myCallBack) {
    if (typeof char1==='string') {
        myCallBack(char1);
    }
    else {
        console.log('not a string');
     
    }
}
function myCallBack (string) {
    console.log(string);
}
isStringg('5',myCallBack);

// Q2 :

function isStringg (string,myCallBack) {
    string = string.charAt(0).toUpperCase() + string.slice(1);
    myCallBack(string);
}
function myCallBack (stringg) {
  
     stringg = stringg.replace(/\s+/g, '-');
    console.log(stringg);
}
isStringg("bla bla bla",myCallBack);