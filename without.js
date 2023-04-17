const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemToRemove) {
  let itemToStay = [];
  for (let num of source) {
    let shouldStay = true;
    for (let num2 of itemToRemove) {
      if (num === num2) {
        shouldStay = false;
      }
    }
    if (shouldStay === true) {
      itemToStay.push(num);
    }
  }
  return itemToStay;
};

const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"]));

// console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));

module.exports = without;