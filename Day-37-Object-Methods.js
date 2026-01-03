// Day 37: Object Methods - Objects That DO Things!

// The Syntax

let person = {

    name: "Adil",
    age: 17,

    greet: function() {  // a function inside an object
        console.log("Hello! My name is Adil.");
    }

};

person.greet();


// Using "this" - The Magic Keyword

let person1 = {

    name: "Adil",
    age: 17,

    greet: function() {
        console.log(`Hello! My name is ${this.name}.`)
        console.log(`I'm ${this.age} years old.`)
    }

}

person.greet();


// More examples

// Example 1: A dog object

let dog = {

    name: "Buddy",
    breed: "Golden Retriever",
    age: 3,

    bark: function() {
        console.log(`${this.name} says: Woof! Woof!`);
    },

    getInfo: function() {
        console.log(`${this.name} is a ${this.age}-year-old ${this.breed}.`);
    }

};

dog.bark();
dog.getInfo();


// Example 2: A simple calculator object

let calculator = {

    add: function(a, b) {
        return a + b;
    },

    sunstract: function(a, b) {
        return a - b;
    },

    multiply: function(a, b) {
        return a * b;
    }

};

console.log(calculator.add(10, 5));
console.log(calculator.multiply(4, 7));


// Practice time



// Exercise 1: Create my own person object with a method


let me = {

    firstName: "Iftekhar",

    lastName: "Ahmed",

    favoriteHobby: "Reading",

    introduce: function() {

        console.log(`Hi! I'm ${this.firstName} ${this.lastName} and I love ${this.favoriteHobby}!`);

    }

}

me.introduce();

console.log("");



// Exercise 2: Bank account


let bankAccount = {

    balance: 1000,

    checkBalance: function() {

        console.log(`Your balance is $${this.balance}`);

    },

    deposit: function(amount) {

        this.balance+= amount;

        console.log(`Deposited: $${amount}. New balance: $${this.balance}`);

    },

    withdraw: function(amount) {

        this.balance-= amount;

        console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);

    }

}


bankAccount.checkBalance();
console.log("");

bankAccount.deposit(500);
console.log("");

bankAccount.withdraw(200);
console.log("");



// Exercise 3: Rectangle calculator


let rectangle = {

    length: 10,

    width: 5,

    calculateArea: function() {

        return this.length * this.width;

    },

    calculatePerimeter: function() {

        return 2 * (this.length + this.width);

    },

    describe: function() {

        console.log(`Rectangle: ${this.length} x ${this.width}
Area: ${this.calculateArea()}
Perimeter: ${this.calculatePerimeter()}`);

    }

}


console.log(rectangle.calculateArea());
console.log("");

rectangle.describe();
console.log("");



// Exercise 4: Counter object


let counter = {

    count: 0,

    increment: function() {

        this.count++;

        console.log(`Count: ${this.count}`);

    },

    decrement: function() {

        this.count--;

        console.log(`Count: ${this.count}`);

    },

    reset: function() {

        this.count = 0;

        console.log("Count reset to 0");

    },

    getValue: function() {

        return this.count;

    }

}


counter.increment();
console.log("");

counter.increment();
console.log("");

counter.increment();
console.log("");

counter.decrement();
console.log("");

console.log(counter.getValue());
console.log("");

counter.reset();
console.log("");



// Challenge: Student grade tracker


let student = {

    name: "Adil",

    grade: 80,

    getLetterGrade: function() {

        if (this.grade >= 90) {
            return "A";
        } else if (this.grade >= 80) {
            return "B";
        } else if (this.grade >= 70) {
            return "C";
        } else if (this.grade >= 60) {
            return "D";
        } else {
            return "F";
        }

    },

    isPassing: function() {

        if (this.grade >= 60) {
            return "Passed";
        } else {
            return "Failed";
        }

    },

    improve: function(points) {

        this.grade+= points;

        console.log(`Grade improved! New grade: ${this.grade}`);

    },

    displayReport: function() {

        console.log(`
Student: ${this.name}
Grade: ${this.grade} (${this.getLetterGrade()})
Status: ${this.isPassing()}`);

    }

}


student.displayReport();

student.improve(10);

student.displayReport();