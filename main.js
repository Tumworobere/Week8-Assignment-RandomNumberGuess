//Random Number Guessing Game:
//Develop a program that generates a random number between 1 and 100. Allow the user to guess the number and provide feedback on whether the guess is too high, too low, or correct.Do not use prompt.

// Function to generate a random number between a given range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Generate a random number between 1 and 100
  let randomNumber = getRandomNumber(1, 100);

  // Function to check the user's guess against the random number
  function checkGuess(userGuess) {
  // Check if the user's guess is a valid number between 1 and 100
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      return 'Please enter a valid number between 1 and 100.';
    } else if (userGuess < randomNumber) {
      return 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
      return 'Too high! Try again.';
    } else {
      return `Congratulations! ${randomNumber} is correct!`;
    }
  }

  // Example usage with different guess numbers:
let userGuess1 = 90;
console.log(checkGuess(userGuess1));

let userGuess2 = 80;
console.log(checkGuess(userGuess2));

let userGuess3 = 2;
console.log(checkGuess(userGuess3));

// Example with a correct guess
let userGuess4 = randomNumber;
console.log(checkGuess(userGuess4));