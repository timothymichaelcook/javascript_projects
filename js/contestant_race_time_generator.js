// Inputs
let registeredEarly;
let registeredLate;
let age;

// Outputs
let runnerNumber;
let runnerTime;
const raceNumberLow = Math.floor(Math.random() * 1000);
const raceNumberHigh = Math.floor(Math.random() * 1000) + 1000;
//console.log(raceNumberLow, raceNumberHigh);

// User input
registeredEarly = false;
age = 15;

if (registeredEarly) {
  registeredEarly;
} else {
  registeredLate = true;
}

//console.log(registeredEarly, registeredLate);

if (registeredEarly && age >= 18) {
  runnerNumber = raceNumberHigh;
  runnerTime = '9:30 am'
  console.log(`Your race number is ${runnerNumber} and your race begins at ${runnerTime}.`);
} else if (registeredLate && age >= 18) {
  runnerNumber = raceNumberLow;
  runnerTime = '11:00 am';
  console.log(`Your race number is ${runnerNumber} and your race begins at ${runnerTime}.`)
} else {
  runnerNumber = raceNumberLow;
  runnerTime = '12:30 pm'
  console.log(`Your race number is ${runnerNumber} and your race begins at ${runnerTime}.`)
}

