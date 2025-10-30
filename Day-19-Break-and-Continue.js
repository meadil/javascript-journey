// Break

for (let num = 1; num <= 500; num++) {

    if (num % 3 === 0 && num % 7 === 0) {
        console.log(`Found it: ${num}`);
        break;
    }
}

console.log(`Loop Finished!`);

// Continue

for (let num = 1; num <= 10; num++) {
    let row = "";

    if (num % 3 === 0) {
        continue;
    }

    console.log(row);
}


// Break vs Continue

// Break

console.log(`=== WITH BREAK ===`);
for (num = 1; num <= 10; num++) {

    if (num === 5) {
        break;
    }

    console.log(num);
}

// Continue

console.log(`=== WITH CONTINUE ===`);
for (num = 1; num <= 10; num++) {

    if (num === 5) {
        continue;
    }

    console.log(num);
}

// Exercise 1: First Occurrence

for (let num = 1; num <= 100; num++) {

    if (num % 7 === 0 && num % 9 === 0) {
        console.log(`The first number divisible by both 7 and 9 is: ${num}`);
        break;
    }
}

// Exercise 2: Skip the Negatives

for (let num = -5; num <= 5; num++) {

    if (num < 0) {
        continue;
    }

    console.log(num);
}

// Exercise 4: Sum Even Numbers Until 100

let sum = 0;

for (let num = 1; num <= 100; num++) {

    if (num % 2 !== 0) {
        continue;
    }
    sum = sum + num;
    console.log(`Added ${num}, sum is ${sum}`);

    if (sum >= 100) {
        break;
    }
}

console.log(`Final sum is ${sum}`);