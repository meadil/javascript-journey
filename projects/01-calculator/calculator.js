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

    operation = operation.toLowerCase().trim();
    
    if (operation === "+" || operation === "add") {

        return add(num1, num2);

    } else if (operation === "-" || operation === "subtract") {

        return subtract(num1, num2);

    } else if (operation === "*" || operation === "multiply" || operation === "x") {

        return multiply(num1, num2);

    } else if (operation === "/" || operation === "divide") {

        return divide(num1, num2);

    } else {

        return `❌ Error! Unknown operation ${operation}`;

    }

}



// ===== INTERACTIVE CALCULATOR =====


const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});


// This stores calculation history

let history = [];

// Stats

let statNumbers = [];


// Main calculator function

function runCalculation() {

    console.log("\n--- NEW CALCULATION ---");


    rl.question('Enter first number: ', (num1) => {

        rl.question('Enter operation (+, -, *, /): ', (operation) => {

            rl.question('Enter second number: ', (num2) => {

                let number1 = Number(num1);

                let number2 = Number(num2);

                // Validate

                if (isNaN(number1) || isNaN(number2)) {

                    console.log("\n❌ Error: Please enter valid numbers!");

                    return askToContinue();

                }

                // Calculate

                let result = calculate(number1, number2, operation);

                // Save the result to stats

                if (typeof result === 'number') {

                    statNumbers.push(result);

                }

                // Save to history

                let calculation = `${number1} ${operation} ${number2} = ${result}`;

                history.push(calculation);

                // Show result

                console.log(`\n✨ Result: ${result}`);

                askToContinue();

            });

        });

    });

}


// Ask if user wants another calculation


function askToContinue() {

    console.log("\n--- MENU ---");
    console.log("[1] New Calculation");
    console.log("[2] View History");
    console.log("[3] Clear History");
    console.log("[4] View Stats");
    console.log("[5] Exit");

    rl.question('\nChoice: ', (choice) => {

        if (choice === '1') {

            runCalculation();

        } else if (choice === '2') {

            showHistory();

            askToContinue();

        } else if (choice === '3') {

            clearHistory();

            askToContinue();

        } else if (choice === '4') {

            showStats();

            askToContinue();

        } else if (choice === '5') {

            console.log("\n👋 Thanks for using Calculator Pro!");

            console.log(`📊 Total calculations: ${history.length}`);

            rl.close();

        } else {

            console.log("\n❌ Invalid choice! Please enter 1-5.");

            askToContinue();

        }

    });

}


// Start the calculator

console.log("\n🧮 ===== CALCULATOR PRO ===== 🧮");

askToContinue();



// Show calculation history


function showHistory() {

    if (history.length !== 0) {

        console.log("\n📜 CALCULATION HISTORY:");

        for (let i = 0; i < history.length; i++) {

            console.log(`${i + 1}. ${history[i]}`);

        }

    } else {

        console.log("\n📜 No calculations yet!");

    }

}


// Clear history

function clearHistory() {

    history = [];

    console.log("\n🗑️ History cleared!");

}


// Show stats

function showStats() {

    if (statNumbers.length !== 0) {

        let min = statNumbers[0];

        for (let i = 1; i < statNumbers.length; i++) {

            if (statNumbers[i] < min) {

                min = statNumbers[i];

            }

        }

        let max = statNumbers[0];

        for (let i = 1; i < statNumbers.length; i++) {

            if (statNumbers[i] > max) {

                max = statNumbers[i];

            }

        }

        let sum = 0;

        for (let i = 0; i < statNumbers.length; i++) {

            sum+= statNumbers[i];

        }

        let average = sum / statNumbers.length;

        console.log("\n📊 STATISTICS:");
        console.log(`Minimum: ${min}`);
        console.log(`Maximum: ${max}`);
        console.log(`Sum: ${sum}`);
        console.log(`Total: ${statNumbers.length}`)
        console.log(`Average: ${average}`);

    } else {

        console.log("\n📊 No statistics yet! Do some calculations first!");

    }

}