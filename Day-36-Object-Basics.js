// My first object

let adil = {                      // it's me :)
    name: "Adil",
    age: 17,
    city: "Sylhet"
};

console.log(adil);


// Accessing Properties (Dot Notation)

let person = {
    name: "Adil",
    age: 17,
    isStudent: true,
    city: "Sylhet"
};

console.log(person.name);         // output: Adil
console.log(person.age);          // output: 17
console.log(person.isStudent);    // output: true
console.log(person.city);         // output: Sylhet


// Building Different Objects

// A book

let book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    pages: 208,
    isAvailable: true
};

console.log(`${book.title} by ${book.author}`);


// A car

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2023,
    color: "blue"
};

console.log(`I drive a ${car.color} ${car.brand}`);


// A phone

let phone = {
    brand: "Samsung",
    model: "Galaxy S23",
    storage: 256,
    hasFaceID: true
};

console.log(`Storage: ${phone.storage}GB`);


// Practice time

// Exercise 1: Create my own person object

let me = {
    firstName: "Iftekhar",
    lastName: "Ahmed",
    age: 17,
    favoriteColor: "Green",
    isStudent: true
};

console.log(me.firstName);
console.log(me.lastName);
console.log(me.age);
console.log(me.favoriteColor);
console.log(me.isStudent);


// Exercise 2: Book collection

let myFavoriteBook = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    hasRead: false
};

console.log(`${myFavoriteBook.title} by ${myFavoriteBook.author} was published in ${myFavoriteBook.year}.`);


// Exercise 3: Phone specs

let iPhoneAir = {
    brand:"Apple",
    model: "iPhone Air",
    price: 999,
    inStock: true
};

console.log(`Brand: ${iPhoneAir.brand}`);
console.log(`Price: $${iPhoneAir.price}`);
console.log(`The ${iPhoneAir.brand} ${iPhoneAir.model} cost $${iPhoneAir.price}`);


// Exercise 4: Multiple objects

let car1 = {
    brand: "Toyota",
    year: 2025,
    color: "Red"
};

let car2 = {
    brand: "BMW",
    year: 2024,
    color: "Blue"
};

let car3 = {
    brand: "Tesla",
    year: 2021,
    color: "Black"
};

console.log(`Car 1: ${car1.brand} ${car1.year}`);
console.log(`Car 2: ${car2.brand} ${car2.year}`);
console.log(`Car 3: ${car3.brand} ${car3.year}`);


// Challenge: Student report card

let studentReport = {
    name: "Adil",
    studentID: 116008,
    mathGrade: 70,
    englishGrade: 95,
    scienceGrade: 80,
    isPassing: true
};

console.log(`Name: ${studentReport.name}`);
console.log(
    `Math: ${studentReport.mathGrade}
English: ${studentReport.englishGrade}
Science: ${studentReport.scienceGrade}`
);

let average = (studentReport.mathGrade + studentReport.englishGrade + studentReport.scienceGrade) / 3;

if (average >= 60) {
    studentReport.isPassing = true;
    console.log("Passed!");
} else {
    studentReport.isPassing = false;
    console.log("Failed.");
}