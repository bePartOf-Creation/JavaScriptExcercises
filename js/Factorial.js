const prompt = require("prompt-sync")({ signit: true });


let n = parseInt(prompt("Enter a number and calculate its Factorial"));

let number;

number.factorial = function(n) {
    let product = 1;
    while (n > 1) {
        product *= n;
        n--;
    }

    return console.log(product);
}

number.factorial();

/**
 * 
 */