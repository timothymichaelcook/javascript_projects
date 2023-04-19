  //
  // function num2() {
  //   return 8;
  // };
  // console.log(num2());

//Value
let num = 1;
console.log(num); //output 1
num = 2;
console.log(num); //output 2

//value

//reference

//primitive
/*
number
null 
undefined
string
boolean
*/
//object



//Reference
const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};
 
let paintIt = obj => {
  obj.color = 'glorious gold'
};
 
paintIt(spaceship);
 
spaceship.color // Returns 'glorious gold'

//#2
let robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo: function() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo());

robot = {
  newModel: 'ABCDEF'
}

console.log(robot);


//Notes
let spaceship1 = {
  homePlanet : 'Earth',
  color : 'red'
};
let tryReassignment = obj => {
  obj = {
    identified : false, 
    'transport type' : 'flying'
  }
  console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
 
};
tryReassignment(spaceship1) // The attempt at reassignment does not work.
spaceship1 // Still returns {homePlanet : 'Earth', color : 'red'};
 
spaceship1 = {
  identified : false, 
  'transport type': 'flying'
}; // Regular reassignment still works.


