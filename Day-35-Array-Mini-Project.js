// Day 35: Array Mini-Project

// Project Planning
// Before writing any code, let's break down what we need:

// Data:
// - Array of test scores (numbers)

// Functions we'll create:
// 1. calculateAverage(scores) - returns the average
// 2. findHighest(scores) - returns the highest score
// 3. findLowest(scores) - returns the lowest score
// 4. isPassingGrade(average) - returns true/false if passing (60+)
// 5. displayReport(scores) - shows everything nicely



// Step 1: Create the Test Data

// Our student's test scores

let testScores = [85, 92, 78, 90, 88];

console.log(`Test Scores: ${testScores}`);
console.log(`Total Tests: ${testScores.length}`);

// Simple start! We have our data ready.



// Step 2: Calculate Average Function


function calculateAverage(scores) {

    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    return sum / scores.length;

}

let avg = calculateAverage(testScores);

console.log(`Average: ${avg}`);



// Step 3: Find Highest Score Function


function findHighest(scores) {

    let highest = scores[0];

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > highest) {
            highest = scores[i];
        }
    }

    return highest;

}

let highScore = findHighest(testScores);

console.log(`Highest Score: ${highScore}`);



// Step 4: Find Lowest Score Function


function findLowest(scores) {

    let lowest = scores[0];

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < lowest) {
            lowest = scores[i];
        }
    }

    return lowest;

}

let lowScore = findLowest(testScores);

console.log(`Lowest Score: ${lowScore}`);



// Step 5: Passing Grade Checker Function


function isPassingGrade(average) {
    return average >= 60;
}

let passing = isPassingGrade(avg);

console.log(`Passing? ${passing}`);

console.log(""); // space :)



// Step 6: Add a Grade Letter Function


function getLetterGrade(average) {

    if (average >= 90) {
        return "A";
    } else if (average >= 80) {
        return "B";
    } else if (average >= 70) {
        return "C";
    } else if (average >= 60) {
        return "D";
    } else {
        return "F";
    }

}



// Step 7: Calculate Score range


function getScoreRange(scores) {

    let highest = findHighest(scores);
    let lowest = findLowest(scores);

    return highest - lowest;
    
}



// Step 8: Display Report Function (The Grand Finale!)


function displayReport(scores) {

    console.log("============================");
    console.log("     GRADE TRACKER REPORT    ");
    console.log("============================");
    console.log("");
    console.log(`Test Scores: ${scores}`);
    console.log(`Number of Tests: ${scores.length}`);
    console.log("");

    let average = calculateAverage(scores);
    let highest = findHighest(scores);
    let lowest = findLowest(scores);
    let passing = isPassingGrade(average);
    let letter = getLetterGrade(average);
    let range = getScoreRange(scores);

    console.log(`Average Score: ${average.toFixed(2)}`);
    console.log(`Highest Score: ${highest}`);
    console.log(`Lowest Score: ${lowest}`);
    console.log(`Letter Grade: ${letter}`);
    console.log(`Score Range: ${range}`);
    console.log("");

    if (passing) {
        console.log("✅ Status: PASSING");
    } else {
        console.log("❌ Status: FALLING - Need to improve!");
    }

    console.log("");
    console.log("============================");

}


displayReport(testScores);

console.log("");

// Let's try with different students

let studentA = [95, 88, 92, 87, 90];
let studentB = [55, 62, 58, 50, 61];
let studentC = [100, 100, 98, 99, 100];

displayReport(studentA);

console.log("");

displayReport(studentB);

console.log("");

displayReport(studentC);