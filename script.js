//world values
let finalCount = 0
let countAdd = 100

function addCount() {

    finalCount += countAdd;

    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount)

}

//multipliers

function addAdd() {

    if (finalCount < 25) {

        alert("Insuficient Funds")

    }

    if (!(finalCount < 25)) {

        countAdd *= 2;

        finalCount -= 25;

        var outPutElement = document.getElementById("final");
        outPutElement.textContent = (finalCount)

        let button = document.getElementById("upgradeBut");

        button.classList.add("hide");

        alert("Upgrade Purchased!");

    }

}


function addAddDos() {

    if (finalCount < 50) {

        alert("Insuficient Funds")

    }

    if (!(finalCount < 50)) {

        countAdd *= 2;

        finalCount -= 50;

        var outPutElement = document.getElementById("final");
        outPutElement.textContent = (finalCount)

        let buttonDos = document.getElementById("upgradeBut2");

        buttonDos.classList.add("hide");

        alert("Upgrade Purchased!");

    }

}

function addAddThr() {

    if (finalCount < 100) {

        alert("Insuficient Funds")

    }

    if (!(finalCount < 100)) {

        countAdd *= 2;

        finalCount -= 100;

        var outPutElement = document.getElementById("final");
        outPutElement.textContent = (finalCount)

        let buttonThr = document.getElementById("upgradeBut3");

        buttonThr.classList.add("hide");

        alert("Upgrade Purchased!");

    }

}

//objects
function buyObj() {

    if (!(finalCount < 500)) {

        finalCount -= 500;

        let buttonBot = document.getElementById("botBut");

        setInterval(buyObjAdd, 1000);

        alert("Bot Purchased!");

        buttonBot.classList.add("hide");

    }



}


function buyObjAdd() {

    finalCount += 10;

    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount)

}

function buyObjDos() {

    if (!(finalCount < 5000)) {

        finalCount -= 5000;

        let buttonBotDos = document.getElementById("botButDos");

        setInterval(buyObjDosAdd, 1000);

        alert("Upgrade Purchased!");

        buttonBotDos.classList.add("hide");

    }



}


function buyObjDosAdd() {

    finalCount += 100;

    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount)

}

function buyObjThr() {

    if (!(finalCount < 10000)) {

        finalCount -= 10000;

        let buttonBotThr = document.getElementById("botButThr");

        setInterval(buyObjThrAdd, 1000);

        alert("Upgrade Purchased!");

        buttonBotThr.classList.add("hide");

    }



}


function buyObjThrAdd() {

    finalCount += 1000;

    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount)

}

