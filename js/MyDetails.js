const prompt = require("prompt-sync")({ signit: true });
//collect details from Customer as Tailor.
console.log("Welcome to my Shantel Stitches...Enter  your measurement size.")
let input1 = prompt("Measure and Enter the length of your skirt: ");
let input2 = prompt("Measure and Enter the length of your top: ");
let input3 = prompt("Measure and Enter the length of your boost: ");
let input4 = prompt("Measure and Enter the length of your Hips: ");
let input5 = prompt("Measure and Enter the length of your shoulder: ");
let input6 = "CUST" + Math.round(Math.random(200));

//storing each inputs in an array as values to customers.objects properties
let customers = [{
            skirt: input1,
            top: input2,
            customerId: input6
        },
        {
            boost: input3,
            Hips: input4,
            shoulder: input5
        }
    ]
    //Creation of A function
customers.measurementDetails = function() {
    let measure1 = this[0];
    let measure2 = this[1];


    console.log(measure1.customerId + "  Measurement Details: ");
    console.log("Hips : " + measure2.Hips);
    console.log("Shoulder : " + measure2.shoulder);
    console.log("Boost : " + measure2.boost);
    console.log("Skirt : " + measure1.skirt);
    console.log("Top : " + measure1.top);
    console.log("Thank you for patronising us... ");
}

//function created.
customers.measurementDetails();