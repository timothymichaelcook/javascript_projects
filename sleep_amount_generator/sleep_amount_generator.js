// *Psuedo Code


// Get goal amount of sleep per week
// Get get actual amount of sleep per week
// Get necessary hours of sleep
// Conditional to compare goal sleep to actual sleep
// Display results



const getSleepHours = day => {
  switch (day) {
    case 'Monday':
      console.log(8);
      break;
    case 'Tuesday':
      console.log(8);
      break;
    case 'Wednesday':
      console.log(8);
      break;
    case 'Thursday':
        console.log(8);
        break;  
    case 'Friday':
      console.log(8);
      break;
    case 'Saturday':
        console.log(8);
        break;
    case 'Sunday':
      console.log(8);
      break;  
  }
}

let result = getSleepHours('Tuesday');
console.log(result);