// Day 47: Debugging Practice


// Practice Time


// 1. Fix the Greeting Function


// This code should greet someone, but it's broken!

function greetPerson(name) {

    console.log("Hello, " + name + "!");  // Find & fix the bug

}

greetPerson("Adil");

// Expected: "Hello, Adil!"

// Fixed: the variable name was spelled wrong 💀



// 2. Debug the Sum Function


// This should sum all numbers in an array, but something's wrong

function sumArray(numbers) {

    let sum = 0;

    // fixed this 👇 to 0

    for (let i = 0; i < numbers.length; i++) {  // Bug is here!

        console.log(`🔍 Current iteration: ${i}`);
    
        sum += numbers[i];
  
    }

    console.log(`🧮 Final sum: ${sum}`);
  
    return sum;

}

console.log(sumArray([10, 20, 30]));

// Expected: 60

// Actual: 50 (it's missing something!)

// Fixed: the loop should start from index 0, not 1 💀



// 3. Find Multiple Bugs


// This code has 3 bugs! Find and fix them all.

function findLargest(numbers) {

  let largest = numbers[0];

  //     fixed this 👇 to '<'
  
  for (let i = 0; i < numbers.length; i++) {  // Bug #1
    
    if (numbers[i] > largest) {  // Bug #2 (happens because of #1)

        // and 👇 this to '='
      
        largest = numbers[i];  // Bug #3

    }

  }
  
  return largest;

}

console.log(findLargest([45, 67, 23, 89, 12]));

// Expected: 89

// Fixed:

// #Bug 1: using <= instead of < 💀

// #Bug 2: idk 😑

// #Bug 3: used == instead of = 💀



// 4. Debug with Console Logs


// This code should check if a number is even, but always returns false

function isEven(num) {

    // this 👇 should be 'num % 2 === 0'  instead of just 'num % 2'
  
    let result = num % 2 === 0;

    return result;

}

console.log(isEven(4));   // Expected: true, Getting: 0, because 4 % 2 = 0

console.log(isEven(7));   // Expected: false, Getting: 1, because 7 % 2 = 1

// Fixed: math problem 😑



// 5. The Mysterious Loop


// This should print 1 to 5, but something weird happens

//   why tf a semicolon is 👇 here?? 😑

for (let i = 1; i < 6; i++) {  // Spot the sneaky bug!

    // wtf?? it looks correct 💀

    console.log(i);

}

// What happens? Why? Fix it!

// Fixed: removed the semicolon after the for loop declaration 💀



// MEGA CHALLENGE: Debug the Grade Calculator


// This program should calculate average and assign letter grade

// But it has 5 bugs! Find them all!

function calculateGrade(scores) {

    // Bug #1: Wrong initial value (it seems okay 💀)

    let sum = 0;
  
    // Bug #2: Loop condition

    // '<=' instead of '<' again 🤦‍♂️👇

    for (let i = 0; i < scores.length; i++) {

        sum += scores[i];

    }
  
    // Bug #3: Missing parentheses (what?? 💀)

    let average = sum / scores.length;
  
    let grade;
  
    // Bug #4: Wrong comparison operator

    if (average >= 90) {

        grade = "A";

    } else if (average >= 80) {

        grade = "B";

        // '=' instead of '>=' here 😑👇

    } else if (average >= 70) {  // This is the bug!

        grade = "C";

    } else {

        grade = "F";

    }
  
    // Bug #5: Returning wrong value

    return grade;

}

let testScores = [85, 92, 78, 90];

console.log(calculateGrade(testScores));

// Expected: "B" (average is 86.25)