// with let i can change the value of the variable
let score = 0;
console.log(score); // output: 0

score = 10;         // update it
console.log(score); // output: 10

score = score + 5;  // use current value to calculate new one
console.log(score); // output: 15

// with const i cannot change the value of the variable
const maxScore = 100;
console.log(maxScore); // output: 100
// maxScore = 200 ERROR! can't reassign const