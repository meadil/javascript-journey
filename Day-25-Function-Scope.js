// Example 1: Local Variables Stay Private

// global variable - everyone can access this

let favoriteColor = "blue";

function showMyFavorite() {
    // Local variable - ONLY this function can use it
    let mySecret = "I love pizza";

    console.log(favoriteColor);  // can access global variable
    console.log(mySecret);       // can access its own local variable
}

showMyFavorite();
// Output: blue
// Output: I love pizza

console.log(favoriteColor);  // works - global variable
console.log(mySecret);       // ERROR! mySecret doesn't exist here

// Example 2: Functions can create tehir own versions

let score = 100;  // global score

function playerOne() {
    let score = 50;  // local score (different from global)
    console.log(`Player 1 score: ${score}`);
}

function playerTwo() {
    let score = 75; // another local score
    console.log(`Player 2 score: ${score}`);
}

playerOne(); // Output: Player 1 score: 50
playerTwo(); // Output: Player 2 score: 75
console.log(`Global score: ${score}`);  // Output: Global score: 100

// Example 3: Modifying global variables (Be careful!)

let bankBalance = 1000;  // Global

function withdraw(amount) {
    bankBalance -= amount; // changes the global variable
    console.log(`Withdrew: ${amount}`)
}

function deposit(amount) {
    bankBalance += amount; // also changes global
    console.log(`Deposited: ${amount}`)
}

console.log(`Starting balance: ${bankBalance}`); // 1000
withdraw(200); // Withdrew: 200
deposit(500);  // Deposited: 500
console.log(`Final balance: ${bankBalance}`)

// Practice time
// Exercise 1: Spot the scope

let animal = "dog";

function zoo() {
    let animal = "elephant";
    console.log(`Inside function: ${animal}`)
}

zoo(); // this will call the function "zoo", which will print "Inside function: elephant"
console.log(`Outside function: ${animal}`); // this will print "Outside function: dog"

// Exercise 2: Fix the bug

let userName = "Anika";

function greetUser() {
    let userName = "Anika";
    console.log(`Hello, ${userName}`);
}

// i could put the variable here too, couldn't i?

greetUser();
console.log(`User is: ${userName}`); // to fix this i have created a "userName" variable outside the function

// Exercise 3: Counter function

let totalClicks = 0; // this one's global

function clickButton() {
    let clickMessage = "Button clicked!" // this one's local
    totalClicks++; // this updates the global one

    console.log(clickMessage); // this prints the local one
    console.log(`Total clicks: ${totalClicks}`); // this prints the global one's updated version
}

clickButton(); // these three call the function
clickButton();
clickButton();

// Exercise 4: Temperature converter with scope

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32; // will this work? i haven't peek to the solutions yet 💀
}

let temp1 = celsiusToFahrenheit(0);
let temp2 = celsiusToFahrenheit(100);

console.log(`0°C is ${temp1} °F`);
console.log(`100°C is ${temp2} °F`);