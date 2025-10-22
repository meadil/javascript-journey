// 1. AND Operator (&&) ALL conditions must be true

// Both conditions must be true for code to run
let age = 20;
let hasID = true;

if (age >= 18 && hasID === true) {
    console.log("You can enter!");
}
// Output: You can enter!
// (because BOTH age >= 18 AND hasID are true)

// 2. OR Operator (||) At LEAST ONE condition must be true

// Only ONE condition needs to be true
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("No work today! 🎉");
}
// Output: No work today! 🎉
// (because isHoliday is true, even though isWeekend is false)

// 3. NOT Operator (!)-Flips true/false

// The ! operator reverses the boolean value
let isRaining = false;

if (!isRaining) {
    console.log("Let's go outside!");
}
// Output: Let's go outside!
// (because !false becomes true)

// Combining Multiple Operators

let is = 25;
let hasTicket = true;
let isVIP = false;

if ((is >= 18 && hasTicket) || isVIP) {
    console.log("Welcome to the concert! 🎸");
}
// Output: Welcome to the concert! 🎸
// (because age >= 18 AND hasTicket are both true)


// Exercise 1: Voting Eligibility (AND operator)
let voterAge = 16;
let isCitizen = true;

if (voterAge >= 18 && isCitizen) {
    console.log("You can vote!");
} else if (voterAge < 18 && isCitizen) {
    console.log("You cannot vote.");
} else if (!isCitizen) {
    console.log("You cannot vote.");
}


// Exercise 2: Login Validator (AND with multiple checks)
let username = "admin";
let password = "secret123";

if (username === "admin" && password === "secret123") {
    console.log("Login successful!");
} else {
    console.log("Invalid credentials.");
}


// Exercise 3: Weekend or Holiday (OR operator)
let isWeekendDay = true;
let isPublicHoliday = false;

if (isWeekendDay || isPublicHoliday) {
    console.log("Day off!");
} else {
    console.log("Work day.");
}


// Exercise 4: Discount Eligibility (Combining AND + OR)
let isStudent = true;
let hasStudentID = true;
let isGrandpa = 65;

if ((isStudent && hasStudentID) || (isGrandpa >= 60)) {
    console.log("Discount applied!");
} else {
    console.log("No discount.");
}


// CHALLENGE: Super Login System
let validUsername = "user123";
let validPassword = "pass123";
let isLocked = false;

if ((validUsername === "user123" && validPassword === "pass123") && (!isLocked)) {
    console.log("Access granted!");
} else {
    console.log("Access denied!");
}