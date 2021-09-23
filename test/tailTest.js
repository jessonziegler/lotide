const tail = require('../tail');
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('EQUAL!!');
    return true;
  } else {
    console.log('NOT EQUAL!!!');
    return false;
  }
};
assertEqual(tail([1,2,3])[0], 2);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(tail(words)[0], "Lighthouse")