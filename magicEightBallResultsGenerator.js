// * PSEUDO CODE *
// 1.1 Get user name from user, assign to userName variable
// 1.2 Display username from user, if blank, display 'Invalid Username!
// 2.1 Get user question
// 2.2 Display user question
// 3.1 Generate random whole number, assign to variable
// 4.1 Declare magicEightBallResults variable, assign to empty string 
// 5.1 Use conditional to assign randomNumber variable to magicEightBallResults variable
// 6.1 Display magicEightBallResults variable

// * COMPONENTS *
// Variables: userName, userQuestion, randomNumber, magicEightBallResults
// Conditionals: If/else if/ else or switch statement assigning magicEightBallResults to random number

// * START CODE *
// 1.1
let userName = 'User1';

// 1.2
userName ? console.log(`Hello ${userName}!`) : console.log('Invalid Username!');

// 2.1 (Angels in the Outfield reference)
let userQuestion = 'Will I win, will I win, will I win win win?';

// 2.2
console.log(`You asked the Magic 8 Ball: ${userQuestion}`);

// 3.1
let randomNumber = Math.floor(Math.random() * 6);

// 4.1
let magicEightBallResults = '';

// 5.1
switch (randomNumber) {
  case 0:
    magicEightBallResults = 'It is certain...';
    break;
  case 1:
    magicEightBallResults = 'It is decidedly so...';
    break;
  case 2:
    magicEightBallResults = 'Reply hazy try again...';
    break;
  case 3:
    magicEightBallResults = 'Cannot predict now...';
    break;
  case 4:
    magicEightBallResults = 'Maybe.';
    break;
  case 5:
    magicEightBallResults = 'Unfortunately not today...';
    break;
}

// 6.1
console.log(`The magic eight ball says: ${magicEightBallResults}`);


