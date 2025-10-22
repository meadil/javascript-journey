// Convert a numeric grade to a letter guide
let score = 87;

if (score >= 90) {
    console.log("Grade: A"); // 90-100
} else if (score >= 80) {
    console.log("Grade: B"); // 80-89
} else if (score >= 70) {
    console.log("Grade: C"); // 70-79
} else if (score >= 60) {
    console.log("Grade: D"); // 60-69
} else {
    console.log("Grade: F"); // Below 60
}

// Output: Grade: B

// Describe the weather based on temperature
let temp = 65;

if (temp >= 85) {
    console.log("It's HOT outside! 🔥");
} else if (temp >= 70) {
    console.log("Nice and warm! ☀");
} else if (temp >= 55) {
    console.log("A bit cool, bring a jacket! 🧥");
} else {
    console.log("It's COLD! Bundle up! ❄");
}

// Output: A bit cool, bring a jacket! 🧥

let lightColor = "green";

if (lightColor === "red") {
    console.log("STOP!");
} else if (lightColor === "purple") {
    console.log("Invalid color");
} else if (lightColor === "green") {
    console.log("GO!");
}

let age = 10;

if (age >= 17) {
    console.log("You can watch R-rated movies");
} else if (age >= 13) {
    console.log("You can watch PG-13 movies");
} else if (age < 13) {
    console.log("You can watch G and PG movies");
}

let speed = 75;

if (speed <= 60) {
    console.log("Safe driving");
} else if (speed <= 80) {
    console.log("Watch your speed");
} else if (speed > 80) {
    console.log("Speeding! Slow down!");
} else if (speed > 100) {
    console.log("DANGER! Way too fast!");
}

let purchaseAmount = 150;

if (purchaseAmount > 200) {
    console.log("30% off");
} else if (purchaseAmount > 100) {
    console.log("20% off");
} else if (purchaseAmount > 50) {
    console.log("10% off");
} else if (purchaseAmount <= 50) {
    console.log("No discount");
}