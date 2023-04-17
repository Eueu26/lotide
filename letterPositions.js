const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  let position = 0;

  for (const i of sentence) {
    if (i === " ") {}
    else if (results[i] === undefined) {
      results[i] = [position];
    } else {
      results[i].push(position);
    }
    position++;
  }
  return results;
};

module.exports = letterPositions;

// console.log(assertArraysEqual(letterPositions("Hello").e, [1]));
