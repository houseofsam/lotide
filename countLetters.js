const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  let letterCounter = {};

  for (let letter of sentence) {
    if (letter === ' ') {
      continue; //breaks out of current iteration. break breaks out of for loop completely.      
    }
    
    if (letterCounter[letter]) {
      // if current letter already exists as a key in letterCounter object
      letterCounter[letter] += 1;
    } else {
      // if not, create a new key and set its value to one
      letterCounter[letter] = 1;
    }
  }

  console.log(letterCounter);
  return letterCounter;
};


countLetters('Hello I\'m a student at LHL');
countLetters("lighthouse in the house");
countLetters('');
// countLetters(43); throws error 

let newarr = (Object.keys(countLetters('hello')));
console.log(newarr)

// I can most def use regex here. 
// //possible to never write nested ifs. 