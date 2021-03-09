const prompt = require("prompt-sync")({ signit: true });

let number = [8, 8, 8]
let product = 1
let sum = 0


function sumAndProduct(number) {
    for (i = number.length - 1; i >= 0; i--) {
        sum += number[i]
        product *= number[i]
    }
    return "The sum and Product of this array is " + sum + " and " + product;

}
console.log(sumAndProduct(number))