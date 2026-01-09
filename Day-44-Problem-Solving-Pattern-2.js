// Practice Time

// Exercise 1: Count Consonants


function countConsonants(str) {

    let count = 0;

    for (let i = 0; i < str.length; i++) {

        let char = str[i].toLowerCase();

        if ((char >= 'a' && char <= 'z') && !('aeiou'.includes(char))) {

            count++;

            console.log(`char: ${char} count: ${count}`);

        }

    }

    return count;

}


console.log(countConsonants("hello"));

console.log(countConsonants("JavaScript"));

console.log(countConsonants("aeiou"));



// Exercise 2: Count Uppercase Letters


function countUppercase(str) {

    let count = 0;

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (char >= 'A' && char <= 'Z') {

            count++;

            console.log(`char: ${char} count: ${count}`);

        }

    }

    return count;

}


console.log(countUppercase("Hello World"));

console.log(countUppercase("JavaScript"));

console.log(countUppercase("ALL CAPS"));

console.log(countUppercase("no caps here"));



// Exercise 3: Count Digits in a String


function countDigits(str) {

    let count = 0;

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (char >= '0' && char <= '9') {

            count++;

            console.log(`char: ${char} count: ${count}`);

        }

    }

    return count;

}


console.log(countDigits("abc123"));

console.log(countDigits("My phone: 555-1234"));

console.log(countDigits("No numbers here!"));



// Exercise 4: Count Specific Word Occurrences


function countWord(sentence, word) {

    let count = 0;

    let words = sentence.toLowerCase().split(" ");

    for (let i = 0; i < words.length; i++) {

        if (words[i] === word.toLowerCase()) {

            count++;

            console.log(`word: ${words[i]} count: ${count}`);

        }

    }

    return count;

}


console.log(countWord("I love to code and I love to learn", "love"));

console.log(countWord("the cat and the dog", "the"));

console.log(countWord("hello world", "goodbye"));



// MEGA CHALLENGE: Character Frequency Counter


function characterFrequency(str) {

    // 1. Create empty object: let freq = {};

    let freq = {};

    // 2. Loop through string

    for (let i = 0; i < str.length; i++) {

        // 3. For each character:

        let char = str[i];

        if (freq[char]) {

            // - If it exists in object, increase its count

            freq[char]++;

        } else {

            // - If it doesn't exist, set it to 1

            freq[char] = 1;

        }

    }
    
    // 4. Return the object

    return freq;

}

console.log(characterFrequency("hello"));

console.log(characterFrequency("aabbcc"));