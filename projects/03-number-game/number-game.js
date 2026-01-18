// PROJECT: NUMBER GUESSING GAME


// ===== HELPER FUNCTIONS =====


function getRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}


// ===== GAME LOGIC =====


const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});


let gamesPlayed = 0;

let totalGuesses = 0;

let bestScore = null;

let minNum = null;

let maxNum = null;

let secretNumber;


function playGame(min, max) {

    secretNumber = getRandomNumber(min, max);

    let attempts = 0;

    let maxAttempts = 7;

    let hintGiven = false;

    
    function makeGuess() {

        if (attempts >= maxAttempts) {

            console.log(`\n💀 Game Over! You ran out of guesses!`);

            console.log(`The number was ${secretNumber}\n`);

            askToPlayAgain();

            return;

        }
        
        rl.question(`Enter your guess (${maxAttempts - attempts} left): `, (input) => { 

            let guess = Number(input);

            attempts++;

            
            if (isNaN(guess)) {

                console.log("❌ Please enter a valid number!");

                attempts--;

                return makeGuess();

            }

            
            if (guess < min || guess > max) {

                console.log(`❌ Guess must be between ${min} and ${max}!`);

                attempts--;

                return makeGuess();

            }
            
            let difference = Math.abs(guess - secretNumber);
            
            if (guess < secretNumber) {

                console.log("\n📈 Too low!");

                if (difference <= 5) {

                    console.log("🔥 HOT!");

                } else if (difference <= 10) {

                    console.log("🌡️ WARM!");

                } else if (difference <= 20) {

                    console.log("❄️ Cold!");

                } else {

                    console.log("🧊 Freezing!");

                }
                
                if (attempts >= 3 && !hintGiven) {

                    giveHint();

                    hintGiven = true;

                }

                makeGuess();
                
            } else if (guess > secretNumber) {

                console.log("\n📉 Too high!");

                if (difference <= 5) {

                    console.log("🔥 HOT!");

                } else if (difference <= 10) {

                    console.log("🌡️ WARM!");

                } else if (difference <= 20) {

                    console.log("❄️ Cold!");

                } else {

                    console.log("🧊 Freezing!");

                }
                
                if (attempts >= 3 && !hintGiven) {

                    giveHint();

                    hintGiven = true;

                }

                makeGuess();
                
            } else {

                console.log(`\n🎉 CORRECT! The number was ${secretNumber}!`);

                console.log(`🎯 You guessed it in ${attempts} attempts!`);
                
                gamesPlayed++;

                totalGuesses += attempts;
                
                if (bestScore === null || attempts < bestScore) {

                    console.log(`🏆 NEW BEST SCORE! (Previous: ${bestScore || 'none'})`);

                    bestScore = attempts;
                    
                }
                
                if (gamesPlayed === 1) {

                    console.log("🎊 First win! Keep playing to improve your score!");

                }
                
                askToPlayAgain();

            }

        });

    }
    
    makeGuess();

}


function askToPlayAgain() {

    rl.question('\n🔄 Play Again? (yes/no): ', (answer) => {

        if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {

            playGame(minNum, maxNum);

        } else {

            showFinalStats();

            console.log("\n👋 Thanks for playing!\n");

            rl.close();

        }
    });
}


function showFinalStats() {

    if (gamesPlayed === 0) {

        console.log("\n📊 No games played yet!");

        return;

    }
    
    console.log("\n📊 ===== FINAL STATS ===== 📊");

    console.log(`Games Played: ${gamesPlayed}`);

    console.log(`Total Guesses: ${totalGuesses}`);

    console.log(`Average Guesses: ${(totalGuesses / gamesPlayed).toFixed(1)}`);

    console.log(`Best Score: ${bestScore} guesses`);

}


function chooseDifficulty() {

    console.log("\nChoose difficulty:");

    console.log("[1] Easy (1-50)");

    console.log("[2] Medium (1-100)");

    console.log("[3] Hard (1-500)\n");
    

    rl.question('Choice: ', (choice) => {

        if (choice === '1') {

            minNum = 1;

            maxNum = 50;

            console.log(`\n🎯 I'm thinking of a number between ${minNum} and ${maxNum}...\n`);

            playGame(minNum, maxNum);

        } else if (choice === '2') {

            minNum = 1;

            maxNum = 100;

            console.log(`\n🎯 I'm thinking of a number between ${minNum} and ${maxNum}...\n`);

            playGame(minNum, maxNum);

        } else if (choice === '3') {

            minNum = 1;

            maxNum = 500;

            console.log(`\n🎯 I'm thinking of a number between ${minNum} and ${maxNum}...\n`);

            playGame(minNum, maxNum);

        } else {

            console.log("\n❌ Invalid choice! Choose 1, 2, or 3.\n");

            chooseDifficulty();

        }

    });

}


function giveHint() {

    if (secretNumber % 2 === 0) {

        console.log("💡 Hint: The number is EVEN");

    } else {

        console.log("💡 Hint: The number is ODD");

    }

}


// ===== START THE GAME =====


console.log("\n🎲 Welcome to the Number Guessing Game!");

console.log("\nCan you guess the secret number?");

chooseDifficulty();