// *Psuedo code*
// 1.1 Get user choice
// 2.1 Get computer choice
// 3.1 Compare user and computer choice
// 4.1 Determine winner base on user and computer choice
// 4.2 Rock choice beats scissors choice
// 4.3 Scissors choice beats paper choice
// 4.4 Paper choice beats rock choice
// 4.5 Same choice of user and computer results in a tie
// 5.1 Initialize game and display results

// Questions
// 1. How to have computerChoice use toLowerCase method?
// 2. Check data type of userInput from Jeff's if statement
// 3. How to read code, start at initGame function?
// 4. Convert getUserChoice to use randomNumber switch statement instead of hard coding value

// *Start code*
// 1.1
const getUserChoice = userInput => {
  // if (!typeof userInput === 'string') {
  //   console.log('Invalid');
  //   return false;
  // }
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
    const randomNumber = Math.floor(Math.random() * 3); // 0 <= randomNumber < 1
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
// const getComputerChoice = () => {
//   const randomNumber = Math.floor(Math.random() * 6); // 0 <= randomNumber < 1
//   switch (randomNumber) {
//     case 0:
//       return 'rock';
//     case 1:
//       return 'paper';
//     case 2:
//       return 'scissors';
//     case 3:
//       return 'Rock';
//     case 4: 
//       return 'Paper';
//     case 5:
//       return 'Scissors';
//   }
// }

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
  const userChoice = getUserChoice('rock'); // needs to return true in order to go to next line of code
  const computerChoice = getComputerChoice();
  console.log(`User choice: ${userChoice}.\nComputer choice: ${computerChoice}.`);
  const result = determineWinner(userChoice, computerChoice);
  console.log(result);
}

initGame();



/*
if (!typeof userInput === 'string') {
  console.log('Invalid');
  return false;
}
*/




