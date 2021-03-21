const prompt = require("prompt-sync")({ signit: true });

let x = 5;


let person = [{ name: "Olasunkanmi", Age: 13 },
    { yearOfBirth: 1991, Status: "single" }
]

person.details = function() {
    let p1 = this[0];
    let p2 = this[1];

    let fullDetails = "My name is " + p1.name + " I am of age " + p1.Age + "birth in year" + p2.yearOfBirth +
        " And I am " + p2.Status;
    console.log(fullDetails);
}


const plus1 = x => x + 1;

function fact(x) {
    if (x > 1) {
        return x * (x - 1)
    } else {
        return 1;
    }
}
// const fact = x => x > 1 ? x * x - 1
console.log(person[0].Age);
console.log(person[1].Status);

console.log(plus1(4))

console.log(fact(x));
person.details()