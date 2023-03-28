const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || 'paper' ||'scissors') {
    return userInput;
  } else {
    return 'Try again';
  }
}

console.log(getUserChoice('paper'));
console.log(getUserChoice('papers'));