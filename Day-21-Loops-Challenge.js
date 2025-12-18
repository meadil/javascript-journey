// FizzBuzz: Print numbers 1-50, but "Fizz" for multiples of 3, "Buzz" for 5, "FizzBuzz" for both

for (let num = 1; num <= 100; num++) {

    if (num % 3 === 0 && num % 5 === 0) {
        console.log(`FizzBuzz`);
    } else if (num % 3 === 0) {
        console.log(`Fizz`);
    } else if (num % 5 === 0) {
        console.log(`Buzz`);
    } else {
        console.log(num);
    }

}