// * PSUEDO CODE *
// 1.1 Get user choice
// 2.1 Get computer choice
/* 3.1 Compare choices
Rock choice beats scissors choice
Scissors choice beats paper choice
Paper choice beats rock choice
Same choice of user and computer results in a tie
*/ 
// 4.1 Initialize game
// 5.1 Display results

// Questions
// 1. How to have computerChoice use toLowerCase method?

// 1.1
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Invalid selection! Please choose rock, paper, or scissors.');
  }
}

// Test
console.log('Testing getUserChoice function.');
console.log(getUserChoice('paper'));
console.log(getUserChoice('papers'));

// 2.1
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

// Test
console.log('Testing getComputerChoice function.')
console.log(getComputerChoice());

// 3.1
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Result: Tie';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Result: Computer won'
    } else {
      return 'Result: User won';  
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Result: Computer won'
    } else {
      return 'Result: User won';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Result: Computer won';
    } else {
      return 'Result: User won';
    }
  }
  if (userChoice === 'bomb') {
    return 'Result: User won';
  }
}

// Test
console.log('Testing determineWinner function.');
console.log(determineWinner('rock', 'paper'));

const initGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`User choice: ${userChoice}.\nComputer choice: ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
}

initGame();



/*
if (!typeof userInput === 'string') {
  console.log('Invalid');
  return false;
}
*/




