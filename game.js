// game.js – Game logic and functionality
import { getRandomNumber, showAlert, getUserGuess } from './utils.js';

export function startGame() {
  // Variables & Constants
  const target = getRandomNumber();
  const maxTries = 7;
  let attempts = 0;
  let won = false;
  const guesses = []; // Array to store guesses

  // Welcome alert
  showAlert("Welcome to Guess the Number! \nGuess a number between 1 and 100. You have 7 tries.");

  //  Loop: Game logic using while
  while (attempts < maxTries) {
    const guess = getUserGuess();

    //  Control Flow: if-else
    if (isNaN(guess) || guess < 1 || guess > 100) {
      showAlert("Invalid input! Enter a number between 1 and 100.");
      continue;
    }

    guesses.push(guess); // Array method: push()
    attempts++;

    if (guess === target) {
      showAlert(`Congratulations!! You guessed the correct number in ${attempts} tries.\nYour guesses: ${guesses.join(", ")}`);
      won = true;
      break;
    } else if (guess < target) {
      showAlert(`🔼 Too low! Tries left: ${maxTries - attempts}`);
    } else {
      showAlert(`🔽 Too high! Tries left: ${maxTries - attempts}`);
    }
  }

  // End of game
  if (!won) {
    showAlert(`Aww Game Over! The correct number was ${target}.\nYour guesses: ${guesses.join(", ")}`);
  }

  analyzeGuesses(guesses); // Function call
}

// Function: analyzeGuesses
const analyzeGuesses = (guesses) => {
  //  Array method: reduce()
  const total = guesses.reduce((sum, val) => sum + val, 0);
  const avg = (total / guesses.length).toFixed(2);
  const first = guesses[0];
  const last = guesses[guesses.length - 1];

  // Array iteration: forEach()
  const breakdown = [];
  guesses.forEach((guess, index) => {
    breakdown.push(`Guess ${index + 1}: ${guess}`);
  });

  showAlert(`Guess Stats:
- Avg: ${avg}
- First Guess: ${first}
- Last Guess: ${last}`);

  showAlert("Your Guesses:\n" + breakdown.join("\n"));
};
