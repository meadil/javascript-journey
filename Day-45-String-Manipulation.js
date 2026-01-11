// Day 45: String Manipulation


// Practice Time


// 1. Word Counter


function countWords(sentence) {

    return sentence.split(' ').length;

}


console.log(countWords("I love to code"));

console.log(countWords("JavaScript is awesome"));

console.log(countWords("Hello"));


// 2. Title Case Converter


function toTitleCase(sentence) {

    let words = sentence.split(' ');

    let result = [];

    for (let i = 0; i < words.length; i++) {

        let word = words[i];

        let capitalized = word[0].toUpperCase() + word.slice(1).toLowerCase();

        result.push(capitalized);

    }

    return result.join(' ');

}


console.log(toTitleCase("hello world"));

console.log(toTitleCase("javascript is fun"));


// 3. Email Username Extractor


function getUsername(email) {

    return email.split('@')[0];

}


console.log(getUsername("adil@gmail.com"));

console.log(getUsername("sarah.ahmed@yahoo.com"));


// 4. Reverse Words in Sentence


function reverseWordOrder(sentence) {

    return sentence.split(' ').reverse().join(' ');

}


console.log(reverseWordOrder("I love JavaScript"));

console.log(reverseWordOrder("Hello World"));


// MEGA CHALLENGE: Advanced Text Formatter


function formatText(text) {

    let words = text.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {

        if (words[i] === '') {

            words.splice(i, 1);

            i--;

        }

    }

    for (let i = 0; i < words.length; i++) {

        for (let j = 0; j < words[i].length; j++) {

            if (words[i][j] < 'a' || words[i][j] > 'z') {

                words[i] = words[i].slice(0, j) + words[i].slice(j + 1);

                j--;

            }

        }

    }

    return toTitleCase(words.join(' '));

}


console.log(formatText("  hello    WORLD!!!  "));

console.log(formatText("   jAvAsCrIpT   is   COOL!!!   "));