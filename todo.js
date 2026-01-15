// PROJECT: TO-DO LIST MANAGER


// ===== DATA STORAGE =====


let tasks = [];

let nextId = 1;


// ===== CORE FUNCTIONS =====


function addTask(taskText) {

    let newTask = {

        id: nextId,

        task: taskText,

        completed: false

    };

    tasks.push(newTask);

    nextId++;

    console.log(`\n✅ Task Added: "${taskText}"`);

}


function removeTask(taskId) {

    for (let i = 0; i < tasks.length; i++) {

        if (tasks[i].id === taskId) {

            let taskText = tasks[i].task;

            tasks.splice(i, 1);

            console.log(`\n🗑️ Removed: "${taskText}"`);

            return;

        }

    }

    console.log(`\n❌ Task #${taskId} not found!`);

}


function viewTasks() {

    console.log("\n📝 ===== YOUR TASKS ===== 📝\n");

    if (tasks.length === 0) {

        console.log("No tasks yet! Add one to get started.");

        return;

    }
    
    for (let i = 0; i < tasks.length; i++) {

        let task = tasks[i];

        let status = task.completed ? "✅" : "❌";

        console.log(`${task.id}. ${task.task} ${status}`);
        
    }

}


// ===== FEATURE FUNCTIONS =====


function toggleComplete(taskId) {

    let task = findTaskById(taskId);
    
    if (task === null) {

        console.log(`\n❌ Task #${taskId} not found!`);

        return;

    }
    
    task.completed = !task.completed;
    
    let status = task.completed ? "complete" : "incomplete";

    console.log(`\n✔️ Marked "${task.task}" as ${status}`);

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

    for (let i = 0; i < tasks.length; i++) {

        if (tasks[i].id === taskId) {

            return tasks[i];

        }

    }

    return null;

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

    if (choice === '1') {

        rl.question('Enter task: ', (taskText) => {

            addTask(taskText);

            showMenu();

        });

    } else if (choice === '2') {

        viewTasks();

        showMenu();

    } else if (choice === '3') {

        rl.question('Enter task ID to toggle: ', (id) => {

            toggleComplete(Number(id));

            showMenu();

        });

    } else if (choice === '4') {

        rl.question('Enter task ID to remove: ', (id) => {

            removeTask(Number(id));

            showMenu();

        });

    } else if (choice === '6') {

        console.log("\n👋 Goodbye!");

        rl.close();

    } else {

        console.log(`\nYou chose: ${choice}`);

        showMenu();

    }

}


// ===== START THE APP =====


console.log("\n👋 Welcome to your To-Do List!");

showMenu();