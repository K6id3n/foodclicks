//world values

let finalCount = 0;

let countAdd = 1;

let rateValue = 0;

let objPriceOne = 50;
let objPriceDos = 10000;
let objPriceThr = 15000;

let botCntOne = 0;
let botCntDos = 0;
let botCntThr = 0;

let mltPurch = false;
let mltDosPurch = false;
let mltThrPurch = false;

let clickAmt = 0;

function addCount() {
    finalCount += countAdd;
    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount);
    clickAmt += 1;
}

//notes

//think of implementing gamble?

//achivements

function achivementsClicks() {
    if (clickAmt == 500) {
        countAdd *= 10;
        clearInterval(achivementsClicks);
        var outPutElement = document.getElementById("multCount");
        outPutElement.textContent = (countAdd);
    }
    
}

setInterval(achivementsClicks, 100);

function achivementsOneMillion() {

    if (finalCount >= 1000000) {

        var outPutElement = document.getElementById("alertBox");
        outPutElement.textContent = "congrats on one million!";
        clearInterval(milInterval);
        var outPutElement = document.getElementById("oneMil");
        outPutElement.textContent = ("One Million")
        countAdd *= 10;
        var outPutElement = document.getElementById("multCount");
        outPutElement.textContent = (countAdd);
        setInterval(oneMilObj, 100);
        outPutElement.textContent = (rateValue);
        rateValue += 100000;
        var outPutElement = document.getElementById("rate");
        outPutElement.textContent = (rateValue);

    }
}

function oneMilObj() {

    finalCount += 10000;
    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount);

}

const milInterval = setInterval(achivementsOneMillion, 100);

//save/restore 

function save() {
    let finalCountString = finalCount.toString();
    localStorage.setItem('balence', finalCountString);
    let rateValueString = rateValue.toString();
    localStorage.setItem('rate', rateValueString);
    let timeSaved = new Date();
    let timeSavedStr = timeSaved.toString();
    localStorage.setItem('timeLeft', timeSavedStr)
    let botCntOneString = botCntOne.toString();
    localStorage.setItem('bot1count', botCntOneString);
    let botCntDosString = botCntDos.toString();
    localStorage.setItem('bot2count', botCntDosString);
    let botCntThrString = botCntThr.toString();
    localStorage.setItem('bot3count', botCntThrString);
    let mltString1 = mltPurch.toString();
    localStorage.setItem('multiplier1', mltString1);
    let mltString2 = mltDosPurch.toString();
    localStorage.setItem('multiplier2', mltString2);
    let mltString3 = mltThrPurch.toString();
    localStorage.setItem('multiplier3', mltString3);
    let clickAmtStr = clickAmt.toString();
    localStorage.setItem('Clicks', clickAmtStr);
    var outPutElement = document.getElementById("alertBox");
    outPutElement.textContent = "Saved!";
    console.log('saved!');
    console.log("items saved: balence:$" + finalCountString + " rate:$" + rateValueString + " bots1:" + botCntOneString + " bots2:" + botCntDosString + " bots3:" + botCntThrString);
    console.log("time saved: ", timeSavedStr);
}

function restore() {
    console.log("restored!")
    let finalCountString = localStorage.getItem('balence');
    finalCount = parseInt(finalCountString);
    let timeBack = new Date();
    let timeSaved = localStorage.getItem('timeLeft');
    let timeSavedUnStr = new Date(timeSaved);
    let timeLog = timeBack - timeSavedUnStr;
    let timeRate = localStorage.getItem('rate');
    timeRate = parseInt(timeRate);
    timeRate /= 2000;
    let earned = timeLog *= timeRate;
    earned = Math.ceil(earned);
    finalCount = finalCount += earned;
    let earnedTextOutput = document.getElementById("alertBox");
    earnedTextOutput.textContent = ("You earned:$" + earned + " while you were gone!");
    let finalCountGoneOutput = document.getElementById("final");
    finalCountGoneOutput.textContent = (finalCount);
    let botCntOneRes = localStorage.getItem('bot1count');
    botCntOneRes = parseInt(botCntOneRes);
    let botCntDosRes = localStorage.getItem('bot2count');
    botCntDosRes = parseInt(botCntDosRes);
    let botCntThrRes = localStorage.getItem('bot3count');
    botCntThrRes = parseInt(botCntThrRes);
    let clickAmtStr = localStorage.getItem('Clicks');
    clickAmt = parseInt(clickAmtStr);
    botCntOne = botCntOneRes;
    botCntDos = botCntDosRes;
    botCntThr = botCntThrRes;
    clearInterval(buyObjAdd);
    clearInterval(buyObjAddDos);
    clearInterval(buyObjAddThr);
    rateValue = 0;
    countAdd = 1;
    objPriceOne = 50;
    objPriceDos = 10000;
    objPriceThr = 15000;
    objPriceOne = botRestore(objPriceOne, "objPriceValueOne", buyObjAdd, 50, botCntOne);
    objPriceDos = botRestore(objPriceDos, "objPriceValueDos", buyObjAddDos, 100, botCntDos);
    objPriceThr = botRestore(objPriceThr, "objPriceValueThr", buyObjAddThr, 1000, botCntThr);
    let mltPurchStr = localStorage.getItem('multiplier1');
    mltPurch = strToBoolean(mltPurchStr);
    let mltDosPurchStr = localStorage.getItem('multiplier2');
    mltDosPurch = strToBoolean(mltDosPurchStr);
    let mltThrPurchStr = localStorage.getItem('multiplier3');
    mltThrPurch = strToBoolean(mltThrPurchStr);
    if (mltPurch == true) {
        mltRestore(upgradeBut, 2);
    }
    if (mltDosPurch == true) {
        mltRestore(upgradeBut2, 4);
    }
    if (mltThrPurch == true) {
        mltRestore(upgradeBut3, 10);
    }
    return rateValue;
}

