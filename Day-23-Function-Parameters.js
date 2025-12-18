// Function WITHOUT parameters (yesterday)
function greet() {
    console.log("Hello!");
}

greet(); // Output: Hello!
greet(); // Output: Hello! (boring, right?)


// Function WITH parameters (TODAY! 🔥)
function greetPerson(name) {
    console.log(`Hello, ${name}!`)
}

greetPerson("Ali");      // Output: Hello, Ali!
greetPerson("Sarah");    // Output: Hello, Sarah!
greetPerson("Batman");   // Output: Hello, Batman!


// Think of parameters like empty boxes waiting to for values
function introduce(personName, personAge) {
    console.log(`My name is ${personName}`);
    console.log(`I'm ${personAge} years old.`);
}

// When you call it, you FILL those boxes with actual values
introduce("Fatima", 22);
// Output:
// My name is Fatima
// I am 22 years old

introduce("Karim", 30);
// Output:
// My name is Karim
// I am 30 years old


// Exercise 1: Simple Math
function add(num1, num2) {
    console.log(num1 + num2);
}

add(5, 3);
add(10, 25);
add(100, 200);

// Exercise 2: Personalized Greeter
function greetTime(name, time) {
    console.log(`Good ${time}, ${name}`);
}

greetTime("Hassan", "morning");
greetTime("Nadia","evening");

// Exercise 3: Multiply Function
function multiply(num1, num2) {
    console.log(num1 * num2);
}

multiply(4, 5);
multiply(7, 8);
multiply(12, 3);

// Exercise 4: Rectangle Info
function describeRectangle(length, width) {
    console.log(`Length: ${length}`);
    console.log(`Width: ${width}`);
    console.log(`Area: ${length * width}`);
}

describeRectangle(5, 10);
describeRectangle(7, 3);