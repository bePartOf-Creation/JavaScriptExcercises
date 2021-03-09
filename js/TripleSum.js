const prompt = require("prompt-sync")({ signit: true });


let firstNumber = prompt("Enter your First Number: ", " ");
let secondNumber = prompt("Enter Your Second Number: ", " ");

firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);
let sum;

function tripleSum(firstNumber, secondNumber) {

    let bothNumbersAreEquals = firstNumber === secondNumber
    let bothNUmbersAreNotEqual = firstNumber != secondNumber

    if (bothNumbersAreEquals) {
        sum = firstNumber + secondNumber + firstNumber
    } else
    if (bothNUmbersAreNotEqual) {
        sum = firstNumber + secondNumber
    }
    console.log(sum)
}




tripleSum(firstNumber, secondNumber)