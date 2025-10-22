// Create these variables
let studentAge = 16;
let minimumAge = 13;
let maximumAge = 18;

// Now create boolean variables that store comparison results
let isOldEnough = studentAge >= minumumAge; // Check if studentAge >= minimumAge
let isTooOld = studentAge > maximumAge; // Check if studentAge > maximumAge
let isExactlyMinimum = studentAge === minimumAge; // Check if studentAge === minimumAge

// Console.log all three boolean variables
// Then change studentAge to different numbers and run again!

// Boolean values are just true or false (no quotes!)
let isRaining = true;
let isSunny = false;

console.log(isRaining); // Output: true
console.log(isSunny);   // Output: false

// Booleans can be started in variables just like numbers or strings
let hasLicense = true;
let isStudent = false;

console.log(hasLicense); // Output: true

// Test these comparisons - predict the answer first, then run the code!

console.log(15 > 10); // What will this show?
console.log(7 < 3);   // What about this?
console.log(20 === 20); // And this?
console.log(5 !== 8);  // This one?
console.log(12 >= 12); // Final one?

// Create your own variables and compare them
let myScore = 85;
let passingScore = 60;
let didPass = myScore >= passingScore;

console.log(`Did I pass? ${didPass}`);

// Check if you passed (myScore >= passingScore)
// Store it in a variable called 'didPass' and console.log it

// Greater than (>)
console.log(10 > 5); // Output: true (yes, 10 is greater than 5)
console.log(3 > 8);  // Output: false (no, 3 is not greater than 8)

// Less than (<)
console.log(5 < 10); // Output: true
console.log(20 < 15); // Output: false

// Greater than or equal to (>=)
console.log(10 >= 10); // Output: true
console.log(7 >= 9); // Output: false

// Less than or equal to (<=)
console.log(5 <= 8); // Output: true
console.log(12 <= 10); // Output: false

// Store values in variables and compare them
let myAge = 17;
let votingAge = 18;

console.log(myAge >= votingAge); // Output: false
console.log(myAge < votingAge);  // Output: true

// Compare variables to each other
let price1 = 25;
let price2 = 30;

console.log(price1 === price2); // Output: false
console.log(price1 < price2);   // Output: true

// Store the result in a variable
let isAdult = myAge >= 18;
console.log(isAdult); // Output: false

// This is super useful - we'll use this pattern a LOT

// Triple equals (===) checks if values are EXACTLY equal
console.log(5 === 5);  // Output: true
console.log(5 === 10); // Output: false
console.log("hello" === "hello"); // Output: true
console.log("Hi" === "hi");       // Output: false (capital matters!)

// Not equal (!==) checks if values are DIFFERENT
console.log(5 !== 10); // Output: true (yes, they're different!)
console.log(5 !== 5);  // Output: false (no, they're the same)
console.log("cat" !== "dog"); //Output: true