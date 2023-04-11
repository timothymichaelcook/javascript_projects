let story = 'Lorem ipsum dolor sit amet, adipiscing elit. Etiam mattis ac ipsum commodo. Curabitur semper vitae ex id ultricies. Morbi eu est mauris. Cras vel nunc molestie mi luctus elementum sed quis eros. Proin consequat aliquam neque malesuada consequat. Etiam interdum risus ac porttitor accumsan. Maecenas et tincidunt nibh. Fusce lobortis et justo eu accumsan. Morbi rhoncus ultricies literally. Nunc ut dui eros. Proin posuere dapibus elit, vel varius arcu pretium nec. Pelle placerat placerat nisl eu rutrum. Sed bibendum felis fermentum quam eleifend elementum vitae blandit dui. Suspe quis suscipit mauris, ac vulputate urna. Fusce volutpat eros nulla, a gravida eros sagittis vitae. Nam luctus tincidunt facilisis. Praesent purus nulla, beautifull a sagittis ac, rhoncus in nunc. Fusce ut auctor velit. Aenean nec lorem quis orci facilisis viverra. Donec pulvinar pulvinar. Mauris metus metus, euismod non lacus eu, maximus euismod justo. Nullam sit amet sagittis est. Donec vehicula diam a tortor luctus iaculis. Maecenas vehicula, mi freaking efficitur mattis, nisl mauris semper turpis, vel dapibus eros nisl vitae dolor. Donec ipsum dui, accumsan a eros sit amet, lobortis breathtaking lorem.';
let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
let count = 0;
let longWord = 'breathtaking';

storyWords.forEach((word) => {
  count += 1;
});
console.log(count);

storyWords = storyWords.filter((word) => {
  return word !== unnecessaryWord;
});

storyWords = storyWords.map((word) => {
  if (word === misspelledWord) {
    return word = 'beautiful';
  } else {
    return word;
  }
});

let badWordIndex = storyWords.findIndex((word) => {
  return word === badWord;
});
console.log(badWordIndex);

storyWords[156] = 'really';

let lengthCheck = storyWords.every((word) => {
  return word.length < 10;
});

console.log(lengthCheck);

storyWords.forEach((word) => {
  word.length > 10 && console.log(word);
});

console.log(storyWords.join(' '));


