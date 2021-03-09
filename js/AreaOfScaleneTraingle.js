const prompt = require("prompt-sync")({ signit: true });

let sideA = 5;
let sideB = 6;
let sideC = 7;

function areaOfScaleneTraingle(sideA, sideB, sideC) {
    let perimeter = (sideA + sideB + sideC) / 2;
    let area = Math.sqrt(perimeter(perimeter - sideA)(perimeter - sideB)(perimeter - sideC))

    return area;
}


areaOfScaleneTraingle(sideA, sideB, sideC);