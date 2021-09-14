// 2 for actual //
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('EQUAL!!');
    return true;
  } else {
    console.log('NOT EQUAL!!!');
    return false;
  }
};
const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};
console.log(tail([1,2,3]));
assertEqual(tail([1,2,3])[0], 2);
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(words);