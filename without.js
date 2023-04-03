const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1, array2)) {
    console.log("The arrays are the same");
  } else {
    console.log("The arrays are different");
  }

};

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
console.log(without(words, ["lighthouse"]));

console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));