// Three ways to create strings (all work the same)
let firstName = "Hasan";
let lastName = 'Ahmed';
let greeting = `Hello there`;

console.log(firstName);
console.log(lastName);
console.log(greeting);

// Combining strings

// Method 1: Using the + operator

let firstName2 = "Fatima";
let lastName2 = "Rahman";
let fullName = firstName2 + " " + lastName2; // Don't forget the space!

console.log(fullName);

// Method 2: Using template literals

let city = "Dhaka";
let country = "Bangladesh";
let location = `I live in ${city}, ${country}`;

console.log(location); // Output: I live in Dhaka, Bangladesh

// String properties and Methods

// String Length

let message = "JavaScript is fun!";
console.log(message.length); // Output: 18 (counts every character, including spaces)

// Practical use

let username = "ali";
console.log(username.length); // Output: 3
// We could check: "Is username at least 4 characters?"

// Useful String Methods

let text = "Hello World";

// Make it LOUD
console.log(text.toUpperCase()); // Output: HELLO WORLD

// Make is whisper
console.log(text.toLowerCase()); // Output: hello world

// Original text stays unchanged!
console.log(text); // Output: Hello World


// Practices

// 1. Create Your Introduction

let myFirstName = "Iftekhar";
let myLastName = "Ahmed";
let myAge = 17;
let myIntroduction = `My name is ${myFirstName} ${myLastName} and I'm ${myAge} years old.`

console.log(myIntroduction);

// 2. City Explorer

let myFavoriteCity = "New York";
let myFavoriteCountry = "USA";
let oneThingILoveAboutIt = "the energy";
let cityExplorer = `I love ${myFavoriteCity}, ${myFavoriteCountry} because of ${oneThingILoveAboutIt}!`

console.log(cityExplorer);

// 3. Unsername Validator

let newUserName = "sara";

// Check the length
console.log(`Username length: ${newUserName.length}`);

// Is it valid?
console.log(`Username length >= 5: ${newUserName.length >= 5}`);
// Output: false

// 4. Text Transformer

let myName = "adil";

let loudName = myName.toUpperCase();
let nameLength = myName.length;

console.log(`Welcome, ${loudName}! Your name has ${nameLength} characters.`);