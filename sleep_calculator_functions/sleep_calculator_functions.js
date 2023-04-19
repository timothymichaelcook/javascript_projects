const daysInWeek = 7;
const getSleepHoursPerDay = 7;

const getGoalSleepHoursPerWeek = function() {
  return getSleepHoursPerDay * daysInWeek;
};
console.log('Goal amount of hours to sleep this week: ' + getGoalSleepHoursPerWeek() + ' hours');

const getSleepHours = function(day) {
  switch(day) {
    case 'Monday':
      return 8
      break;
    case 'Tuesday':
      return 8;
      break;
    case 'Wednesday':
      return 8;
      break; 
    case 'Thursday':
      return 8;
      break;
    case 'Friday':
      return 8;
      break;
    case 'Saturday':
      return 8;
      break;
    case 'Sunday':
      return 8;
      break; 
    default:
      return 'Please enter a day of the week';
      break;      
  }
};

const getActualSleepHoursPerWeek = function() {
  return getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday');
  
};

console.log('Actual amount of hours slept this week: ' + getActualSleepHoursPerWeek() + ' hours');

const calculateSleepDebt = function() {
  let actualSleepHours = getActualSleepHoursPerWeek();
  let goalSleepHours = getGoalSleepHoursPerWeek();

    if(actualSleepHours < goalSleepHours) {
    return 'Your weekly sleep goal was ' + getGoalSleepHoursPerWeek() + ' hours and you slept ' + getActualSleepHoursPerWeek() + ' hours. You slept ' + ((actualSleepHours - goalSleepHours) * -1) + ' hours less than you needed this week, keep trying!'; 
  } else if(actualSleepHours > goalSleepHours) {
    return 'Your weekly sleep goal was ' + getGoalSleepHoursPerWeek() + ' hours and you slept ' + getActualSleepHoursPerWeek() + ' hours. You slept ' + (actualSleepHours - goalSleepHours) + ' hours more than you needed this week, great job!';
  } else {
    return 'Your weekly sleep goal was ' + getGoalSleepHoursPerWeek() + ' hours and you slept ' + getActualSleepHoursPerWeek() + ' hours. You slept the exact amount you needed this week, great job!';

  }
};

console.log(calculateSleepDebt());





