// utils.js – Reusable utility functions

// Generates a random number between 1 and 100
export const getRandomNumber = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Shows an alert message
export const showAlert = (message) => alert(message);

// Gets user input as a number
export const getUserGuess = () => {
  const input = prompt("Enter your guess (1–100):");
  return parseInt(input);
};                                                       
