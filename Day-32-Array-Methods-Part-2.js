// Day 32: Array Methods Part 2 - Finding & Extracting Data 🔍


// Method 1: indexOf() - Find the Position

// What it does: finds the INDEX (position) of an item. returns -1 if not found.


let fruits = ["apple", "banana", "orange", "grape", "mango"];

console.log(fruits.indexOf("orange")); // Output: 2 (postion 2)
console.log(fruits.indexOf("banana")); // Output: 1
console.log(fruits.indexOf("kiwi")); // Output: -1 (not found!)

// Why -1? Because -1 is NEVER a valid index, so it means "doesn't exist"


// Real use case:

// check if a user's favorite fruit is in stock


let inStock = ["apple", "banana", "orange"];
let userFavorite = "banana";

if (inStock.indexOf(userFavorite) !== -1) {
    console.log(`Great news! We have ${userFavorite} in stock!`)
} else (
    console.log(`Sorry, ${userFavorite} is out of stock.`)
)


// Method 2: includes() - Simple Yes/No Check

// What it does: Returns true if item exists, false if it doesn't. MUCH cleaner than indexOf()!


let colors = ["red", "blue", "green", "yellow"];

console.log(colors.includes("blue")); // output: true
console.log(colors.includes("purple")); // output: false

if (colors.includes("red")) {
    console.log("Red is in the list!");
}


// Real use case:

// check if user has permission


let userPermissions = ["read", "write", "delete"];

if (userPermissions.includes("delete")) {
    console.log("Warning: You can delte files!"); // this runs
} else {
    console.log("You cannot delete files.");
}


// Method 3: slice() - Extract a Portion

// what it does: creates a new array from a section of the original. original stays unchanged!

// Syntax: array.slice(startIndex, endIndex)


let numbers = [10, 20, 30, 40, 50, 60, 70];

let portion = numbers.slice(2, 5); // get items from 2 to 5 (not including 5)
console.log(portion);

console.log(numbers);

console.log(numbers.slice(3)); // from index 3 to the end

console.log(numbers.slice(-3)); // last 3 items (netaive index counts from end!)


// Real use case:

// get top 3 players fro leaderboard


let leaderboard = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

let topThree = leaderboard.slice(0, 3)

console.log("🏆 Top 3 Players:");
console.log(topThree);


// Challenge 1: Find and Replace position


let queue = ["Hasan", "Fatima", "Ali", "Sara", "Karim"];

let positionOfAli = queue.indexOf("Ali");

let everyoneBeforeAli = queue.slice(0, positionOfAli);

// wtf?? how am i supposed to slice everyone after ali?? 💀
// i'll do what i know hmph 😑

let personAfterAli = positionOfAli + 1;

let everyoneAfterAli = queue.slice(personAfterAli, queue.length);

// shit. too many variables 😑

console.log(everyoneBeforeAli);
console.log(everyoneAfterAli);


// Challenge 2: Menu item checker


let menu = ["burger", "pizza", "pasta", "salad", "fries", "soda"];

let order = ["pasta", "wings", "soda"];

for (let i = 0; i < order.length; i++) {
    if (menu.includes(order[i])) {
        console.log(`We have ${order[i]}`);
    } else {
        console.log(`Sorry, no ${order[i]}`);
    }
}


// Challenge 3: Top & Bottom scorers


let scores = [92, 87, 95, 78, 85, 90, 73, 88, 91, 76];

let top3 = scores.slice(0, 3);

let bottom3 = scores.slice(-3); // will this work?? 💀💀

console.log(scores.includes(85));
console.log(scores.indexOf(95));


// Challenge 4: Banned words filter


let bannedWords = ["badword1", "badword2", "spam"];

let userComment = "This is spam and badword1 content";

let words = userComment.split(" ");

for (let i = 0; i < bannedWords.length; i++) {
    if (words.includes(bannedWords[i])) {
        console.log(`Comment contains banned word: ${bannedWords[i]}`);
    } else {
        console.log("Comment is clean")
    }
}


// Challenge 5: Inventory slice master


let inventory = ["sword", "shield", "potion", "armor", "map", "torch", "rope", "key", "book", "gem"];

let itemsFrom3To5 = inventory.slice(3, 6);

let itemsExpectFirst2 = inventory.slice(2);

let minusLast3 = inventory.length - 3;

let itemsExpectLast3 = inventory.slice(0, minusLast3);

let itemsFromMiddle = inventory.slice(3, 7);

console.log(inventory.includes("key"));


// Mega challenge: Friend list manager


let friends = ["Ahmed", "Nadia", "Rafi", "Sara", "Karim", "Fatima", "Ali"];

if (friends.includes("Rafi")) {
    console.log(`Rafi is friend #${friends.indexOf("Rafi")}`);
}

let closeFriends = friends.slice(0, 3);

console.log("Is Zara your friend?")

if (friends.includes("Zara")) {
    console.log("yes, this bitch is my friend 💀");
} else {
    console.log("nope, idk this bitch 💀");
}

let seeFriends2to5 = friends.slice(2, 6);

function checkFriend(name) {
    if (friends.includes(name)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkFriend("Sara"));
console.log(checkFriend("Bob"));