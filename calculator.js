// PROJECT: CALCULATOR APP



// ===== BASIC OPERATIONS =====


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



// ===== MAIN CALCULATOR =====


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



// ===== INTERACTIVE CALCULATOR =====


const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});


console.log("\n🧮 WELCOME TO THE CALCULATOR! 🧮\n");


// Step 1: Ask for first number

rl.question('Enter first number: ', (num1) => {
    
    // Step 2: Ask for operation

    rl.question('Enter operation (+, -, *, /): ', (operation) => {
        
        // Step 3: Ask for second number

        rl.question('Enter second number: ', (num2) => {
            
            // Convert to numbers

            let number1 = Number(num1);

            let number2 = Number(num2);
            

            // Validate

            if (isNaN(number1) || isNaN(number2)) {

                console.log("\n❌ Error: Please enter valid numbers!\n");

                rl.close();

                return;

            }

            
            // Calculate

            let result = calculate(number1, number2, operation);
            
            
            // Show result

            console.log(`\n✨ Result: ${number1} ${operation} ${number2} = ${result}\n`);
            
            rl.close();

        });

    });

});