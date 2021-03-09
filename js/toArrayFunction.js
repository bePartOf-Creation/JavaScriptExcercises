const prompt = require("prompt-sync")({ signit: true });


let firstNumber = prompt("Pass your FirstNumber to an array: ", " ");
let secondNumber = prompt("Pass your SecondNumber to an array: ", " ");

firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber)

function toArray(firstNumber, secondNumber) {
    let myArray = Array.from(arguments);
    console.log(myArray);
}


toArray(firstNumber, secondNumber);