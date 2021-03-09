const prompt = require("prompt-sync")({ signit: true });

var number1 = prompt("Enter your FirstNUmber:", " ")
var number2 = prompt("Enter your SecondNumber:", " ")

number1 = parseInt(number1);
number2 = parseInt(number2);

function checkForFifty(number1, number2) {
    var addTrue = number1 + number2 === 50;
    var number1True = number1 === 50;
    var number2True = number2 === 50;

    if (addTrue) {
        console.log(number1, number2, "is are Valid Addition For 50")
    } else
    if (number1True) {
        console.log("First Number is ", number1)
    } else
    if (number2True) {
        console.log("Second Number is ", number2)
    } else {
        console.log("FirtNumber and SecondNumber are invalid inputs")
    }

}


checkForFifty(number1, number2);