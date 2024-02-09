
let finalCount = 0
let countAdd = 2

function addCount(){

    finalCount += countAdd;
    
    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount)

}

function addAdd() {

    if(finalCount < 25) {

        alert("Insuficient Funds")

    }

    if(!(finalCount < 25)) {

            countAdd *= 2; 
    
            finalCount -= 25;

            console.log(finalCount);
         
            let button = document.getElementById("upgradeBut");

            button.classList.add("hide");

            alert("Upgrade Purchased!");

    }

}


function addAddDos() {

    if(finalCount < 50) {

        alert("Insuficient Funds")

    }

    if(!(finalCount < 50)) {

            countAdd *= 2; 
    
            finalCount -= 50;

            console.log(finalCount);
         
            let buttonDos = document.getElementById("upgradeBut2");

            buttonDos.classList.add("hide");

            alert("Upgrade Purchased!");

    }

}

function addAddThr() {

    if(finalCount < 100) {

        alert("Insuficient Funds")

    }

    if(!(finalCount < 100)) {

            countAdd *= 2; 
    
            finalCount -= 100;  

            console.log(finalCount);
         
            let buttonThr = document.getElementById("upgradeBut3");

            buttonThr.classList.add("hide");

            alert("Upgrade Purchased!");

    }

}
