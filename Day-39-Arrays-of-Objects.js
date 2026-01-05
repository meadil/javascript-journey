// Day 39: Arrays of Objects

// Practices

// Exercise 1: Create my own product list


let products = [

    { name: "Laptop", price: 999, inStock: true },

    { name: "Phone", price: 499, inStock: false },

    { name: "Airbuds", price: 299, inStock: true }

];


console.log(products[0].name);

console.log(products[1].price);

console.log(products[2].inStock);

console.log("");



// Exercise 2: Loop through books


let books = [

    { title: "Atomic Habits", author: "James Clear", pages: 320 },

    { title: "The Alchemist", author: "Paulo Coelho", pages: 208 },

    { title: "1984", author: "George Orwell", pages: 328 }

];


for (let i = 0; i < books.length; i++) {

    console.log(`${books[i].title} by ${books[i].author}`);

}



// Exercise 3: Calculate total price


let cart = [

    { item: "Shirt", price: 25 },

    { item: "Jeans", price: 50 },

    { item: "Shoes", price: 80 }

];


let total = 0;

for (let i = 0; i < cart.length; i++) {

    total+= cart[i].price;

}

console.log(`\nTotal: $${total}`);

console.log("");



// Exercise 4: Find passing students


let students = [

    { name: "Adil", grade: 85 },

    { name: "Sara", grade: 55 },

    { name: "Karim", grade: 72 },

    { name: "Nadia", grade: 90 }

];


for (let i = 0; i < students.length; i++) {

    if (students[i].grade >= 60) {

        console.log(`${students[i].name} passed with ${students[i].grade}`)
    
    }

}



// Challenge: Movie database search


let movies = [

    { title: "Inception", year: 2010, rating: 8.8 },

    { title: "The Matrix", year: 1999, rating: 8.7 },

    { title: "Intersteller", year: 2014, rating: 8.6 },

    { title: "The Dark Knight", year: 2008, rating: 9.0 }

];


console.log("\n=== ALL MOVIES ===");

for (let i = 0; i < movies.length; i++) {

    console.log(movies[i].title);

}


console.log("\n=== RECENT MOVIES (2010+) ===");

for (let i = 0; i < movies.length; i++) {

    if (movies[i].year >= 2010) {

        console.log(`${movies[i].title} (${movies[i].year})`)

    }

}


console.log("\n=== HIGHEST RATED ===");

let highestRating = movies[0].rating;

let bestMovie = movies[0].title;


for (let i = 1; i < movies.length; i++) {

    if (movies[i].rating > highestRating) {

        highestRating = movies[i].rating;

        bestMovie = movies[i].title;

    }

}


console.log(`${bestMovie} with rating ${highestRating}`);