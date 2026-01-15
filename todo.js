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

    console.log("\n" + "─".repeat(40));

    let completed = 0;

    for (let i = 0; i < tasks.length; i++) {

        if (tasks[i].completed) completed++;

    }

    console.log(`Total: ${tasks.length} | Completed: ${completed} | Remaining: ${tasks.length - completed}`);

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

    console.log("\n📝 ===== FILTERED TASKS ===== 📝\n");

    let filteredTasks = [];

    if (filter === "all") {

        filteredTasks = tasks;

    } else if (filter === "completed") {

        for (let i = 0; i < tasks.length; i++) {

            if (tasks[i].completed === true) {

                filteredTasks.push(tasks[i]);

            }

        }

    } else if (filter === "incomplete") {

        for (let i = 0; i < tasks.length; i++) {

            if (tasks[i].completed === false) {

                filteredTasks.push(tasks[i]);

            }

        }

    }

    if (filteredTasks.length === 0) {

        console.log(`No ${filter} tasks found!`);

        showMenu();

        return;

    }

    for (let i = 0; i < filteredTasks.length; i++) {

        let task = filteredTasks[i];

        let status = task.completed ? "✅" : "❌";

        console.log(`${task.id}. ${task.task} ${status}`);

    }

    console.log("\n" + "─".repeat(40));

    showMenu();

}


function showStats() {

    let total = tasks.length;

    let completed = 0;

    let incomplete = 0;

    for (let i = 0; i < tasks.length; i++) {

        if (tasks[i].completed) {

            completed++;

        } else {

            incomplete++;

        }

    }

    let percentage = total > 0 ? ((completed / total) * 100).toFixed(1) : 0;

    console.log("\n📊 ===== TASK STATISTICS ===== 📊\n");
    console.log(`Total Tasks: ${total}`);
    console.log(`Completed: ${completed} ✅`);
    console.log(`Incomplete: ${incomplete} ❌`);
    console.log(`Progress: ${percentage}% complete`);

}


function clearAllTasks() {

    if (tasks.length === 0) {

        console.log("\n📝 No tasks to clear!");

        return;

    }

    rl.question('\n⚠️ Are you sure you want to delete ALL tasks? (yes/no): ', (answer) => {

        if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {

            let count = tasks.length;

            tasks = [];

            nextId = 1;

            console.log(`\n🗑 Cleared ${count} tasks!\n`);

        } else {

            console.log("\n✅ Cancelled. Tasks are safe!\n");

        }

        showMenu();

    });

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
    console.log("[6] View Statistics");
    console.log("[7] Clear All Tasks");
    console.log("[8] Exit");

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

    } else if (choice === '5') {

        console.log("\n[1] All Tasks");
        console.log("[2] Completed Tasks");
        console.log("[3] Incomplete Tasks");

        rl.question('\nFilter choice: ', (filterChoice) => {

            if (filterChoice === '1') {

                filterTasks("all");

            } else if (filterChoice === '2') {

                filterTasks("completed");

            } else if (filterChoice === '3') {

                filterTasks("incomplete");

            } else {

                console.log("\n❌ Invalid filter choice!");

                showMenu();

            }

        });

    } else if (choice === '6') {

        showStats();

        showMenu();

    } else if (choice === '7') {

        clearAllTasks();

    } else if (choice === '8') {

        console.log("\n👋 Thanks for using To-Do List Manager!");
        
        console.log("\n📊 Final Stats:");
        
        showStats();
        
        console.log("");
        
        rl.close();

    } else {

        console.log(`\n❌ Invalid choice!`);

        showMenu();

    }

}


// ===== START THE APP =====


console.log("\n👋 Welcome to your To-Do List!");

showMenu();