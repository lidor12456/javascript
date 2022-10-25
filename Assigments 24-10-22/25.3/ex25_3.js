const wonderWoman = {
    name: "Diana Prince"
    }
    const batman = {
    name: "Bruce Wayne"
    }

    const superHeroes = [wonderWoman, batman];

    function printName(a) {
        a.forEach(element => {
            console.log(`my name is ${this.name}`);
        
        });
        }
        printName.apply(superHeroes);

    function printHeroes(heroes, printFunc) {
        //add your code here
        }
    
        // printHeroes(superHeroes,printName.apply(superHeroes))