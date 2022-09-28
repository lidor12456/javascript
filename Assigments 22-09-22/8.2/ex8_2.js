const myCountry = {
    country : "israel",
    capital : "jerusalem",
    language : "hebrow",
    population : "9",
    neighbours : ["irak","eigent"],

    describe () {
        const {
            country,
            capital,
            language,
            population,
            neighbours
          } = this;


        return `${country} has ${population} milion people. the lang is ${language}, they have ${neighbours.length} neighbours and the capital is ${capital}.`;
    },
    isIsland () {
        myCountry.isIsland = this.neighbours.length!=0 ? true : false;

    }
}
console.log(myCountry);