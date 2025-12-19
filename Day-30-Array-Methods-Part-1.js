// Day 30: Array Methods Part 1 - Changing Arrays

// Method 1: push() - Add to End

let shoppingList = ["milk", "bread", "eggs"]; // start with a shopping list
console.log(shoppingList); // print it. output: [ 'milk', 'bread', 'eggs' ]

shoppingList.push("butter"); // add "butter"
console.log(shoppingList); // print it again. output: [ 'milk', 'bread', 'eggs', 'butter' ]

shoppingList.push("cheese", "yogurt"); // i can add multiple items at once
console.log(shoppingList);


// Method 2: pop() - Remove from End

let playlist = ["Song A", "Song B", "Song C", "Song D"]; // let's create a playlist
console.log(playlist);

playlist.pop(); // removed the last song (Song D)
console.log(playlist); // output: [ 'Song A', 'Song B', 'Song C' ]


// Method 3: unshift() Add to Beginning

let todos = ["exercise", "study js"]; // my todo list :)
console.log(todos); // print it

todos.unshift("wake up"); // shit, i fotgot to wake up :(
console.log(todos); // let's print it again

todos.unshift("drink water", "stretch");
console.log(todos);


// Method 4: shift() - Remove from Beginning

let queue = ["first person", "second person", "third person"]; // im thinking to start a lemonade :)
console.log(queue);

queue.shift(); // first person got his drink
console.log(queue);

queue.shift(); // second person too :)
console.log(queue);


// Practice Time

// 1. Shopping cart

let cart = []; // my cart is empty :(

cart.push("apple"); // let's add apple :)
console.log(cart);

cart.push("orange"); // we need oranges too :)
console.log(cart);

cart.push("snacks");
console.log(cart);

cart.pop(); // no snacks :(
console.log(cart);

cart.unshift("milk");
console.log(cart);


// 2. Playlist

let mySongs = ["Shape of You", "Blinding Lights"];

mySongs.push("Levitating");
console.log(mySongs);

mySongs.unshift("Drivers License");
console.log(mySongs);

mySongs.pop();
console.log(mySongs);

mySongs.shift();
console.log(mySongs);


// 3. Task Priority System

let tasks = ["read emails", "attend meeting"];

tasks.unshift("fix urgent bug");
console.log(tasks);

tasks.push("write report");
console.log(tasks);

tasks.shift();
console.log(tasks);

tasks.pop();
console.log(tasks);


// 4. Inventory System

let inventory = ["laptop", "mouse", "keyboard"];

inventory.shift("laptop", "mouse");
console.log(inventory);

inventory.push("monitor", "webcam");
console.log(inventory);

inventory.unshift("laptop");
console.log(inventory);

inventory.pop();
console.log(inventory);
console.log(inventory.length);