// Personal Info Card Program
// This program displays my information in a formatted card.

// Store your personal information
const firstName = "Iftekhar"; // const because my name won't change
const lastName = "Adil";
const age = 17;
const city = "Dhaka";
const country = "Bangladesh";
const favoriteLanguage = "JavaScript";
const yearsOfExperience = 0;

// Calculate birth year (current year minus age)
const currentYear = 2025;
const birthYear = currentYear - age;

// Create a fun fact by combining strings
const funFact = `I am learning ${favoriteLanguage} to become a developer.`

// Display the personal info card
console.log("==================================");
console.log("       PERSONAL INFO CARD");
console.log("==================================");
console.log("");
console.log(`Name: ${firstName} ${lastName}`);
console.log(`Age: ${age} years old`);
console.log(`Born in: ${birthYear}`);
console.log(`Location: ${city}, ${country}`);
console.log(`Favorite Language: ${favoriteLanguage}`);
console.log("");
console.log(`Fun Fact: ${funFact}`);
console.log("");
console.log("==================================");