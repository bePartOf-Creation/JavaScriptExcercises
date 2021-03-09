const prompt = require("prompt-sync")({ signit: true });

let number = prompt("Enter A Number To check For Its Postivity or Negativity: ", "");
number = parseInt(number);

function positiveOrNegtiveNumbers(number) {
    let positive = number > 0;
    let negative = number < 0;

    if (positive) {
        console.log(number, "is a Positive Value")
    } else if (negative) {
        console.log(number, "is a Negative Value")
    }
}


positiveOrNegtiveNumbers(number);