function strToBoolean(string) {
    if (string === "true") {
        string = true;
        return string;
    } else if (string === "false") {
        string = false;
        return string;
    }
}

function botRestore(objPriceValue, objPriceHtmlId, addBot, rate, botCnt) {
    let b = botCnt;
    for (var i = 1; i <= b; i++) {
        objPriceValue *= 1.2;
        objPriceValue = Math.ceil(objPriceValue);
        var outPutElement = document.getElementById(objPriceHtmlId);
        outPutElement.textContent = (objPriceValue);
        setInterval(addBot, 20);
        rateValue += rate;
        var outPutElement = document.getElementById("rate");
        outPutElement.textContent = (rateValue);
        botCnt += 1;
    }
    return objPriceValue;
}

function mltRestore(butId, mlt) {
    countAdd *= mlt;
    var outPutElement = document.getElementById("multCount");
    outPutElement.textContent = (countAdd);
    butId.classList.add("hide");
}
//reset

function reset() {
    location.reload();
}

//tempmultiplier


function coinShow() {
    document.getElementById("coin").style.display = "flex";
    clearInterval(coinInterval);
    function coinHide() {
        document.getElementById("coin").style.display = "none";
    }
    setTimeout(coinHide, 5000)
}

let coinInterval = setInterval(coinShow, 90000)

function coinClick() {

    document.getElementById("coin").style.display = "none";
    countAdd *= 100;
    var outPutElement = document.getElementById("multCount");
    outPutElement.textContent = countAdd;

    function coinEnd() {

        countAdd /= 100;
        var outPutElement = document.getElementById("multCount");
        outPutElement.textContent = countAdd;

    }

    setTimeout(coinEnd, 10000);

    timer();
}

function timer() {

    let i = 10;

    function countdown() {

        var outPutElement = document.getElementById("alertBox");
        outPutElement.textContent = "Boost:" + i;
        i--;
        if (i > 0) {
            setTimeout(countdown, 1000);
        }
        if (i === 0) {
            var outPutElement = document.getElementById("alertBox");
            outPutElement.textContent = "Boost Over";
            return;

        }
    }

    countdown();

}
//multipliers

//mlt1

function addAdd() {
    addAddFunction(25, 2, upgradeBut);
    mltPurch = true;
}

//mlt2

function addAddDos() {
    addAddFunction(150, 4, upgradeBut2);
    mltDosPurch = true;
}

//mlt3

function addAddThr() {
    addAddFunction(1000, 10, upgradeBut3);
    mltThrPurch = true;
}

//dynamic buy function

function addAddFunction(price, mlt, butId) {

    if (finalCount < price) {

        alert("Insuficient Funds")

    }

    if (finalCount >= price) {

        countAdd *= mlt;
        finalCount -= price;
        var outPutElement = document.getElementById("multCount");
        outPutElement.textContent = (countAdd)
        var outPutElement = document.getElementById("final");
        outPutElement.textContent = (finalCount);
        butId.classList.add("hide");
        var outPutElement = document.getElementById("alertBox");
        outPutElement.textContent = (mlt + "x Multiplier Purchased!")

    }

}

//dynamic buy obj fun

function buyObjFun(objPriceValue, objPriceHtmlId, addBot, rate) {

    if (finalCount < objPriceValue) {
        alert("Insuficient Funds");
        return objPriceValue;
    }

    if (finalCount > objPriceValue) {
        //purchase/inflation function:
        finalCount -= objPriceValue;
        var outPutElement = document.getElementById("final");
        outPutElement.textContent = (finalCount);
        objPriceValue *= 1.2;
        objPriceValue = Math.ceil(objPriceValue);
        var outPutElement = document.getElementById(objPriceHtmlId);
        outPutElement.textContent = (objPriceValue);
        setInterval(addBot, 20);
        rateValue += rate;
        var outPutElement = document.getElementById("rate");
        outPutElement.textContent = (rateValue);
        return objPriceValue;
    }

}


//obj1

function buyObj() {
    objPriceOne = buyObjFun(objPriceOne, "objPriceValueOne", buyObjAdd, 50);
    botCntOne += 1;
}
function buyObjAdd() {
    finalCount += 1;
    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount)
}

//obj2

function buyObjDos() {
    objPriceDos = buyObjFun(objPriceDos, "objPriceValueDos", buyObjAddDos, 100);
    botCntDos += 1;
}
function buyObjAddDos() {
    finalCount += 2;
    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount)
}

//obj3

function buyObjThr() {
    objPriceThr = buyObjFun(objPriceThr, "objPriceValueThr", buyObjAddThr, 1000);
    botCntThr += 1;
}
function buyObjAddThr() {
    finalCount += 20;
    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount)
}

