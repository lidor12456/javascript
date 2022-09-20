const countryToLiveIn = (language,isIsland,population,country) =>{
 
    language = language.toUpperCase(); 
    // isIsland = Boolean;
    if (language==='ENGLISH' && isIsland===false && population > 50) {
         return console.log("You should live in" + " " + country);
    }
    else {
         return console.log(country + ' ' + 'does not meet your criteria');
    }
}

countryToLiveIn('english',false,60,'israel');