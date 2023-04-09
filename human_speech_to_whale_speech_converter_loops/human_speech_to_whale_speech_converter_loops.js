//Program takes in a string, checks vowels in string, and returns new string based with just those vowels with e and u being doubled

//Create input variable text
//Create vowels array
//Create result array
//Create for loop to iterate over input string
//Check if vowels e or u are used, if so, push vowel to result array
//Create a nested for loop to iterate over the vowels array each time the input for loop runs
//Use a conditional to check if input index is equal to the vowels array index value, push input index value to result array if matching
//Assign result string variable to result array with the join and toUpperCase methods
//Print result string

const input = 'Hello there you swimmers, lovely day for a swim!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log(input[i]);
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    //console.log(vowels[j]);
    if (input[i] === vowels[j]){
      //console.log(input[i]);
      resultArray.push(input[i]);
      //console.log(resultArray);
    }
  }
}

//console.log(resultArray);
let resultString = resultArray.join('').toUpperCase();
console.log(resultString);
