const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
    ];

    function letterCount(string) {
        var stringObject = {};
        for (var i = 0; i < string.length; i++) {
          stringObject[string[i]] = ((stringObject[string[i]]) ? stringObject[string[i]] : 0) + 1;
        }
        return stringObject;
    }





// data.forEach((k)=> {
// console.log(k.name);
// });

// data.forEach((k)=> {
//     if (k.birthday==="1-10-1977") {
//         console.log(k);
//     }
//     });

