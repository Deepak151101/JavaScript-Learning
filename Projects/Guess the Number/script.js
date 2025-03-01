let randomNumber = parseInt(Math.random() * 100 + 1);       // To get a random no. from 1 to 100

const submit = document.querySelector('#subt');             // Submit Button
const userInput = document.querySelector('#guessField');    // User i/p value
const guessSlot = document.querySelector('.guesses');       // To show previous guesses
const remaining = document.querySelector('.lastResult');    // To show remaining guesses
const lowOrHi = document.querySelector('.lowOrHi');         // To show if the guess is low or high
const startOver = document.querySelector('.resultParas');   // To start a new game (When user has used all his guesses)

const p = document.createElement('p');

let prevGuess = [];     // A array of guesses user tried
let numGuess = 1;       // Shows no. of attempts user has taken

let playGame = true;    // Such a boolean variable is always used is Games. When false we stop playing.

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();     // To Prevent Auto submit of form by default
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {             // Check if the user entered a valid no.
    if (isNaN(guess)) {
        alert('PLease enter a valid number');
    } else if (guess < 1) {
        alert('PLease enter a number more than 1');
    } else if (guess > 100) {
        alert('PLease enter a  number less than 100');
    } else {
        prevGuess.push(guess);              // Guessed Numbers will be pushed in prevGuess array
        if (numGuess === 11) {              // No. of Guesses should be less than 10 or else game will end
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {                // Check if the guess is right or not
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOOO High`);
    }
}

function displayGuess(guess) {              // Display the previous guesses
    userInput.value = '';                   // Here we clear the input field after every guess
    guessSlot.innerHTML += `${guess}, `;    
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {          // Tells guess is low or high
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {                        // To end the game       
    userInput.value = '';                   // Here we clear the input field after every guess
    userInput.setAttribute('disabled', ''); // Here we disable the input field after every guess. It is a key value pair, so we give 2nd value as empty
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {                        // To start a new game
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}