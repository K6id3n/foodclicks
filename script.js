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
//finish dynamic bot buy fun

//achivements

function achivementsOneMillion() {

    if (finalCount >= 1000000) {

        alert("Congrats on one million!")
        clearInterval(milInterval)
        var outPutElement = document.getElementById("oneMil");
        outPutElement.textContent = ("One Million")
        countAdd *= 10;
        var outPutElement = document.getElementById("multCount");
        outPutElement.textContent = (countAdd)
        setInterval(oneMilObj, 100)
        outPutElement.textContent = (rateValue)
        rateValue += 100000;
        var outPutElement = document.getElementById("rate");
        outPutElement.textContent = (rateValue)

    }

}

function oneMilObj() {

    finalCount += 10000;
    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount)

}

const milInterval = setInterval(achivementsOneMillion, 100)

//save/restore 

function save() {

    let finalCountString = finalCount.toString();

    localStorage.setItem('finalCountString', finalCountString); 
    
    console.log('saved!')

}

function restore() {

    //Restore Balence

    let finalCountString = localStorage.getItem('finalCountString');
    let addOldBalence = parseInt(finalCountString);  
    finalCount = addOldBalence;
    let outPutElement = document.getElementById("final");
    outPutElement.textContent = (addOldBalence)

    //Restore Rate

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

    if (finalCount > price) {

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

let objPriceDos = 5000;

let objPriceThr = 10000;

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
        setInterval(addBot, 20)
        rateValue += rate;
        console.log(rateValue);
        //var outPutElement = document.getElementById("ratext");
        //outPutElement.textContent = (rateValue);
        return objPriceValue;
    }

}

//obj1

function buyObj() {
    objPriceOne = buyObjFun(objPriceOne, "objPriceValueOne", buyObjAdd, 50);
}


function buyObjAdd() {
    finalCount += 1;
    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount)
}

//obj2

function buyObjDos() {
    objPriceDos = buyObjFun(objPriceDos, "objPriceValueDos", buyObjAddDos, 100);
}


function buyObjAddDos() {
    finalCount += 2;
    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount)
}

//obj3

function buyObjThr() {
    objPriceThr = buyObjFun(objPriceThr, "objPriceValueThr", buyObjAddThr, 1000);
}

function buyObjAddThr() {
    finalCount += 20;
    var outPutElement = document.getElementById("final");
    outPutElement.textContent = (finalCount)
}

