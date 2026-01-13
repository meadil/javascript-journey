// PROJECT: CALCULATOR APP



// PART 1: PROJECT PLANNING (The Secret Sauce)


// THE PLANNING PROCESS:

// Step 1: Break Down the Calculator

// What does a calculator need to do?
// 1. Get two numbers from the user
// 2. Get the operation (+, -, *, /)
// 3. Calculate the result
// 4. Show the result
// 5. Handle errors (like dividing by zero)


// Step 2: Identify the Functions

// Let's map those steps to functions:

// These are the functions we need to create:

// 1. Basic math operations:

// function add(a, b) {}
// function subtract(a, b) {}
// function multiply(a, b) {}
// function divide(a, b) {}

// 2. Main calculator logic

// function calculate(num1, num2, operation) {}

// 3. Display/Menu

// function displayMenu() {}



// PART 2: LET'S START BUILDING


// BASIC OPERATIONS


function add(a, b) {

    return a + b;

}

function subtract(a, b) {

    return a - b;

}

function multiply(a, b) {

    return a * b;

}

function divide(a, b) {

    if (b === 0) {

        return "Error: Cannot divide by zero";

    } else {

        return a / b;

    }

}


// TESTING

// Let's make sure these work!


console.log("Testing add:", add(10, 5));

console.log("Testing subtract:", subtract(10, 5));

console.log("Testing multiply:", multiply(10, 5));

console.log("Testing divide:", divide(10, 5));

console.log("Testing divide by zero:", divide(10, 0));



// Exercise 1: Test the functions

// (done tesing. works 💀)



// Exercise 2: Add more test cases


console.log("\nAdd negative:", add(-5, 3));

console.log("Multiply by zero:", multiply(10, 0));

console.log("Divide decimals:", divide(10, 3));



// Exercise 3: Build Main Calculator Function


function calculate(num1, num2, operation) {

    operation = operation.toLowerCase();

    if (operation === "+" || operation === "add") {

        return add(num1, num2);

    } else if (operation === "-" || operation === "subtract") {

        return subtract(num1, num2);

    } else if (operation === "*" || operation === "multiply") {

        return multiply(num1, num2);

    } else if (operation === "/" || operation === "divide") {

        return divide(num1, num2);

    } else {

        return "Error! Use +, -, *, or /";

    }

}


// Let's test it


console.log("\nCalculator Tests:");

console.log(calculate(10, 5, "+"));

console.log(calculate(10, 5, "-"));

console.log(calculate(10, 5, "*"));

console.log(calculate(10, 5, "/"));


// Error testing 💀

console.log("\nTesting error handler:");

console.log(calculate(10, 5, "%"));

console.log(calculate(10, 5, "pizza"));

console.log(calculate(10, 5, ""));