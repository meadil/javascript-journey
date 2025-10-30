// Exercise 1: Count from 1 to 20

for (let count = 1; count <= 20; count++) {
    console.log(count);
}


// Exercise 2: Count only the EVEN numbers from 1 to 30

for (let countt = 0; countt <= 30; countt += 2) {
    console.log(countt);
}


// Another way

for (let countttt = 1; countttt <= 30; countttt++) {
    if (countttt % 2 === 0) {
        console.log(countttt);
    }
}


// Exercise 3: Countdown from 15 to 1

for (let counttt = 15; counttt >= 1; counttt--) { // How can I use if statement here??
    console.log(counttt);
}

console.log("Liftoff!");


// Anotehr way

for (let counttttt = 15; counttttt >= 0; counttttt--) {
    if (counttttt === 0) {
        console.log("Liftoff!");
    } else {
        console.log(counttttt);
    }
}

// Exercise 4: Multiplication practice

for (let multiplier = 1; multiplier <= 10; multiplier++) { //  and how can i make this one and print "7 * x = x"??
    console.log("7 * " + multiplier + " = " + (7 * multiplier));
}