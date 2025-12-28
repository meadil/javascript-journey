// Challenge 1: Sum All Numbers

let numbers = [10, 25, 30, 5, 20];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(`Total: ${sum}.`);


// Challenge 2: Find the Largest Number

let scores = [67, 89, 45, 92, 73, 88];
let largest = scores[0];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] > largest) {
        largest = scores[i];
    }
}

console.log(`Largest number: ${largest}`);


// Challenge 3: Count Even Numbers

let numbers1 = [12, 7, 18, 5, 22, 9, 14];
let count = 0;

for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] % 2 === 0) {
        count++;
    }
}

console.log(`Even numbers: ${count}`);


// Bonus 1: Find the Smallest Number

let scores1 = [67, 89, 45, 92, 73, 88];
let smallest = scores1[0];

for (let i = 0; i < scores1.length; i++) {
    if (scores1[i] < smallest) {
        smallest = scores1[i];
    }
}

console.log(`Smallest number: ${smallest}`);


// Bonus 2: Average Calculator

let numbers2 = [10, 25, 30, 5, 20];
let sum1 = 0;

for (let i = 0; i < numbers2.length; i++) {
    sum1 += numbers2[i];
}

console.log(`The average: ${sum1 / numbers2.length}`);


// Bonus 3: Count Odd Numbers

let numbers3 = [12, 7, 18, 5, 22, 9, 14];
let count1 = 0;

for (let i = 0; i < numbers3.length; i++) {
    if (numbers3[i] % 2 !== 0) {
        count1++
    }
}

console.log(`Odd numbers: ${count1}`);


// Ultra Bonus: Second Largest Number

let scores2 = [88, 95, 76, 95, 82, 90];
let highestScore = Math.max(scores2[0], scores2[1]);
let secondHighestScore = Math.min(scores2[0], scores2[1]);

for (let i = 2; i < scores2.length; i++) {
    if (scores2[i] > highestScore) {
        secondHighestScore = highestScore;
        highestScore = scores2[i];
    }
    
    else if (scores2[i] > secondHighestScore) {
        secondHighestScore = scores2[i];
    }
}

console.log(`Highest score: ${highestScore}`);
console.log(`Second highest score: ${secondHighestScore}`);