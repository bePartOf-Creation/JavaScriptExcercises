const prompt = require("prompt-sync")({ signit: true });

function rotate(myArray) {
    let newArray = [];
    for (i = myArray.length - 1; i >= 0; i--) {
        newArray.push(myArray[i]);
    }
    return newArray;

}

myArray = [1, 3, 5, 8, 8, 986, 87];

console.log(rotate(myArray));