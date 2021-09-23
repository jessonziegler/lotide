const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('EQUAL!!');
    return true;
  } else {
    console.log('NOT EQUAL!!!');
    return false;
  }
};


const findKey = function(object, callback) {
  console.log(object, callback);
  for (let key in object) {
    //console.log(key)
    console.log(object[key]);
    console.log(callback(object[key]));
    if (callback(object[key])) {
      return key;
    }
  }
};

// implement a findKey function
// use the function it will take in an object and callback
// scan object and return first key that callback returns thruthy
// if no key is found return undefined

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"