// Today's Mission:
// 1. Temperature Converter: Convert between Celsius and Fahrenheit
// 2. BMI Calculator: Calculate Body Mass Index and interpret results


// Callenge 1: Temperature Converter

// The Goal:
// celsiusToFahrenheit(celsius) - converts C° to F°
// fahrenheitToCelsius(fahrenheit) - converts F° to C°

// The Formulas:
// C to F: (celsius × 9/5) + 32
// F to C: (fahrenheit - 32) × 5/9

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32; // just return it, no extra variables needed 💀
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
console.log(celsiusToFahrenheit(25));

console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(212));
console.log(fahrenheitToCelsius(77));


// Challenge 2: BMI Calculator

// The Goal:
// calculateBMI(weightKg, heightM) - calculates the BMI number
// interpretBMI(bmi) - tells you what the BMI means

// The Formula:
// BMI = weight (kg) / height² (meters)

// BMI Categories:
// Underweight: BMI < 18.5
// Normal weight: BMI 18.5 - 24.9
// Overweight: BMI 25 - 29.9
// Obese: BMI ≥ 30

function calculateBMI(weightKg, heightM) {
    return weightKg / (heightM * heightM);
}

function interpretBMI(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 25) {
        return 'Normal weight';
    } else if (bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

let myBMI = calculateBMI(70, 1.75);

console.log(`Your BMI is ${myBMI}`);
console.log(`Category: ${interpretBMI(myBMI)}`);

let bmi1 = calculateBMI(50, 1.65);

console.log(`BMI: ${bmi1} - ${interpretBMI(bmi1)}`);

let bmi2 = calculateBMI(90, 1.80);

console.log(`BMI: ${bmi2} - ${interpretBMI(bmi2)}`);

function fullBMIReport(weightKg, heightM) {
    let bmi = weightKg / (heightM * heightM);

    if (bmi < 18.5) {
        return `Your BMI is ${bmi} (Underweight)`;
    } else if (bmi < 25) {
        return `Your BMI is ${bmi} (Normal weight)`;
    } else if (bmi < 30) {
        return `Your BMI is ${bmi} (Overweight)`;
    } else {
        return `Your BMI is ${bmi} (Obese)`; // what can i do here, so i get the interpretation first, then return once (and don't write four times)? is that possible? 💀
    }
}

console.log(fullBMIReport(70, 1.75));