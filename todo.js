// PROJECT: TO-DO LIST MANAGER


// ===== DATA STORAGE =====


let tasks = [];

let nextId = 1;


// ===== CORE FUNCTIONS =====


function addTask(tasktext) {

    // 1. create new task object with:
    // - id: nextId
    // - task: taskText
    // - completed: false

    // 2. add task object to tasks array

    // 3. incremnt nextId (nextId++)

    // 4. show success message

}


function removeTask(taskId) {

    // 1. find the task by its id:
    // - loop through tasks array
    // - find that specific task (tasks[i].id === taskid)

    // 2. remove it from tasks array (tasks[i].splice(i, 1))

    // 3. show success message

}


function viewTasks() {

    // this could display like this:

    // 📝 To-Do
    // 
    // 1. Learn JS ✅
    // 2. Build calculator ✅
    // 3. Build todo list ❌

}


// ===== FEATURE FUNCTIONS


function toggleComplete(taskId) {

    // 1. loop through tasks array and find the task (tasks[i].id === taskId)

    // 2. flip its completed value

    // 3. show success message

}


function filterTasks(filter) {

    // 1. ask: all, completed, or incomplete? (number: 1-3)

    // 2. if all = call viewTasks() function
    // 
    // else:
    // sort using a loop and print each task (the same format)

}


// ===== HELPER FUNCTIONS =====


function findTaskById(taskId) {

    // 1. find it

    // 2. show it

}


// ===== MENU SYSTEM =====


const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});


function showMenu() {

    console.log("\n📝 ===== TO-DO LIST MANAGER ===== 📝");
    console.log("\n[1] Add Task");
    console.log("[2] View All Tasks");
    console.log("[3] Toggle Task Complete");
    console.log("[4] Remove Task");
    console.log("[5] Filter Tasks");
    console.log("[6] Exit");

    rl.question('\nChoice: ', handleMenuChoice);

}


function handleMenuChoice(choice) {
    
    console.log(`You chose: ${choice}`);

    showMenu();

}


// ===== START THE APP =====


console.log("\n👋 Welcome to your To-Do List!");

showMenu();