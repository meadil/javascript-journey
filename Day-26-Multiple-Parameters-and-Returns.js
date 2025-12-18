// Multiple Parameters in action

// Example 1: Rectangle Area (2 parameters)

function calculateRectangleArea(length, width) {
    return length * width;
}

console.log(calculateRectangleArea(20, 15));

let area1 = calculateRectangleArea(30, 10);
let area2 = calculateRectangleArea(40, 20);

console.log(`Area 1: ${area1}`);
console.log(`Area 2: ${area2}`);

// Example 2: Finding Maximum (3 parameters)

function findMax(a, b, c) {
    if (a >= b && a >= c) {
        return `${a} is bigger!`
    } else if (b >= a && b >= c) {
        return `${b} is bigger!`
    } else {
        return `${c} is bigger!`
    }
}

console.log(findMax(7, 3, 9));
console.log(findMax(100, 30, 60));

let winner = findMax(50, 80, 20);

console.log(winner);

// Example 3: Restaurent Bill Calculator (4 parameters)

function calculateTotal(mealPrice, taxRate, tipPercent, discount) {
    let tax = mealPrice * taxRate;

    let tip = mealPrice * tipPercent;

    let subTotal = mealPrice + tax + tip;

    let total = subTotal - discount;

    return total;
}

let bill = calculateTotal(50, 0.10, 0.15, 5);

console.log(`You bill is $${bill}.`);

// Practice Time

// Exercise 1: Calculate Perimeter

function calculateRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

console.log(calculateRectanglePerimeter(5, 10));
console.log(calculateRectanglePerimeter(7, 3));

// Exercise 2: Average of three numbers

function findAverage(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

console.log(findAverage(10, 20, 30));
console.log(findAverage(5, 10, 15));
console.log(findAverage(100, 200, 50));

// Exercise 3: Full name with middle initial

function createFullName(firstName, middleInitial, lastName) {
    return `${firstName} ${middleInitial}. ${lastName}`;
}

console.log(createFullName('John', 'A', 'Doe'));
console.log(createFullName('Jane', 'B', 'Smith'));
console.log(createFullName('Ali', 'M', 'Rahman'));

// Exercise 4: Shopping Cart Total

function calculateCartTotal(item1Price, item2Price, item3Price, shippingFee) {
    return item1Price + item2Price + item3Price + shippingFee;
}

function applyDiscount(total, discountPercent) {
    return total - (total * discountPercent);
}

let cartTotal = calculateCartTotal(25, 40, 15, 10);

console.log(`Cart Total: $${cartTotal}`);

let finalPrice = applyDiscount(cartTotal, 0.20);

console.log(`After discount: $${finalPrice}`);

// Exercise 5: Calculate BMI

function calculateBMI(weightKg, heightM) {
    return weightKg / (heightM * heightM);
}

function categorizeBMI(bmi) {
    if (bmi > 30) {
        return 'Obese';
    } else if (bmi >= 25) {
        return 'Overweight';
    } else if (bmi >= 18.5) {
        return 'Normal';
    } else {
        return 'Underweight';
    }
}

let myBMI = calculateBMI(70, 1.75);
let category = categorizeBMI(myBMI);

console.log(`BMI: ${myBMI}, Category: ${category}`);

// Coffee Shop Pricing

// first, i create the function
// second, i check if the coffee's size is small (12oz). if it is, i charge $3. (for all of these, i return the result/value/whatever)
// third, i check if the coffee's size is medium (16oz). if it is, i charge $4.
// fourth, i check if the coffee's size is large (20oz). if it is, i charge $5.
// fifth, i check if the coffee's size is extra (24oz). if it is, i charge $6.

// i try different coffee orders, and print them :)