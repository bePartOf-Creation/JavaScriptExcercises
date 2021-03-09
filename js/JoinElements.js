// Write a simple JavaScript program to join all elements of the
// following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
//  *** Expected Output:
//  "Red,Green,White,Black"
//  "Red,Green,White,Black"
//  "Red+Green+White+Black

var array = ["Red", "Green", "White", "Black"];
var newArray = array.join(",");
var newArrayByPlus = array.join("+")

console.log(newArray)
console.log(newArrayByPlus)