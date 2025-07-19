import { startGame } from './game.js'; //Initiates the game.

let playAgain = true;

while (playAgain) {
  startGame();  // This runs one game round.

  // This asks user if they want to play again.
  const answer = prompt("Do you want to play again? (yes/no)").toLowerCase();//This will make sure that user's input gets converted to lowercase yes/no.

  if (answer !== 'yes') {
    playAgain = false;  // This will stop the loop.
  }
}

alert("Thanks for playing! Bye-Bye!");
