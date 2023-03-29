// *Psuedo code*
// 1. Get age in human years
// 2.1 Convert first two human years to dog years (1 human year = 10.5 dog years)
// 2.2 Convert three+ of human years to dog years (1 human year = 4 dog years)
// 3. Add early human years conversion to later human years conversions, assign to 
// 4. Display dog years age

// *Start code*
// Get user age in human years
const userAge = 31;
//console.log(`Human age: ${userAge}`);

// Convert first two human years to dog years
let earlyHumanYearsToDogYears = 2;
earlyHumanYearsToDogYears *= 10.5;
//console.log(`1-2 human years converted to dog years: ${earlyHumanYearsToDogYears}`);

// Convert rest of human years to dog years 
let laterHumanYearsToDogYears = myAge -= 2;
laterHumanYearsToDogYears *= 4;
//console.log(`3+ human years converted to dog years: ${laterHumanToDogYears}`);

// Assign user age to dog yeears by adding early human year and later human years
let userAgeInDogYears = earlyHumanYearsToDogYears + laterHumanYearsToDogYears;
//console.log(`User age converted to dog years: ${userAgeInDogYears}`);

// Declare user name variable
const userName = 'Tim'.toLowerCase();
//console.log(`User name: ${userName}`);

// Display results
console.log(`My name is ${userName}. I am a ${userAge} years old in human years which is ${userAgeInDogYears} years in old in dog years.`);




