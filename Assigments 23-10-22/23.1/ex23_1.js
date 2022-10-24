
const myObj = {
    name: "Timmy",
    greet: () => {
    console.log(this);
    },
    };
    myObj.greet();
    // this refernce to the WINDOW
    
    const myFuncDec = function () {
        console.log(this);
        };
        myFuncDec();
            // this refernce to the WINDOW


        const myFuncArrow = () => {
            console.log(this);
            };
            myFuncArrow();
                // this refernce to the WINDOW


            document.querySelector(".element").addEventListener("click",() => {
                console.log(this);
                });
                                // this refernce to the WINDOW


                document.querySelector(".element").addEventListener("click", function () {
                    console.log(this);
                });
                                // this refernce to the element
