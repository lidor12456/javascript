function Pokemon(pokemonName, pokemonType,pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
    }

    let pikachu = new Pokemon ('pikachu', 'electric' , ['highVolt', 'smack']);
    console.log(pikachu);
    let pshiduck = new Pokemon ('pshiduck', 'pshicho' , ['hypnoze', 'smack']);
    console.log(pshiduck);
    let cofing = new Pokemon ('cofing', 'poision' , ['inject', 'smack']);
    console.log(cofing);

    Pokemon.prototype.IChooseYou = function () {
     console.log(`I Choose You ${this.name}`);   
    }
    Pokemon.prototype.attack  = function (arg) {
     console.log(this.attackList[arg]);   
    }

    pikachu.IChooseYou();
    pikachu.attack(1);
