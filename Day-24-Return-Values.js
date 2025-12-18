// Exercise 1: Square Function

function square(num) {
    return num * num;
}

console.log(square(5));
console.log(square(12));
console.log(square(3));


// Exercise 2: Even or Odd Checker

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(100));


// Exercise 3: Full Name Builder

function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(getFullName("John", "Doe"));
console.log(getFullName("Jane", "Smith"));

let name = getFullName("Bob", "Wilson");
console.log(`Hello, ${name}`);


// Exercise 4: Calculator Returns

function calculate(num, num2, operator) {
    if (operator === "+") {
    return num + num2;
    } else if (operator === "-") {
        return num - num2;
    } else if (operator === "*") {
        return num * num2;
    } else if (operator === "/") {
        return num / num2;
    }
}

console.log(calculate(10, 5, "+"));
console.log(calculate(10, 5, "-"));
console.log(calculate(10, 5, "*"));
console.log(calculate(10, 5, "/"));

let step1 = calculate(8, 2, "*");
let step2 = calculate(step1, 4, "/");
console.log(step2);