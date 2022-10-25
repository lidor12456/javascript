// const makeDogPromise = (num) => {
// 	return new Promise((resolve, reject) => {
		
// 			if (num > 10) {
// 				resolve();
// 			}
// 			else {
// 				reject();
// 			}
// 		});
// 	};

// makeDogPromise(11)
// 	.then(() => {
// 		console.log('grather than 10');
// 	})
// 	.catch(() => {
// 		console.log('smaller than 10');
// 	});
function sortWords (arr) {
	return arr.sort();
				 
	}
function onlyNumbers(arr) {
	return arr.every(element => {
	  return typeof element === 'string';
	});
  }
 

function makeAllCaps (arr) {
	return new Promise((resolve, reject) => {
		if (onlyNumbers(arr)) {
			arr = arr.map ((e)=> {
				return e.toUpperCase();	  
			})
				sortWords(arr);

            resolve({status :200, arr})
		}
		else {
            reject({status:404, mes:'Not All Elements Are Strings'})
		}

	// return arr;
})
}

// let arr1 = ['Ani','Kaki','Metumtam',3];
let arr1 = 3;
makeAllCaps(arr1)
.then((res)=>{
    console.log('resolved')
    console.log(res);
    console.log(arr1);
}).catch((res)=>{
    console.log(res.status, res.mes)
})

