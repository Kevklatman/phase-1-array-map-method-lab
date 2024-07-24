const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//create an array of each title's induvidual words using the .split method and then iterate through the array using index of 0 and .uppercase to capitalize the first letter 
//use the .touppercase array as a callback function within the titleCased function. that should allow an iteration inside of an iteration

function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial.split(' ').map(word => {
      return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
  });
}

