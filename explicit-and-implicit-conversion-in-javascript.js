/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = Number("25");     //added Number exlicit conversion so the values 25 and 5 could be added correctly. 
let totalAge = age + 5;
console.log("Total Age: " + totalAge);


//example of explicit conversion
let userInput = Number("1945");
let currentYear = 2025; 
let timePassed = currentYear - userInput; 
console.log("It's been " + timePassed + " years since " + userInput);

//example of inplicit conversion

console.log("15"/3 * "6" - 7);  //the strings are converted to numbers before the operations are completed. 