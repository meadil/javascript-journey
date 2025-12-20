// The Concept

// Part 1: Array Length (.length)
// count how many items are in an array

let fuits = ["apple", "banana", "orange"];
console.log(fuits.length); // output: 3

let numbers = [10, 20, 30, 40, 50];
console.log(numbers.length); // output: 5

let emptyBox = [];
console.log(emptyBox.length); // output: 0


// Part 2: Looping Through Arrays

// Bad way (doesn't scale):

let colors = ["red", "green", "blue", "yellow"];

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);

// Smart way (use a loop):

let colors1 = ["red", "green", "blue", "yellow"];

for (let i = 0; i < colors1.length; i++) {
    console.log(colors[i]);
}


// Practice Time

// Exercise 1: Print each student

let students = ["Anika", "Rafi", "Sara", "Karim", "Fatima"];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}


// Exercise 2: Numbered list

let tasks = ["Buy milk", "Study JS", "Exercise", "Read book"];

for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
}


// Exercise 3: Sum all numbers

let scores = [85, 90, 78, 92, 88];
let sum = 0;

for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
    
    // can i console.log here?
}

console.log(`Total: ${sum}`);


// Exercise 4: Find the largest number

let numbers1 = [23, 67, 12, 89, 45, 34];
let largest = numbers1[0];

for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] > largest) {
        largest = numbers1[i];
    }
}

console.log(`Largest: ${largest}`);


// Exercise 5: Count even numbers

let numbers2 = [10, 15, 22, 33, 40, 51, 62];
let count = 0;

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 === 0) {
        count++
    }
}

console.log(`Even numbers: ${count}`);


// Challenge 1: Find the smallest number

let numbers3 = [23, 67, 12, 89, 45, 34];
let smallest = numbers3[0];

for (let i = 0; i < numbers3.length; i++) {
    if (numbers3[i] < smallest) {
        smallest = numbers3[i];
    }
}

console.log(`Smallest: ${smallest}`);


// Challenge 2: Avearge calculator

let grades = [88, 92, 75, 95, 83];
let sum1 = 0;

for (let i = 0; i < grades.length; i++) {
    sum1 += grades[i];
}

console.log(`Average is: ${sum1 / grades.length}`);