// PROJECT: STRING UTILITY LIBRARY


console.log("🔧 ===== STRING UTILITIES ===== 🔧\n");


// ===== BASIC TRANSFORMATIONS =====


function capitalize(str) {

    if (str.length === 0) return str;

    return str[0].toUpperCase() + str.slice(1).toLowerCase();

}


function reverse(str) {

    return str.split('').reverse().join('');

}


function toTitleCase(str) {

    let words = str.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {

        if (words[i].length > 0) {

            words[i] = words[i][0].toUpperCase() + words[i].slice(1);

        }
        
    }

    return words.join(' ');

}


// ===== ANALYSIS FUNCTIONS =====


function countWords(str) {

    let trimmed = str.trim();

    if (trimmed.length === 0) return 0;

    return trimmed.split(' ').length;

}


function countVowels(str) {

    let count = 0;

    let vowels = 'aeiouAEIOU';

    for (let i = 0; i < str.length; i++) {

        if (vowels.includes(str[i])) {

            count++;

        }

    }

    return count;

}


function isPalindrome(str) {

    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let reversed = cleaned.split('').reverse().join('');

    return cleaned === reversed;

}


// ===== FORMATTING FUNCTIONS =====


function truncate(str, maxLength) {

    if (str.length <= maxLength) {

        return str;

    }

    return str.slice(0, maxLength) + '...';

}


function removeSpaces(str) {

    return str.split(' ').join('');

}


function kebabCase(str) {

    return str.toLowerCase().trim().split(' ').join('-');

}


// ===== BONUS =====


function extractNumbers(str) {

    let numbers = [];

    let currentNumber = '';
    
    for (let i = 0; i < str.length; i++) {

        if (str[i] >= '0' && str[i] <= '9') {

            currentNumber += str[i];

        } else {

            if (currentNumber !== '') {

                numbers.push(Number(currentNumber));

                currentNumber = '';

            }

        }

    }
    
    if (currentNumber !== '') {

        numbers.push(Number(currentNumber));

    }
    
    return numbers;

}


// ===== COMPREHENSIVE TESTING =====


console.log("📝 BASIC TRANSFORMATIONS:");

console.log("capitalize('hello world'):", capitalize('hello world'));

console.log("reverse('code'):", reverse('code'));

console.log("toTitleCase('hello world'):", toTitleCase('hello world'));


console.log("\n🔍 ANALYSIS:");

console.log("countWords('I love coding'):", countWords('I love coding'));

console.log("countVowels('JavaScript'):", countVowels('JavaScript'));

console.log("isPalindrome('racecar'):", isPalindrome('racecar'));

console.log("isPalindrome('hello'):", isPalindrome('hello'));


console.log("\n✨ FORMATTING:");

console.log("truncate('Hello World', 5):", truncate('Hello World', 5));

console.log("removeSpaces('I love JS'):", removeSpaces('I love JS'));

console.log("kebabCase('Hello World'):", kebabCase('Hello World'));


console.log("\n🔢 BONUS:");

console.log("extractNumbers('I have 2 cats and 3 dogs'):", extractNumbers('I have 2 cats and 3 dogs'));

console.log("\n✅ All tests complete!");