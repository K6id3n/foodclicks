//world values

let finalCount = 0;
    
let countAdd = 1;

let rateValue = 0;

function addCount() {


    finalCount += countAdd;

    //for debug
    //finalCount += 999;

    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount)

}

//notes

//think of implementing gamble?

//achivements

function achivementsOneMillion() {

    if (finalCount >= 1000000) {

        alert("Congrats on one million!");
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

const milInterval = setInterval(achivementsOneMillion, 100)

//save/restore 

function save() {

    //save balence
    let finalCountString = finalCount.toString();
    localStorage.setItem('balence', finalCountString); 

    //saverate
    let rateValueString = rateValue.toString();
    localStorage.setItem('rate', rateValueString); 

    //get time
    let timeSaved = new Date();
    let timeSavedStr = timeSaved.toString();
    localStorage.setItem('timeLeft', timeSavedStr)

    //savelog
    console.log('saved!');
    console.log("items saved: balence:$" + finalCountString + " rate:$" + rateValueString);    
    console.log("time saved: ", timeSavedStr);

    //save bots
    let botCntOneString = botCntOne.toString();
    localStorage.setItem('bot1count', botCntOneString);

    let botCntDosString = botCntDos.toString();
    localStorage.setItem('bot2count', botCntDosString);

    let botCntThrString = botCntThr.toString();
    localStorage.setItem('bot3count', botCntThrString);
}

function restore() {

    //Restore Balence
    let finalCountString = localStorage.getItem('balence'); 
    finalCount = parseInt(finalCountString); 
    

    //get time
    

    //calc time gone/run in back
    let timeBack = new Date();
    let timeSaved = localStorage.getItem('timeLeft');
    let timeSavedUnStr = new Date(timeSaved);
    let timeLog = timeBack - timeSavedUnStr;
    let timeRate = localStorage.getItem('rate');
    timeRate = parseInt(timeRate);
    rateValue = timeRate;
    timeRate /= 2000;
    let earned = timeLog *= timeRate;
    earned = Math.ceil(earned);
    var rateOutput = document.getElementById("rate");
    rateOutput.textContent = (rateValue);
    finalCount = finalCount += earned;
    let outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount);
    return rateValue;
}

//reset

function reset() {

    var result = confirm("Do you want to proceed?");
    if (result) {
        handleYes();
    }

}

function handleYes() {

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

}

//mlt2

function addAddDos() {

    addAddFunction(150, 4, upgradeBut2);

}

//mlt3

function addAddThr() {

    addAddFunction(1000, 10, upgradeBut3);

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

//objects

let objPriceOne = 50;
let objPriceDos = 10000;
let objPriceThr = 15000;

let botCntOne = 0;
let botCntDos = 0;
let botCntThr = 0;

//dynamic buy obj fun

function buyObjFun(objPriceValue, objPriceHtmlId, addBot, rate, botCnt) {

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
        setInterval(addBot, 20)
        rateValue += rate;
        var outPutElement = document.getElementById("rate");
        outPutElement.textContent = (rateValue)
        //fix this lil bro it no no wanna wrk
        botCnt += 1;
        return objPriceValue;
    }

}

//obj1

function buyObj() {
    objPriceOne = buyObjFun(objPriceOne, "objPriceValueOne", buyObjAdd, 50, botCntOne);
}


function buyObjAdd() {
    finalCount += 1;
    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount)
}

//obj2

function buyObjDos() {
    objPriceDos = buyObjFun(objPriceDos, "objPriceValueDos", buyObjAddDos, 100, botCntDos);
}


function buyObjAddDos() {
    finalCount += 2;
    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount)
}

//obj3

function buyObjThr() {
    objPriceThr = buyObjFun(objPriceThr, "objPriceValueThr", buyObjAddThr, 1000, botCntThr);
}

function buyObjAddThr() {
    finalCount += 20;
    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount)
}

