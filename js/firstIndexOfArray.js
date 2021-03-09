const prompt = require("prompt-sync")({ signit: true });

let first;

function firstIndexOf(n) {
    let firstIndex = []
    firstIndex.push(n)
    first = firstIndex[0]

    return first
}


console.log(firstIndexOf([7, 9, 0, -2]));
console.log(firstIndexOf([], 3));
console.log(firstIndexOf([7, 9, 0], 3));
console.log(firstIndexOf([7, 9, 0, -2], 6));