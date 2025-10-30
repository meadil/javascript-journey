// The Challenge: Number Guesser Game

let secretNumber = 42;
let guess = 50;
let attempts = 0;
let maxAttempts = 3;

if ((guess < 1) || (guess > 100)) {
    console.log("Invalid guess! Pick a number between 1 and 100.");
} else if (guess === secretNumber) {
    console.log("🎉 Correct! You guessed it!");
} else if (Math.abs(guess - secretNumber) <= 5) {
    console.log("🔥 Hot! You're really close!");
} else if (Math.abs(guess - secretNumber) <= 10) {
    console.log("Warm! Getting closer!");
} else if (Math.abs(guess - secretNumber) <= 20) {
    console.log("Cold! Far away.");
} else if (guess < secretNumber) {
    console.log("Too low! Try again.");
} else if (guess > secretNumber) {
    console.log("Too high! Try again.");
}