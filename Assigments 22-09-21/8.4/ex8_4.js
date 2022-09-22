const arr = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
const obj = {
key : arr[0].length
}

let arr2 = arr.join('');
arr2 = arr2.toLowerCase();
arr2 = arr2.replace(/ /g,'')

function letterCount(string) {
  var stringObject = {};
  for (var i = 0; i < string.length; i++) {
    stringObject[string[i]] = ((stringObject[string[i]]) ? stringObject[string[i]] : 0) + 1;
  }
  return stringObject;
}

console.log(letterCount(arr2));

