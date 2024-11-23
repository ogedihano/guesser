let secretNumber = Math.floor(Math.random() * 100) + 1;
let remainingAttempts = 10;

const feedback = document.getElementById('feedback');
const remaining = document.getElementById('remaining');
const guessInput = document.getElementById('guess');

document.getElementById('submitGuess').addEventListener('click', () => {
  const guess = parseInt(guessInput.value, 10);


  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedback.textContent = 'Invalid input! Enter a number between 1 and 100.';
    feedback.className = 'wrong';
    return;
  }

  remainingAttempts--;
  remaining.textContent = `Remaining Attempts: ${remainingAttempts}`;


  if (guess === secretNumber) {
    feedback.textContent = '🎉 Congratulations! You guessed the correct number!';
    feedback.className = 'correct';
    guessInput.disabled = true;
  } else if (remainingAttempts > 0) {
    feedback.textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
    feedback.className = 'wrong';
  } else {
    feedback.textContent = `💔 Game over! The correct number was ${secretNumber}.`;
    feedback.className = 'wrong';
    guessInput.disabled = true;
  }
});

document.getElementById('restart').addEventListener('click', () => {
  // Reset Game State
  secretNumber = Math.floor(Math.random() * 100) + 1;
  remainingAttempts = 10;
  feedback.textContent = '';
  remaining.textContent = 'Remaining Attempts: 10';
  guessInput.value = '';
  guessInput.disabled = false;
  feedback.className = '';
});
