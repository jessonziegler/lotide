const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('EQUAL!!');
    return true;
  } else {
    console.log('NOT EQUAL!!!');
    return false;
  }
};

const head = function(array) {
  // ! === falsy
  // 0 === falsy
  // falsy = undefined, null, 0, '', NaN
  // truthy
  if (array.length === 0) {
    return undefined;
  } else {
    return array[0];
  }

};







assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);