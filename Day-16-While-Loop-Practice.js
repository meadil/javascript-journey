// Problem 1: Adding number together

let sum = 0;
let number = 1;

while (number <=100) {
    sum = sum + number;
    number = number + 1;
}

console.log("Sum of 1 to 100 i: " + sum);


// problem 2: Finding a specific number

let current = 51;

while (current % 7 !== 0) {
    current = current + 1;
}

console.log("First number divisible by 7 after 50: " + current);

// Exercise 1: Birthday Countdown

let daysLeft = 10;

while (daysLeft > 0) {
    console.log("Days until my birthday:", daysLeft);
    daysLeft = daysLeft - 1;
}

console.log("🎉 IT'S MY BIRTHDAY! 🎉");


// Exercise 2: Level Up!

let level = 1;

while (level <= 5) {
    console.log("Level:", level);
    level = level + 1;
}

console.log("You beat the game! 🏆");


// Snooze Button 😴

let snoozes = 1;

while (snoozes <= 3) {
    console.log("Snooze #" + snoozes)
    snoozes = snoozes + 1;
}

console.log("WAKE UP! 😤");


// Challenge 1: Say someone good morning

let counter = 1;

while (counter <= 4) {
    console.log("Good morning bro 😜");
    counter = counter + 1;
}


// Challenge 2: Countdown

let countNumber = 5;

while (countNumber >= 1) {
    console.log("The movie is gonna start in ", countNumber ,"seconds.");
    countNumber = countNumber - 1;
}


// Challenge 3: Print "Yo" x times

let count = 1;

while (count <= 3) {
    console.log("Yo bro!");
    count = count + 1;
}


// Practice exercises

// 1. Print "Let's go! 🚀" 5 times

let counting = 1;

while (counting <= 5) {
    console.log("Let's go! 🚀");
    counting = counting + 1;
}

// 2. Count from 10 down to 1

let counterr = 10;

while (counterr > 0) {
    console.log(counterr);
    counterr = counterr - 1;
}

// 3. Print your favorite emoji 7 times

let favoriteEmoji = "💀";
let counts = 1;

while (counts <= 10) {
    console.log(favoriteEmoji);
    counts = counts + 1;
}

let score = 0;
let round = 1;

while (round <= 5) {
    score = score + 10;
    round = round + 1;
}

console.log("Total score: " + score);