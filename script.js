//world values
let finalCount = 0

let countAdd = 1

function addCount() {

    finalCount += countAdd;

    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount)

}

//achivements

function achivementsOneMillion() {

    if(finalCount >= 1000000) {

        alert("Congrats on one million!")

        clearInterval(milInterval)

        var outPutElement = document.getElementById("oneMil");
        outPutElement.textContent = ("One Million")

        countAdd *= 10;

        var outPutElement = document.getElementById("multCount");
        outPutElement.textContent = (countAdd)

        setInterval(oneMilObj, 100)

    }

}

function oneMilObj() {

    finalCount += 10000;

    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount)

}

const milInterval = setInterval(achivementsOneMillion, 100)

function coinHide() {



}

//tempmultiplier

function coinShow() {

    document.getElementById("coin").style.display = "flex";

}

const coinInterval = setInterval(coinShow, 18000)

function coinClick() {



}

//multipliers

//mlt1

function addAdd() {

    if (finalCount < 25) {

        alert("Insuficient Funds")

    }

    if (!(finalCount < 25)) {

        countAdd *= 2;

        finalCount -= 25;

        var outPutElement = document.getElementById("final");
        outPutElement.textContent = (finalCount)

        var outPutElement = document.getElementById("multCount");
        outPutElement.textContent = (countAdd)

        let button = document.getElementById("upgradeBut");

        button.classList.add("hide");

        var outPutElement = document.getElementById("alertBox");
        outPutElement.textContent = ("2x Mulltiplier Purchased!")

    }

}

//mlt2

function addAddDos() {

    if (finalCount < 150) {

        alert("Insuficient Funds")

    }

    if (!(finalCount < 150)) {

        countAdd *= 4;

        finalCount -= 150;

        var outPutElement = document.getElementById("final");
        outPutElement.textContent = (finalCount)

        var outPutElement = document.getElementById("multCount");
        outPutElement.textContent = (countAdd)

        let buttonDos = document.getElementById("upgradeBut2");

        buttonDos.classList.add("hide");

        var outPutElement = document.getElementById("alertBox");
        outPutElement.textContent = ("4x Mulltiplier Purchased!")

    }

}

//mlt3

function addAddThr() {

    if (finalCount < 1000) {

        alert("Insuficient Funds")

    }

    if (!(finalCount < 1000)) {

        countAdd *= 10;

        finalCount -= 1000;

        var outPutElement = document.getElementById("final");
        outPutElement.textContent = (finalCount)

        var outPutElement = document.getElementById("multCount");
        outPutElement.textContent = (countAdd)

        let buttonThr = document.getElementById("upgradeBut3");

        buttonThr.classList.add("hide");

        var outPutElement = document.getElementById("alertBox");
        outPutElement.textContent = ("10x Mulltiplier Purchased!")

    }

}

//objects

let objPrice = 500;

let objPriceDos = 5000;

let objPriceThr = 10000;

let botCount = 0;

let botCountDos = 0;

let botCountThr = 0;

//obj1

function buyObj() {

    if (finalCount < objPrice) {

        alert("Insuficient Funds")

    }

    if (!(finalCount < objPrice)) {

        finalCount -= objPrice;

        setInterval(buyObjAdd, 1000);

        objPrice  += 100;

        var outPutElement = document.getElementById("objPrice");
        outPutElement.textContent = (objPrice)
        
        botCount += 1;

        var outPutElement = document.getElementById("botCount");
        outPutElement.textContent = (botCount)

        var outPutElement = document.getElementById("alertBox");
        outPutElement.textContent = ("Bot 1 Purchased!")

    }

    if (objPrice >= 1500) {

        var outPutElement = document.getElementById("alertBox");
        outPutElement.textContent = ("Bot 1 Maxed Out!")

        document.getElementById("botBut").style.display = "none";

    }

}


function buyObjAdd() {

    finalCount += 50;

    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount)

}

//obj2

function buyObjDos() {

    if (finalCount < objPriceDos) {

        alert("Insuficient Funds")

    }

    if (!(finalCount < objPriceDos)) {

        finalCount -= objPriceDos;

        setInterval(buyObjDosAdd, 1000);

        objPriceDos  += 1000;
        
        var outPutElement = document.getElementById("objPriceDos");
        outPutElement.textContent = (objPriceDos)

        botCountDos += 1;

        var outPutElement = document.getElementById("botCountDos");
        outPutElement.textContent = (botCountDos)

        var outPutElement = document.getElementById("alertBox");
        outPutElement.textContent = ("Bot 2 Purchased!")

    }

    if (objPriceDos >= 10000) {

        var outPutElement = document.getElementById("alertBox");
        outPutElement.textContent = ("Bot 2 Maxed Out!")

        document.getElementById("botButDos").style.display = "none";

    }

}


function buyObjDosAdd() {

    finalCount += 100;

    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount)

}

//obj3

function buyObjThr() {

    if (finalCount < objPriceThr) {

        alert("Insuficient Funds")

    }    

    if (!(finalCount < objPriceThr)) {

        finalCount -= objPriceThr;

        setInterval(buyObjThrAdd, 1000);

        objPriceThr  += 5000;
        
        var outPutElement = document.getElementById("objPriceThr");
        outPutElement.textContent = (objPriceThr)

        botCountThr += 1;

        var outPutElement = document.getElementById("botCountThr");
        outPutElement.textContent = (botCountThr)

        var outPutElement = document.getElementById("alertBox");
        outPutElement.textContent = ("Bot 3 Purchased!")

    }

    if (objPriceThr >= 60000) {

        var outPutElement = document.getElementById("alertBox");
        outPutElement.textContent = ("Bot 3 Maxed Out!")

        document.getElementById("botButThr").style.display = "none";

    }


}


function buyObjThrAdd() {

    finalCount += 1000;

    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount)

}

