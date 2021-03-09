const prompt = require("prompt-sync")({ signit: true });
let firstAmount = prompt("Enter your First Amount: ", "")
let secondAmount = prompt("Enter your Second Amount: ", "")
let subCharge;
let newAmount;

firstAmount = parseInt(firstAmount);
secondAmount = parseInt(secondAmount);

function addWithSubCharge(firstAmount, secondAmount) {
    let amountIsLessThanOrEqualToTen = firstAmount <= 10 && secondAmount <= 10;
    let amountIsGreaterThanOrequalToTen = firstAmount > 10 && secondAmount >= 10;

    if (amountIsLessThanOrEqualToTen) {
        subCharge = 1;
        newAmount = firstAmount + secondAmount + subCharge;
    } else if (amountIsGreaterThanOrequalToTen) {
        subCharge = 2;
        newAmount = firstAmount + secondAmount + subCharge;
    } else {
        console.log("Invalid Amount")
    }

    console.log(newAmount);
}

addWithSubCharge(firstAmount, secondAmount);