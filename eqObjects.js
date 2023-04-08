const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

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

const eqObjects = function(Object1, Object2) {
  
  let obj1Keys = Object.keys(Object1);
  let obj2Keys = Object.keys(Object2);

  if (obj1Keys.length === obj2Keys.length) {
    for (let key of obj1Keys) {
      if (Array.isArray(Object1[key]) && Array.isArray(Object2[key])) {
        if (!eqArrays(Object1[key], Object2[key])) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};