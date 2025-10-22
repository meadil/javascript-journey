// Check if a number is positive
let number = 5;

if (number > 0) {
    console.log("This number is positive!");
}
// Output: This number is positive!

// Check is someone is tall enough for a ride
let height = 130;  // in cm

if (height >= 150) {
    console.log("You can ride the rollercoaster!");
}
// Output: (nothing!)

// Password checker
let password = "secret123";

if (password === "secret123") {
    console.log("Access granted! Welcome back!");
}

// ⚠ Common Beginner Mistakes
// WRONG - This assigns 10 to age, doesn't check it!
if (age = 10) {
    console.log("You are 10");
}

// RIGHT - This checks if age equals 10
if (age === 10) {
    console.log("You are 10");
}

// Works but risky (only one line after if)
if (age > 18)
    console.log("Adult");

// BETTER - Always use braces, even for one line
if (age > 18) {
    console.log("Adult");
}

// WRONG - semicolon ends the if statement
if (age > 18); { // This semicolon breaks it
    console.log("Adult");
}

// RIGHT - No semicolon after if condition
if (age > 18) {
    console.log("Adult");
}

