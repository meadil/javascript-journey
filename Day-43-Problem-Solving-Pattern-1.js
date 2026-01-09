// Day 43: Problem Solving Pattern 1

// Challenge 1: Reverse a String


function reverseString(str) {

    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {

        reversed+= str[i];

    }

    return reversed;

}


console.log(reverseString("hello"));

console.log(reverseString("cat"));

console.log(reverseString("dog"));



function reverseString2(str) {

    let letters = str.split("");

    let reversed = letters.reverse();

    let result = reversed.join("");

    return result;

}


console.log(reverseString2("code"));

console.log(reverseString2("JavaScript"));

console.log(reverseString2("book"));



function reverseString3(str) {

    return str.split("").reverse().join("");

}


console.log(reverseString3("bro"));

console.log(reverseString3("hell"));


// Challenge 2: Palindrome Checker



function isPalindrome(str) {

    let reversed = str.split("").reverse().join("");

    return str === reversed;

}


console.log(isPalindrome("racecar"));

console.log(isPalindrome("hello"));

console.log(isPalindrome("level"));

console.log(isPalindrome("code"));



// Practice Time


// Exercise 1: Reverse Each Word


function reverseWords(sentence) {

    // 1. split the sentence into words

    let words = sentence.split(" ");

    console.log(`1. ${words}`);

    let result = "";

    console.log(`2. ${result}`);

    for (let i = 0; i < words.length; i++) {

        // 2. split the words into letters separately

        let letters = words[i].split("");

        console.log(`3. ${letters}`);

        let reversed = letters.reverse();

        console.log(`4. ${reversed}`);

        let joined = reversed.join("");

        console.log(`5. ${joined}`);

        result+= joined;

        console.log(`6. ${result}`);

        if (i < words.length - 1) {

            result+= " ";

        }

    }

    return result

}

console.log(reverseWords("I love coding"));


// Exercise 2: Count Palindromes



function countPalindromes(words) {

    let count = 0;

    console.log(`7. ${count}`);

    for (let i = 0; i < words.length; i++) {

        if (words[i] === words[i].split("").reverse().join("")) {

            count++

            console.log(`8. ${count}`);

        }

    }

    return count;

}


let words = ["racecar", "hello", "level", "world", "noon"];

console.log(countPalindromes(words));


// Exercise 3: Reverse Only Letters


function reverseOnlyLetters(str) {

    let letters = [];

    console.log(`9. ${letters}`);

    for (let i = 0; i < str.length; i++) {

        if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {

            letters.push(str[i]);

            console.log(`10. ${letters}`);

        }

    }
    

    let reversed = letters.reverse();

    console.log(`11. ${reversed}`);

    let result = "";

    console.log(`12. ${result}`);

    let letterIndex = 0;

    console.log(`13. ${letterIndex}`);


    for (let i = 0; i < str.length; i++) {

        if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {

            result+= reversed[letterIndex];

            console.log(`14. ${result}`);

            letterIndex++;

            console.log(`15. ${letterIndex}`);

        } else {

            result+= str[i];

            console.log(`16. ${result}`);

        }

    }

    return result;

}

console.log(reverseOnlyLetters("ab-cd"));

console.log(reverseOnlyLetters("a-bC-dEf"));

console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));