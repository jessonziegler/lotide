const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log('EQUAL!!');
    return true;
  } else {
    console.log('NOT EQUAL!!!');
    return false;
  }
};
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;

  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;

    }

  }
  return true;
};

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
const results = [];
 for (let item of array) {
  results.push(callback(item));
}
console.log(results)
return results;
};
console.log(map(words, word => word[0] ))
const results1 = map(words, word => word[0]);

assertEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);