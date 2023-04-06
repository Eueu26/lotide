const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(sentence) {
  const newObj = {};

  for (let letter of sentence) {
    if (letter !== " ")
      if (newObj[letter]) {
        newObj[letter] += 1;
      } else {
        newObj[letter] = 1;
      }
  }
  return newObj;
};

console.log(countLetters("lighthouse labs"));
