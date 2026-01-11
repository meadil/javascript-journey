// Day 46: Number Patterns


// Pattern 1: Fibonacci Sequence


function generateFibonacci(n) {

    if (n <= 0) return [];

    if (n === 1) return [0];

    let sequence = [0, 1];

    for (let i = 2; i < n; i++) {

        let nextNumber = sequence[i - 1] + sequence[i - 2];

        sequence.push(nextNumber);

    }

    return sequence;

}


console.log(generateFibonacci(8));



// Pattern 2: Prime Number Checker


function isPrime(num) {

    if (num < 2) return false;

    for (let i = 2; i < num; i++) {

        if (num % i === 0) return false;

    }

    return true;

}


console.log(isPrime(7));

console.log(isPrime(10));

console.log(isPrime(13));



// Pattern 3: Sum of Digits


function sumOfDigits(num) {

    let numString = num.toString(); // damn, new method 💀

    let sum = 0;

    for (let i = 0; i < numString.length; i++) {

        sum += Number(numString[i]); // Number?? method? 💀

    }

    return sum;

}


console.log(sumOfDigits(123));

console.log(sumOfDigits(9876));

console.log(sumOfDigits(555));



// Practice Time


// 1. Get Nth Fibonacci Number


function getNthFibonacci(n) {

    return generateFibonacci(n)[n - 1]; // am i cheating? 💀

}


console.log(getNthFibonacci(7));

console.log(getNthFibonacci(10));


// 2. Find First N Prime Numbers


function findFirstNPrimes(n) {

    let primes = [];

    for (let i = 2; primes.length < n; i++) {

        if (isPrime(i)) primes.push(i);


    }

    return primes;

}


console.log(findFirstNPrimes(5));

console.log(findFirstNPrimes(10));


// 3. Digital Root


function digitalRoot(num) {

    while (num >= 10) {

        num = sumOfDigits(num);

    }

    return num;

}


console.log(digitalRoot(942));

console.log(digitalRoot(123456));

console.log(digitalRoot(999));


// 4. Count Prime Numbers in Range


function countPrimesInRange(start, end) {

    let count = 0;

    for (let i = start; i <= end; i++) {

        if (isPrime(i)) count++;

    }

    return count;

}


console.log(countPrimesInRange(10, 20));

console.log(countPrimesInRange(1, 30));


// MEGA CHALLENGE: Number Pattern Analyzer


let numberAnalyzer = {

    isFibonacci: function(num) {

        return generateFibonacci(100).includes(num);

    },

    getPrimeFactors: function(num) {

        let factors = [];

        for (let i = 2; i <= num; i++) {

            while (num % i === 0) {

                factors.push(i);

                num /= i;

            }

        }

        return factors;

    },

    isArmstrong: function(num) {

        let numString = num.toString();

        let sum = 0;

        for (let i = 0; i < numString.length; i++) {

            let digit = Number(numString[i]);

            sum += digit ** 3;

        }

        return sum === num;

    },

    analyze: function(num) {

        console.log(`\n=== ANALYZING ${num} ===`);
        console.log(`Prime: ${isPrime(num)}`);
        console.log(`Sum of digits: ${sumOfDigits(num)}`);
        console.log(`Digital root: ${digitalRoot(num)}`);
        console.log(`Is Fibonacci: ${this.isFibonacci(num)}`);
        console.log(`Prime factors: ${this.getPrimeFactors(num)}`);
        console.log(`Is Armstrong: ${this.isArmstrong(num)}`);

    }

}


numberAnalyzer.analyze(153);

numberAnalyzer.analyze(13);

numberAnalyzer.analyze(8);