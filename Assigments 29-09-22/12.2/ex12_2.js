



const candyStore = [ 
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    }
];
  
    


    function getCandy(candyStore, id) {
        const findCandy = candyStore.filter(e => e.id.includes(id));
        return findCandy;
        }
        console.log(getCandy(candyStore,"5hd7y"));

    
        function getPrice(candyStore, id){
             const findCandy2 = candyStore.filter(e => e.id.includes(id));
            return findCandy2[0].price;
        }
     
       
        function addCandy(candyStore, id, name, price){
            candyStore[2]={name : name, id : id , price : price, amount : 1};
        
        }
// addCandy(candyStore,"3234","lll",5);
// console.log(candyStore);